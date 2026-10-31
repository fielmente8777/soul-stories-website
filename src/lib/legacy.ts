import source from "@/data/legacy-content.json";

export type ContentBlock = {
  type: string;
  html?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string;
  label?: string;
};

export type ContentPage = {
  title: string;
  description: string;
  blocks: ContentBlock[];
  source: string;
  enquiry: boolean;
};

export const legacy = source as unknown as {
  pages: Record<string, ContentPage>;
  archives: Record<string, { title: string; description: string; posts: string[] }>;
  blogs: Record<string, { content: string; categories: string[]; tags: string[] }>;
  faqs: { question: string; answer: string }[];
  villas: Record<string, ContentBlock[]>;
  distances: { place: string; distance: string }[];
  supplements: Record<string, ContentBlock[]>;
};

export const wellnessLinks = [
  { label: "Heal Your Life Retreat", href: "/wellness/heal-your-life-retreat/", image: "/soul-care/im15.webp" },
  { label: "Yoga Retreat", href: "/wellness/yoga-retreat/", image: "/soul-care/im17.webp" },
  { label: "Spa Menu", href: "/wellness/spa-menu/", image: "/soul-care/im13.webp" },
  { label: "Wellness Journeys: Sleep Reboot", href: "/wellness/wellness-journeys-sleep-reboot/", image: "/soul-care/im20.webp" },
  { label: "Wellness Journeys: Stress to Stillness", href: "/wellness/wellness-journeys-stress-to-stillness/", image: "/soul-care/im10.webp" },
];

export const groupLinks = [
  { label: "Destination Wedding", href: "/destination-wedding/", image: "/weddings.jpg", description: "A magical destination for intimate celebrations, with space for up to 50 guests." },
  { label: "Corporate Events", href: "/corporate-events/", image: "/Corporate-Events.jpg", description: "Tailored for teams up to 40 guests, with spaces to connect and recharge." },
  { label: "Together and Celebrations", href: "/together-and-celebrations/", image: "/Together-and-Celebrations.jpg", description: "Family gatherings, milestone birthdays, anniversaries and reunions for up to 50 guests." },
];

export const canonicalUrl = (path: string) => `https://soulstorries.com${path === "/" ? "/" : path.replace(/\/$/, "") + "/"}`;
