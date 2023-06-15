import { CUstomSelect } from "components/common/CUstomSelect";
import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React from "react";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function index() {
  const { t } = useTranslation();
  const handleCategory = (event: any) => {
    console.log("event", event);
  };
  return (
    <section>
      {/* gift card banner start */}
      <div className="bg-card-primary-color py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <h1 className="text-45 text-capitalize font-bold gift-font-color">
                  {t("Themed Gift Cards")}
                </h1>
                <p className="my-3 gift-font-color font-medium text-16">
                  {t(
                    "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-6 grid">
              <ImageComponent src={"/demo_gift_banner.png"} height={300} />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* gift card banner end */}

      {/* Themed Gift Cards start */}
      <div className="py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>Themed Gift Cards</h3>
                  <small>Send a crypto gift card for any occasion</small>
                </div>
                <div className="d-flex align-items-center gap-10 border px-2 rounded ">
                  <span><b>Category:</b> </span>
                  <CUstomSelect
                    options={options}
                    classname={"themed-category-select-section"}
                    handleFunction={handleCategory}
                    defaultValue={options[0]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Themed Gift Cards end */}
    </section>
  );
}
