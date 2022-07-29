import { formateData } from "common";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
type Props = {
  orderHistory: boolean;
};

const OrderHistory = ({
  orderHistory,
  sellOrderHistoryState,
  buyOrderHistoryState,
}: any) => {
  const { t } = useTranslation("common");
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  return (
    <div
      className={"tab-pane fade" + (orderHistory ? " show active" : "")}
      id="Trade-history"
      role="tabpanel"
      aria-labelledby="Trade-history-tab"
    >
      <div className="buy-sell-tabs">
        <ul className="nav nav-tabs" id="buySellTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="buy-tab"
              data-toggle="tab"
              href="#buy"
              role="tab"
              aria-controls="buy"
              aria-selected="true"
            >
              {t("buy")}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="sell-tab"
              data-toggle="tab"
              href="#sell"
              role="tab"
              aria-controls="sell"
              aria-selected="false"
            >
              {t("sell")}
            </a>
          </li>
        </ul>
        <div className="tab-content" id="buySellTabContent">
          <div
            className="tab-pane fade show active"
            id="buy"
            role="tabpanel"
            aria-labelledby="buy-tab"
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{t("Date")}</th>
                    <th scope="col">{t("Pair")}</th>
                    <th scope="col">{t("Type")}</th>
                    <th scope="col">{t("Actual amount")}</th>
                    <th scope="col">{t("Price")}</th>
                    <th scope="col">{t("Amount")}</th>
                    <th scope="col">{t("Fees")}</th>
                    <th scope="col">{t("total")}</th>
                  </tr>
                </thead>
                <tbody>
                  {buyOrderHistoryState?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{formateData(item.created_at)}</td>
                      <td>{currentPair && currentPair}</td>
                      <td>{item?.type}</td>
                      <td>{item.actual_amount}</td>
                      <td>{item.price}</td>
                      <td>{item.amount}</td>
                      <td>{item.fees}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="sell"
            role="tabpanel"
            aria-labelledby="sell-tab"
          >
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{t("Date")}</th>
                    <th scope="col">{t("Pair")}</th>
                    <th scope="col">{t("Type")}</th>
                    <th scope="col">{t("Actual amount")}</th>
                    <th scope="col">{t("Price")}</th>
                    <th scope="col">{t("Amount")}</th>
                    <th scope="col">{t("Fees")}</th>
                    <th scope="col">{t("total")}</th>
                  </tr>
                </thead>
                <tbody>
                  {sellOrderHistoryState?.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{formateData(item.created_at)}</td>
                      <td>{currentPair && currentPair}</td>
                      <td>{item?.type}</td>
                      <td>{item.actual_amount}</td>
                      <td>{item.price}</td>
                      <td>{item.amount}</td>
                      <td>{item.fees}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
