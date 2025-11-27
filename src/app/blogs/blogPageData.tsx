import { blogsData } from "./[slug]/blogsData";

export const blogPageData = {
  bannerData: {
    title: "Our Blogs",
    subTitle:"The Soul Storries Edit",
  },
  cards: blogsData.map((blog) => ({
    src: blog.image,
    title: blog.title,
    description: blog.description,
    date: blog.date,
    link: { href: `/blog/${blog.slug}`, label: "Read More" },
  })),
};
