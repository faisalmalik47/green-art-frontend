import type { GetServerSideProps, NextPage } from "next";
import { CommonLandingCustomSettings } from "service/landing-page";
import useTranslation from "next-translate/useTranslation";
import Navbar from "components/common/Navbar";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import Footer from "components/common/footer";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import { SEO } from "components/SEO";
import UnAuthNav from "components/common/unAuthNav";
import Cover from "components/Homepage/Cover";
import SliderSection from "components/Homepage/SliderSection";
import MarketTrends from "components/Homepage/MarketTrends";
import DistributionSection from "components/Homepage/DistributionSection";
import BottomDetails from "components/Homepage/BottomDetails";
import GetInTouch from "components/Homepage/GetInTouch";
import StartTradingNow from "components/Homepage/StartTradingNow";
import CommunityHome from "components/community/CommunityHome";
import SectionWrapper from "components/Animation/section-animation";
const Home: NextPage = ({
  landing,
  bannerListdata,
  announcementListdata,
  featureListdata,
  asset_coin_pairs,
  hourly_coin_pairs,
  latest_coin_pairs,
  loggedin,
  landing_banner_image,
  customSettings,
}: any) => {
  const { settings: common } = useSelector((state: RootState) => state.common);
  useEffect(() => {
    //@ts-ignore
    window.$crisp = [];
    //@ts-ignore
    // window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_ID;
    window.CRISP_WEBSITE_ID = common.live_chat_key;
    // live_chat_key
    (function () {
      //@ts-ignore
      if (common.live_chat_status == "1") {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        //@ts-ignore
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      }
    })();
  }, [common.live_chat_status]);
  const commonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };
  const staggerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };
  return (
    <SEO seoData={customSettings}>
      <div>
        <div>
          {loggedin ? (
            <Navbar settings={customSettings} isLoggedIn={loggedin} />
          ) : (
            <UnAuthNav />
          )}
          <>
            <SectionWrapper
              customVariants={{
                ...commonVariants,
                visible: { ...commonVariants.visible, x: 0 },
              }}
              visible={true}
            >
              <Cover
                landing={landing}
                loggedin={loggedin}
                landing_banner_image={landing_banner_image}
              />
            </SectionWrapper>

            <SectionWrapper customVariants={commonVariants} visible={true}>
              <SliderSection
                bannerListdata={bannerListdata}
                landing={landing}
                announcementListdata={announcementListdata}
              />
            </SectionWrapper>

            <SectionWrapper customVariants={commonVariants}>
              <MarketTrends
                landing={landing}
                asset_coin_pairs={asset_coin_pairs}
                hourly_coin_pairs={hourly_coin_pairs}
                latest_coin_pairs={latest_coin_pairs}
              />
            </SectionWrapper>

            {/* Additional sections with animations */}

            <SectionWrapper customVariants={staggerVariants}>
              <CommunityHome />
            </SectionWrapper>

            <SectionWrapper customVariants={staggerVariants}>
              <DistributionSection landing={landing} />
            </SectionWrapper>

            <SectionWrapper customVariants={staggerVariants}>
              <BottomDetails landing={landing} />
            </SectionWrapper>

            <SectionWrapper customVariants={staggerVariants}>
              <GetInTouch landing={landing} featureListdata={featureListdata} />
            </SectionWrapper>

            <SectionWrapper customVariants={staggerVariants}>
              <StartTradingNow landing={landing} loggedin={loggedin} />
            </SectionWrapper>
          </>

          <Footer />
          <a
            id="scrollUp"
            href="#top"
            style={{ position: "fixed", zIndex: 2147483647, display: "none" }}
          >
            <i className="fa fa-angle-up" />
          </a>
          <div id="vanillatoasts-container" />
        </div>
      </div>
    </SEO>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { data: CommonLanding } = await CommonLandingCustomSettings(ctx.locale);
  const cookies = parseCookies(ctx);
  return {
    props: {
      customPageData: CommonLanding?.custom_page_settings
        ? CommonLanding?.custom_page_settings
        : null,
      socialData: CommonLanding?.landing_settings?.media_list
        ? CommonLanding?.landing_settings?.media_list
        : null,
      copyright_text: CommonLanding?.landing_settings?.copyright_text
        ? CommonLanding?.landing_settings?.copyright_text
        : null,
      landing: CommonLanding?.landing_settings,
      bannerListdata: CommonLanding?.landing_settings?.banner_list
        ? CommonLanding?.landing_settings.banner_list
        : null,
      announcementListdata: CommonLanding?.landing_settings?.announcement_list
        ? CommonLanding?.landing_settings?.announcement_list
        : null,
      featureListdata: CommonLanding?.landing_settings?.feature_list
        ? CommonLanding?.landing_settings?.feature_list
        : null,
      asset_coin_pairs: CommonLanding?.landing_settings?.asset_coin_pairs
        ? CommonLanding?.landing_settings?.asset_coin_pairs
        : null,
      hourly_coin_pairs: CommonLanding?.landing_settings?.hourly_coin_pairs
        ? CommonLanding?.landing_settings?.hourly_coin_pairs
        : null,
      latest_coin_pairs: CommonLanding?.landing_settings?.latest_coin_pairs
        ? CommonLanding?.landing_settings?.latest_coin_pairs
        : null,
      loggedin: cookies?.token ? true : false,
      landing_banner_image: CommonLanding?.landing_settings
        ?.landing_banner_image
        ? CommonLanding?.landing_settings?.landing_banner_image
        : null,
      customSettings: CommonLanding?.common_settings,
    },
  };
};
export default Home;
