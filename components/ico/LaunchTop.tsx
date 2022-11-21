import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const LaunchTop = ({ data }: any) => {
  const { t } = useTranslation("common");
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  return (
    <div
      style={{
        backgroundImage: `url(${data?.launchpad_cover_image})`,
      }}
      className="section-top-wrap mb-25 background-image-class"
    >
      <div className="container">
        <div className="overview-area">
          <div className="overview-left ">
            <h1 className="big-top-title text-white">
              {data?.launchpad_first_title}
            </h1>
            <h4 className="blance-title text-white">
              {data?.launchpad_first_description}
            </h4>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className=" col-6 col-lg-3  mt-3 ">
            <h2 className="text-white">{t("$0")}</h2>
            <h5 className="blance-title mt-3 text-white">
              {t("Current Funds locked")}
            </h5>
          </div>
          <div className=" col-6 col-lg-3  mt-3 ">
            <h2 className="text-white">{t("$105,411,514")}</h2>
            <h5 className="blance-title mt-3 text-white">
              {t("Total Funds Raised")}
            </h5>
          </div>
          <div className=" col-6 col-lg-3  mt-3">
            <h2 className="text-white">{t("64")}</h2>
            <h5 className="blance-title mt-3 text-white">
              {t("Projects Launched")}
            </h5>
          </div>
          <div className=" col-6 col-lg-3  mt-3">
            <h2 className="text-white">{t("3,569,542")}</h2>
            <h5 className="blance-title mt-3 text-white">
              {t("All-time Unique Participants")}
            </h5>
          </div>
        </div>
        {isLoggedIn && (
          <Link href="/ico/applied-launchpad">
            <button className="primary-btn mt-5">
              {t("Launchpad dashboard")}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LaunchTop;
