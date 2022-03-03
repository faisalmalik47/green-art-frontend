import type { NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import NidModal from "components/profile/personal-verification/NidModal";

import { useState } from "react";

const PersonalVerification: NextPage = () => {
  const [type, setType] = useState<string>("");

  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title">Personal Verification{type}</h2>
            </div>
          </div>
          <NidModal type={type} />
          <div className="profile-area">
            <h4 className="section-title-medium">Verification</h4>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cp-user-profile-header">
                    <h5>Select Your ID Type</h5>
                  </div>
                  <div className="cp-user-profile-info-id-type">
                    <div
                      className="id-card-type"
                      onClick={() => setType("nid")}
                    >
                      <div
                        className="id-card"
                        data-toggle="modal"
                        data-target=".cp-user-idverifymodal"
                      >
                        <img
                          src="/cards/nid.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="card-bottom">
                        <span className="text-warning">Not Submitted</span>
                        <h5>National Id Card</h5>
                      </div>
                    </div>
                    <div
                      className="id-card-type"
                      onClick={() => setType("passport")}
                    >
                      <div
                        className="id-card"
                        data-toggle="modal"
                        data-target=".cp-user-idverifymodal"
                      >
                        <img
                          src="/cards/passport.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="card-bottom">
                        <span className="text-warning">Not Submitted</span>
                        <h5>Passport</h5>
                      </div>
                    </div>
                    <div
                      className="id-card-type"
                      onClick={() => setType("driving-licence")}
                    >
                      <div
                        className="id-card"
                        data-toggle="modal"
                        data-target=".cp-user-idverifymodal"
                      >
                        <img
                          src="/cards/driving-license.svg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="card-bottom">
                        <span className="text-warning">Not Submitted</span>
                        <h5>Driving License</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PersonalVerification.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/personal-verification");
  return {};
};
export default PersonalVerification;
