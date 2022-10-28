import type { GetServerSideProps, NextPage } from "next";
import ProfileComp from "components/profile/profile";
import { parseCookies } from "nookies";

import { GetUserInfoByTokenServer } from "service/user";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import useTranslation from "next-translate/useTranslation";
import Footer from "components/common/footer";
import { customPage, landingPage } from "service/landing-page";
const Profile: NextPage = ({
  user,
  customPageData,
  socialData,
  copyright_text,
  profileActivity,
}: any) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="page-wrap">
        <ProfileSidebar />
        <div className="page-main-content">
          <div className="container-fluid">
            <div className="section-top-wrap mb-25">
              <div className="profle-are-top">
                <h2 className="section-top-title">
                  {user?.first_name + " " + user?.last_name}
                </h2>
                <h3 className="user-mail">{user?.email}</h3>
              </div>
            </div>
            <div className="profile-area">
              <div className="section-wrapper boxShadow">
                <div className="user-profile">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="user-profile-left">
                        <div
                          className={`${
                            user?.online_status?.online_status
                              ? "userProfileActive"
                              : "userProfileDeactive"
                          } user-thumbnail`}
                        >
                          <img
                            src={user?.photo}
                            className="img-fluid"
                            alt="user"
                          />
                        </div>
                        <div className="user-profile-content">
                          <h2>{user?.first_name + " " + user?.last_name}</h2>
                          <h4>{user?.email}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                      <div className="user-profile-info">
                        <ul>
                          <li>
                            <span>{t("Name")}</span>
                            <span className="cp-user-dot">:</span>
                            <span>
                              {user?.first_name
                                ? user?.first_name + " " + user?.last_name
                                : "no name"}
                            </span>
                          </li>
                          <li>
                            <span>{t("Country")}</span>
                            <span className="cp-user-dot">:</span>
                            <span>
                              {user?.country_name
                                ? user?.country_name
                                : user?.country
                                ? user?.country
                                : t("No country")}
                            </span>
                          </li>
                          <li>
                            <span>{t("Email")}</span>
                            <span className="cp-user-dot">:</span>
                            <span>
                              {" "}
                              {user?.email ? user?.email : t("No email")}
                            </span>
                          </li>
                          <li>
                            <span>{t("Email Verification")}</span>
                            <span className="cp-user-dot">:</span>
                            <span>
                              {user?.is_verified ? (
                                <span className="badge badge-success">
                                  {t("Active")}
                                </span>
                              ) : (
                                <span className="badge badge-danger">
                                  {t("Inactive")}
                                </span>
                              )}
                            </span>
                          </li>
                          <li>
                            <span>{t("Phone")}</span>
                            <span className="cp-user-dot">:</span>
                            <span>
                              {" "}
                              +{user?.phone ? user?.phone : t("No phone")}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-status-area boxShadow tableScroll">
              <h5>{t("Profile Activity")}</h5>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Action</th>
                    <th scope="col">Source</th>
                    <th scope="col">Ip Address:</th>
                    <th scope="col">Time:</th>
                  </tr>
                </thead>
                <tbody>
                  {profileActivity?.map((item: any, index: number) => (
                    <tr key={`userAct${index}`}>
                      <th scope="row">{item.id}</th>
                      <td>{t("Login")}</td>
                      <td>{item.source}</td>
                      <td>{item.ip_address}</td>
                      <td>{item.updated_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
  await SSRAuthCheck(ctx, "/user/profile");
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const cookies = parseCookies(ctx);
  const response = await GetUserInfoByTokenServer(cookies.token);
  console.log(response.activityLog, "user data ####");

  return {
    props: {
      user: response.user,
      profileActivity: response.activityLog,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default Profile;
