import type { GetServerSideProps, NextPage } from "next";
import ReportSidebar from "layout/report-sidebar";
import React, { useState } from "react";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import {
  AllTransactionHistoryAction,
  handleSearchItems,
} from "state/actions/reports";
import TableLoading from "components/common/TableLoading";
import useTranslation from "next-translate/useTranslation";
const TransactionHistory: NextPage = () => {
  const { t } = useTranslation("common");
  type searchType = string;
  const [search, setSearch] = useState<searchType>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    AllTransactionHistoryAction(
      5,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory
    );
  };
  const getReport = async () => {
    AllTransactionHistoryAction(
      5,
      1,
      setHistory,
      setProcessing,
      setStillHistory
    );
  };
  React.useEffect(() => {
    getReport();
    return () => {
      setHistory([]);
    };
  }, []);
  return (
    <div className="page-wrap">
      <ReportSidebar />

      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">
                  {t("Transaction History")}
                </h2>
              </div>
            </div>
          </div>

          <div className="asset-balances-area">
            {processing ? (
              <TableLoading />
            ) : (
              <div className="asset-balances-left">
                <div className="section-wrapper">
                  <div className="table-responsive">
                    <div
                      id="assetBalances_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <div className="dataTables_head">
                        <div
                          className="dataTables_length"
                          id="assetBalances_length"
                        >
                          <label className="">
                            {t("Show")}
                            <select
                              name="assetBalances_length"
                              aria-controls="assetBalances"
                              className=""
                              onChange={(e) => {
                                AllTransactionHistoryAction(
                                  parseInt(e.target.value),
                                  1,
                                  setHistory,
                                  setProcessing,
                                  setStillHistory
                                );
                              }}
                            >
                              <option selected disabled hidden>
                                5
                              </option>
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            entries
                          </label>
                        </div>
                        <div id="table_filter" className="dataTables_filter">
                          <label>
                            {t("Search:")}
                            <input
                              type="search"
                              className="data_table_input"
                              placeholder=""
                              aria-controls="table"
                              value={search}
                              onChange={(e) => {
                                handleSearchItems(
                                  e,
                                  setSearch,
                                  stillHistory,
                                  setHistory
                                );
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <table
                      id="assetBalances"
                      className="table table-borderless secendary-table asset-balances-table"
                    >
                      <thead>
                        <tr>
                          <th scope="col" className="">
                            {t("Transaction id")}
                          </th>

                          <th scope="col" rowSpan={1} colSpan={1}>
                            {t("Base Coin")}
                          </th>
                          <th scope="col">{t("Trade Coin")}</th>
                          <th scope="col">{t("Amount")}</th>
                          <th scope="col">{t("Price")}</th>
                          <th scope="col">{t("Fees")}</th>
                          <th scope="col">{t("Total")}</th>
                          <th scope="col">{t("Date")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history?.map((item: any, index: any) => (
                          <tr id="{{$wallet->id}}" key={index}>
                            <td>
                              <div className="asset">
                                <span className="asset-name">
                                  {item.transaction_id}
                                </span>
                              </div>
                            </td>

                            <td>
                              <div className="blance-text">
                                <span className="usd">{item.base_coin}</span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">
                                  {item.trade_coin}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">{item.amount}</span>
                              </div>
                            </td>
                            <td>
                              <div className="blance-text">
                                <span className="blance">{item.price}</span>
                              </div>
                            </td>
                            <td>
                              <div className="status-text">
                                <span className="status">{item.fees}</span>
                              </div>
                            </td>
                            <td>
                              <div className="status-text">
                                <span className="status">{item.total}</span>
                              </div>
                            </td>
                            <td>
                              <div className="status-text">
                                <span className="status">{item.time}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {history?.length <= 0 && (
                      <div className="no_data_table">
                        {t("No data available in table")}
                      </div>
                    )}

                    <div
                      className="pagination-wrapper"
                      id="assetBalances_paginate"
                    >
                      <span>
                        {stillHistory?.items?.links.map(
                          (link: any, index: number) =>
                            link.label === "&laquo; Previous" ? (
                              <a
                                className="paginate-button"
                                onClick={() => {
                                  if (link.url) LinkTopaginationString(link);
                                }}
                                key={index}
                              >
                                <i className="fa fa-angle-left"></i>
                              </a>
                            ) : link.label === "Next &raquo;" ? (
                              <a
                                className="paginate-button"
                                onClick={() => LinkTopaginationString(link)}
                                key={index}
                              >
                                <i className="fa fa-angle-right"></i>
                              </a>
                            ) : (
                              <a
                                className="paginate_button paginate-number"
                                aria-controls="assetBalances"
                                data-dt-idx="1"
                                onClick={() => LinkTopaginationString(link)}
                                key={index}
                              >
                                {link.label}
                              </a>
                            )
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/transaction-history");
  return {
    props: {},
  };
};

export default TransactionHistory;
