import Image from "next/image";
import { blogsData } from "./blogsData";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blog = await blogsData;

  return blog.map((blog) => ({
    slug: blog.slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const blogs = await props.params;
  const blog = await blogsData.find((blog) => blog.slug === blogs.slug);
  return {
    title: blog?.meta.title,
    description: blog?.meta.description,
    keywords: blog?.meta.keywords,
  };
}

const BlogPage = async (props: Params) => {
  const params = await props.params;

  const blog = await blogsData.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return (
      <main className="max_screen_width py-10">
        <h1 className="text-2xl font-semibold md:text-4xl text-center">
          Blog not found
        </h1>
      </main>
    );
  }
  return (
    <main className="max_screen_width py-8">
      <div className="max_width space-y-4">
        <h1 className="text-2xl font-semibold md:text-4xl font-aboreto text-primary">
          {blog.title}
        </h1>
        <p className="text-primary">{blog.date}</p>
        <div className="w-full relative aspect-[4/2]">
          <Image
            src={blog.src}
            alt={blog.title}
            fill
            sizes="100vw"
            className="object-cover rounded-md"
          />
        </div>
        <div
          className="blog_content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </main>
  );
};

export default BlogPage;
