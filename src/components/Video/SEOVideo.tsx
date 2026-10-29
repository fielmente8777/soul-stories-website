"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  priority?: boolean;
  sizes?: string;
}

const LazyLoadedVideo: React.FC<VideoProps> = ({
  src, poster, width, height, controls = true, autoPlay = true,
  loop = true, muted = true, preload = "none", priority = false,
  sizes = "100vw",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canLoad, setCanLoad] = useState(false);
  const [readySrc, setReadySrc] = useState("");
  const [requestedSrc, setRequestedSrc] = useState("");

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Let the initial document and poster finish before competing for bandwidth.
  // Hidden slides and below-the-fold videos never receive a source until visible.
  useEffect(() => {
    if (!isInView || canLoad) return;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean };
    }).connection;
    if (autoPlay && (connection?.saveData ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => { timer = setTimeout(() => setCanLoad(true), 300); };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", schedule);
    };
  }, [isInView, canLoad, autoPlay]);

  const imagePoster = poster && (poster.startsWith("/") || poster.startsWith("https://")) ? poster : undefined;
  const activeSrc = canLoad || requestedSrc === src ? src : undefined;
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !activeSrc) return;
    if (isInView && (autoPlay || requestedSrc === src)) void video.play().catch(() => {});
    else video.pause();
  }, [isInView, autoPlay, activeSrc, requestedSrc, src]);

  return (
    <div ref={containerRef} className="absolute inset-0 object-cover">
      {imagePoster && readySrc !== src && (
        <Image src={imagePoster} alt="" fill sizes={sizes} priority={priority}
          className="object-cover pointer-events-none" />
      )}
      <video
        ref={videoRef}
        src={activeSrc}
        width={width}
        height={height}
        controls={controls}
        loop={loop}
        muted={muted}
        preload={preload}
        onLoadedData={() => setReadySrc(src)}
        onPlay={() => setRequestedSrc(src)}
        controlsList="nodownload"
        className={`relative w-full h-full object-cover overflow-hidden ${readySrc === src ? "" : "opacity-0"}`}
        playsInline
      >
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
      {controls && !activeSrc && (
        <button type="button" aria-label="Play video"
          onClick={() => setRequestedSrc(src)}
          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/60 text-white text-2xl">
          ▶
        </button>
      )}
    </div>
  );
};

export default LazyLoadedVideo;
export { LazyLoadedVideo };
