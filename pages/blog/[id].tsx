import React from "react";
import BlogCard from "components/Blog/Card";
import { GetServerSideProps } from "next";
import {
  SSRAuthCheck,
  pageAvailabilityCheck,
} from "middlewares/ssr-authentication-check";
import { getBlogDetails } from "service/blog";
import CommentSection from "components/Blog/CommentSection";
import { customPage, landingPage } from "service/landing-page";
import Footer from "components/common/footer";
import { PostCommentAction } from "state/actions/blog";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import useTranslation from "next-translate/useTranslation";
import { formateData } from "common";
import SocialShare from "components/common/SocialShare";
import { getBlogNewsSettings } from "service/news";

const BlogDetails = ({
  customPageData,
  socialData,
  copyright_text,
  blogDetails,
  BlogNewsSettings,
}: any) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="container">
        <Link href="/blog">
          <a>
            <h3 className="pb-3 newsDetailsTitle d-flex align-items-center">
              <BiChevronLeft />
              {t("Back")}
            </h3>
          </a>
        </Link>
        <div className="row">
          <div className="col-md-8">
            <div className="newsCardText mt-4">
              <h3>{blogDetails?.data?.details?.title}</h3>
              <small className="mt-5">
                {formateData(blogDetails?.data?.details?.created_at)}
              </small>
              <hr />
              <img
                className="rounded my-3"
                src={blogDetails?.data?.details?.thumbnail}
                alt=""
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: blogDetails?.data?.details?.body,
                }}></div>
            </div>
          </div>
          <div className="col-md-4">
            <SocialShare
              url={
                process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                "news/" +
                blogDetails?.data?.details?.post_id
              }
            />
            <h4 className="mt-5">More blog from here</h4>

            {blogDetails?.data?.related?.data?.map(
              (item: any, index: number) => (
                <div className="row my-4" key={index}>
                  <div className="col-12">
                    <BlogCard blog={item} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {parseInt(BlogNewsSettings?.news_comment_enable) === 1 && (
          <CommentSection
            comments={blogDetails?.data?.comments}
            post_id={blogDetails?.data?.details?.post_id}
            PostCommentAction={PostCommentAction}
            comment_allow={blogDetails?.details?.comment_allow}
          />
        )}
      </div>
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  // await SSRAuthCheck(ctx, "/blog");
  const { id } = ctx.params;
  const BlogDetails = await getBlogDetails(id);
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const commonRes = await pageAvailabilityCheck();
  const { data: BlogNewsSettings } = await getBlogNewsSettings();

  if (parseInt(commonRes.blog_news_module) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      blogDetails: BlogDetails,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      BlogNewsSettings: BlogNewsSettings,
    },
  };
};

export default BlogDetails;
