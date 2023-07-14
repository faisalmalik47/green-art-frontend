import {
  darkModeToggle,
  darkModeToggleDashboard,
  changeThemeSettingsDashboard,
} from "helpers/functions";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HiArrowNarrowRight, HiUserCircle } from "react-icons/hi";
import { IoMdGlobe } from "react-icons/io";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { LogoutAction } from "state/actions/user";

const NotificationDropdown = ({
  isLoggedIn,
  notificationData,
  seen,
  user,
  theme,
  settings,
  setTheme,
  setActive,
  active,
  showSettings,
  setThemeColor,
  ThemeColor,
}: any) => {
  const dispatch = useDispatch();
  const containerRef = useRef<any>(null);
  const { t } = useTranslation("common");
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsSettingsDropdownOpen(false);
    }
  };

  return (
    <div className="">
      {isLoggedIn ? (
        <div className="cp-user-top-bar-right">
          <div>
            <ul>
              <li
                className="hm-notify"
                id="notification_item"
                style={{ margin: "0 10px" }}
              >
                <div className="btn-group profile-dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ marginLeft: "0" }}
                  >
                    <span className="cp-user-avater">
                      <span>
                        <HiUserCircle size={30} />
                      </span>
                      <span className="cp-user-avater-info"></span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <p
                      className={`${
                        user?.online_status?.online_status
                          ? "userActive"
                          : "userDeactive"
                      } big-user-thumb`}
                    >
                      <img
                        src={user?.photo}
                        className="img-fluid profile-avatar"
                        alt=""
                      />
                    </p>
                    <div className="user-name">
                      <p className="nav-userName">
                        {user?.first_name!} {user?.last_name!}
                      </p>
                    </div>
                    <Link href="/user/profile">
                      <button className="dropdown-item" type="button">
                        <a href="">
                          <i className="fa-regular fa-user"></i>
                          {t("Profile")}
                        </a>
                      </button>
                    </Link>
                    <Link href="/user/settings">
                      <button className="dropdown-item" type="button">
                        <a href="">
                          <i className="fa fa-cog"></i>
                          {t("My Settings")}
                        </a>
                      </button>
                    </Link>

                    <Link href="/user/my-wallet">
                      <button className="dropdown-item" type="button">
                        <a href="-wallet">
                          <i className="fa fa-credit-card"></i>
                          {t("My Wallet")}
                        </a>
                      </button>
                    </Link>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => {
                        dispatch(LogoutAction());
                      }}
                    >
                      <a>
                        <i className="fa fa-sign-out"></i> {t("Logout")}
                      </a>
                    </button>
                  </div>
                </div>
              </li>

              <li
                className="hm-notify"
                id="notification_item"
                style={{ margin: "0 10px" }}
              >
                <div className="btn-group dropdown">
                  <button
                    type="button"
                    className="notification-btn dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span
                      className="notify-value hm-notify-number"
                      onClick={() => {}}
                    >
                      {notificationData?.length > 100
                        ? "99+"
                        : notificationData?.length}
                    </span>
                    <img src="/notification.png" className="img-fluid" alt="" />
                  </button>
                  <div className="dropdown-menu notification-list dropdown-menu-right">
                    <div className="notify-menu">
                      <div className="notification-list-title">
                        <div className="notify-counter">
                          <div className="notify-pending">
                            <p>
                              <span>{notificationData.length}</span>
                              {t("pending notifications")}
                            </p>
                            <a
                              onClick={() => {
                                seen();
                              }}
                              className="clear-all"
                              href="#"
                            >
                              {t("Clear All")}
                            </a>
                          </div>

                          <div className="notifiy-clear">
                            <Link href="/user/notification">
                              <a className="view-all">{t("View All")}</a>
                            </Link>
                            <HiArrowNarrowRight />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="notify-grid-item">
                          {notificationData?.length > 0 ? (
                            notificationData
                              ?.slice(0, 5)
                              ?.map((item: any, index: number) => (
                                <div className="notify-icon-title" key={index}>
                                  <RiNotificationBadgeLine
                                    size={20}
                                    className="notify-menu-icon"
                                  />
                                  <div>
                                    <h6>{item.title.substring(0, 40)}</h6>
                                    <p>
                                      {item.notification_body.substring(0, 50)}
                                    </p>
                                    <span>
                                      {moment(item.created_at).format(
                                        "DD MMM YYYY"
                                      )}
                                    </span>
                                  </div>
                                </div>
                              ))
                          ) : (
                            <p className="notFountNotifyText">
                              {t("No Notification Found!")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="scroll-wrapper scrollbar-inner"
                      style={{
                        position: "relative",
                      }}
                    >
                      <ul
                        className="scrollbar-inner scroll-content"
                        style={{
                          height: "auto",
                          marginBottom: "0px",
                          marginRight: "0px",
                          maxHeight: "0px",
                        }}
                      ></ul>
                      <div className="scroll-element scroll-x">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size"></div>
                          <div className="scroll-element_track"></div>
                          <div className="scroll-bar"></div>
                        </div>
                      </div>
                      <div className="scroll-element scroll-y">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size"></div>
                          <div className="scroll-element_track"></div>
                          <div className="scroll-bar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <nav className="main-menu">
                <ul>
                  <li className="hm-notify">
                    <a
                      className="arrow-icon"
                      href="#"
                      aria-expanded="true"
                      style={{ height: "48px" }}
                    >
                      <span className="">
                        <IoMdGlobe size={25} />
                      </span>
                      {/* <span className="cp-user-name">
                        {router.locale?.toLocaleUpperCase()}
                      </span> */}
                    </a>
                    <ul
                      className="dropdown-menu-main"
                      style={{ right: "0", left: "auto" }}
                    >
                      {settings?.LanguageList?.map((item: any, index: any) => (
                        <li key={index}>
                          <Link href={router.asPath} locale={item.key}>
                            <a className="py-1 menu-hover">{item.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li
                    onClick={() => {
                      darkModeToggle(settings, setTheme, dispatch);
                    }}
                  >
                    <a href="#">
                      {theme === 0 ? (
                        <>
                          <BsFillSunFill size={25} className="mr-2" />
                        </>
                      ) : (
                        <>
                          <BsFillMoonFill size={20} className="mr-2" />
                        </>
                      )}
                    </a>
                  </li>
                  {showSettings && (
                    <li ref={containerRef}>
                      <div>
                        <span
                          className="pointer"
                          onClick={() =>
                            setIsSettingsDropdownOpen((prev) => !prev)
                          }
                        >
                          <AiOutlineSetting size={20} className="mr-2" />
                        </span>
                        {isSettingsDropdownOpen && (
                          <div className="settings-dropdown">
                            <div className="settings-dropdown-header">
                              <p>Theme</p>
                              <label className="gift-card-buy-switch mb-0">
                                <input
                                  type="checkbox"
                                  onClick={() => {
                                    darkModeToggle(
                                      settings,
                                      setTheme,
                                      dispatch
                                    );
                                  }}
                                  checked={theme === 0}
                                />
                                <span className="gift-card-buy-slider gift-card-buy"></span>
                              </label>
                            </div>
                            <div className="pb-3 border-bottom text-left">
                              <p className="mt-2 text-14 font-medium">
                                Style Settings
                              </p>
                              <div className="form-check py-1">
                                <input
                                  className="form-check-input radio-scale"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  checked={ThemeColor.green === "#32d777"}
                                  onClick={() => {
                                    changeThemeSettingsDashboard(
                                      "#32d777",
                                      "#d63031",
                                      setThemeColor,
                                      ThemeColor
                                    );
                                  }}
                                  // value="option1"
                                />
                                <label
                                  className="form-check-label w-full"
                                  htmlFor="exampleRadios1"
                                >
                                  <span className="w-full d-inline-block">
                                    <span className="d-flex gap-5">
                                      <span className="margin-right-auto">
                                        Fresh
                                      </span>
                                      <span
                                        className="settings-dropdown-color-box"
                                        style={{ background: "#32d777" }}
                                      ></span>
                                      <span
                                        className="settings-dropdown-color-box"
                                        style={{ background: "#d63031" }}
                                      ></span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                              <div className="form-check py-1">
                                <input
                                  className="form-check-input radio-scale"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios3"
                                  checked={ThemeColor.green === "#3498db"}
                                  value="option1"
                                  onClick={() => {
                                    changeThemeSettingsDashboard(
                                      "#3498db",
                                      "#9b59b6",
                                      setThemeColor,
                                      ThemeColor
                                    );
                                  }}
                                />
                                <label
                                  className="form-check-label w-full"
                                  htmlFor="exampleRadios3"
                                >
                                  <span className="w-full d-inline-block">
                                    <span className="d-flex gap-5">
                                      <span className="margin-right-auto text-14">
                                        Traditional
                                      </span>
                                      <span
                                        className="settings-dropdown-color-box"
                                        style={{ background: "#3498db" }}
                                      ></span>
                                      <span
                                        className="settings-dropdown-color-box"
                                        style={{ background: "#9b59b6" }}
                                      ></span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                              <div className="form-check py-1">
                                <input
                                  className="form-check-input radio-scale"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="option1"
                                  checked={ThemeColor.green === "#f39c12"}
                                  onClick={() => {
                                    changeThemeSettingsDashboard(
                                      "#f39c12",
                                      "#d35400",
                                      setThemeColor,
                                      ThemeColor
                                    );
                                  }}
                                />
                                <label
                                  className="form-check-label w-full"
                                  htmlFor="exampleRadios2"
                                >
                                  <span className="w-full d-inline-block">
                                    <span className="d-flex gap-5">
                                      <span className="margin-right-auto">
                                        Color Vision Deficiency
                                      </span>
                                      <span
                                        className="settings-dropdown-color-box"
                                        style={{ background: "#f39c12" }}
                                      ></span>
                                      <span
                                        className="settings-dropdown-color-box "
                                        style={{ background: "#d35400" }}
                                      ></span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="pb-3 border-bottom text-left">
                              <p className="mt-2 text-14 font-medium">
                                Color Preference
                              </p>
                              <div className="form-check py-1">
                                <input
                                  className="form-check-input radio-scale"
                                  type="radio"
                                  name="exampleRadios1"
                                  id="exampleRadios4"
                                  value="option1"
                                  checked={ThemeColor.orderBookLayout === 1}
                                  onChange={() => {
                                    setThemeColor({
                                      ...ThemeColor,
                                      orderBookLayout: 1,
                                    });
                                    localStorage.setItem("chart-up-down", "1");
                                  }}
                                />
                                <label
                                  className="form-check-label w-full"
                                  htmlFor="exampleRadios4"
                                >
                                  <span className="w-full d-inline-block">
                                    <span className="d-flex">
                                      <span className="margin-right-auto">
                                        Green Up/Red Down
                                      </span>
                                      <span>
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          viewBox="0 0 16 16"
                                          style={{ color: "#58bd7d" }}
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                                          ></path>
                                        </svg>
                                      </span>
                                      <span>
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          viewBox="0 0 16 16"
                                          style={{ color: "#fa0000" }}
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                          ></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                              <div className="form-check py-1">
                                <input
                                  className="form-check-input radio-scale"
                                  type="radio"
                                  name="exampleRadios1"
                                  id="exampleRadios5"
                                  value="option1"
                                  checked={ThemeColor.orderBookLayout === 2}
                                  onChange={() => {
                                    setThemeColor({
                                      ...ThemeColor,
                                      orderBookLayout: 2,
                                    });
                                    localStorage.setItem("chart-up-down", "2");
                                  }}
                                />
                                <label
                                  className="form-check-label w-full"
                                  htmlFor="exampleRadios5"
                                >
                                  <span className="w-full d-inline-block">
                                    <span className="d-flex">
                                      <span className="margin-right-auto text-14">
                                        Green Down/Red Up
                                      </span>
                                      <span>
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          viewBox="0 0 16 16"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ color: "#fa0000" }}
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                                          ></path>
                                        </svg>
                                      </span>
                                      <span>
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          viewBox="0 0 16 16"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ color: "#58bd7d" }}
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                          ></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  )}
                </ul>
              </nav>
            </ul>
          </div>
          <div
            className="cp-user-sidebar-toggler-s2"
            onClick={() => {
              setActive(true);
            }}
          >
            <img src="/menu.svg" className="img-fluid" alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotificationDropdown;
