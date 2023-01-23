import { TYPE_BLOG_FEATURED, TYPE_BLOG_RECENT } from "helpers/core-constants";
import { getBlogCategory, getBlogDetails, getBlogs } from "service/blog";

export const BlogHomePageAction = async () => {
  const FeaturedBlogs = await getBlogs(TYPE_BLOG_FEATURED);
  const RecentBlogs = await getBlogs(TYPE_BLOG_RECENT);
  const Categories = await getBlogCategory();

  return { FeaturedBlogs, RecentBlogs, Categories };
};

export const GetBlogDetailsAction = async (id: string) => {
  const BlogDetails = await getBlogDetails(id);
  return { BlogDetails };
};
