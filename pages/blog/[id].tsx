import React from "react";
import BlogCard from "components/Blog/Card";
import { GetServerSideProps } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { getBlogDetails } from "service/blog";
import CommentSection from "components/Blog/CommentSection";
const BlogDetails = ({ blogDetails }: any) => {
  console.log(blogDetails, "blogDetails");
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div
            dangerouslySetInnerHTML={{
              __html: blogDetails?.data?.details?.body,
            }}
          ></div>
        </div>
        <div className="col-3">
          <h4 className="mb-4">More blog from here</h4>
          {blogDetails?.data?.related.map((item: any) => (
            <BlogCard blog={item} />
          ))}
        </div>
      </div>
      <CommentSection blogDetails={blogDetails} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/blog");
  const { id } = ctx.params;
  const BlogDetails = await getBlogDetails(id);
  return {
    props: {
      blogDetails: BlogDetails,
    },
  };
};

export default BlogDetails;
