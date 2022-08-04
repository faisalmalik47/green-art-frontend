import useTranslation from "next-translate/useTranslation";
import React from "react";

import BuyTable from "./BuyTable";
const AllSellOrders = ({ OpenBooksell }: any) => {
  const { t } = useTranslation("common");
  return (
    <div className="buy-order">
      <div className="trades-table">
        <div className="trades-table-header">
          <div className="trades-table-row" />
        </div>
        <div className="trades-table-body" />
        <div
          id="exchangeAllBuyOrders_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div
            id="exchangeAllBuyOrders_processing"
            className="dataTables_processing"
            style={{ display: "none" }}
          >
            {t("Processing...")}
          </div>
          <div className="dataTables_scroll">
            <div
              className="dataTables_scrollHead"
              style={{
                overflow: "hidden",
                position: "relative",
                border: "0px",
                width: "100%",
              }}
            >
              <div
                className="dataTables_scrollBody"
                style={{
                  position: "relative",
                  overflow: "auto",
                  height: "244px",
                  width: "100%",
                }}
              >
                <table
                  id="exchangeAllSellOrders"
                  className="table dataTable no-footer"
                  role="grid"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="table-col price sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "170.656px" }}
                        aria-label="Price"
                      >
                        {t("Price")}
                      </th>
                      <th
                        className="table-col amount sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "120.75px" }}
                        aria-label="Amount"
                      >
                        {t("Amount")}
                      </th>
                      <th
                        className="table-col time text-right sorting_desc"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "79.8438px" }}
                        aria-label="Time"
                      >
                        {t("Total")}
                      </th>
                    </tr>
                  </thead>
                  <BuyTable buy={OpenBooksell} />
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="trades-table-footer">
          <div className="trades-table-row">
            <div className="trades-table-col price total-price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellOrders;
