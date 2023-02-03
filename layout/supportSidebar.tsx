import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineCash } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";

const SupportSidebar = ({ getDashbaordData }: any) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          {router.pathname == "/support" ? (
            <li
              className={router.pathname == "/support" ? "active" : ""}
              onClick={getDashbaordData}
            >
              <BiSupport />
              <a>{t("Support Dashboard")}</a>
            </li>
          ) : (
            <Link href="/support">
              <li className={router.pathname == "/support" ? "active" : ""}>
                <BiSupport />
                <a href="/support">{t("Support Dashboard")}</a>
              </li>
            </Link>
          )}

          <Link href="/support/ticket-create">
            <li
              className={
                router.pathname == "/support/ticket-create" ? "active" : ""
              }>
              <BiSupport />
              <a href="/support/ticket-create">{t("Create Ticket")}</a>
            </li>
          </Link>
          <Link href="/knowledgebase">
            <li className={router.pathname == "/knowledgebase" ? "active" : ""}>
              <AiOutlineBook />
              <a href="/knowledgebase">{t("Knowledgebase")}</a>
            </li>
          </Link>
          <Link href="/exchange/dashboard">
            <li
              className={
                router.pathname == "/exchange/dashboard" ? "active" : ""
              }>
              <HiOutlineCash />
              <a href="/exchange/dashboard">{t("Exchange")}</a>
            </li>
          </Link>
          <Link href="/user/profile">
            <li className={router.pathname == "/user/profile" ? "active" : ""}>
              <HiOutlineCash />
              <a href="/user/profile">{t("Profile")}</a>
            </li>
          </Link>
          {/* user/profile */}
        </ul>
      </div>
    </div>
  );
};

export default SupportSidebar;
