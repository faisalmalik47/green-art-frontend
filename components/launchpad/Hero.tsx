import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

const Hero = ({ data }: any) => {
  const { t } = useTranslation("common");
  return (
    <section className="hero-banner-area-pool">
      <div className="row">
        <div className="col-md-5 mt-5">
          <h1 className="banner-title mb-2">{data?.launchpad_second_title}</h1>
          <p className="banner-content mb-2">
            {data?.launchpad_second_description}
          </p>
          <Link href="/launchpad/apply">
            <button className="primary-btn">{t("Apply to launch")}</button>
          </Link>
        </div>
        <div className="col-md-7">
          <img src={data?.launchpad_main_image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
