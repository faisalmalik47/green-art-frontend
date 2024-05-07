import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

import BuyTable from "./BuyTable";
const AllSellOrders = ({ OpenBooksell, customClss }: any) => {
  const { t } = useTranslation("common");
  const { dashboard } = useSelector((state: RootState) => state.exchange);
  return (
    <div className={`buy-order ${customClss}`}>
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
            className="dataTables_processing d-none"
          >
            {t("Processing")}...
          </div>
          <div className="">
            <div className="dataTables_scrollHead overflow-hidden position-relative border-0 w-full">
              <div className="dataTables_scrollBody overflow-auto position-relative h-825 w-full">
                {OpenBooksell.length > 0 ? (
                  <table
                    id="exchangeAllSellOrders"
                    className="table dataTable no-footer w-full"
                    role="grid"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="table-col price sorting_disabled w-170-656"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Price"
                        >
                          {t("Price")}({dashboard?.order_data?.base_coin})
                        </th>
                        <th
                          className="table-col amount sorting_disabled w-120-75"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Amount"
                        >
                          {t("Amount")}({dashboard?.order_data?.trade_coin})
                        </th>
                        <th
                          className="table-col time text-right sorting_desc w-79-8438"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Time"
                        >
                          {t("Total")}
                        </th>
                      </tr>
                    </thead>
                    <BuyTable buy={OpenBooksell} />
                  </table>
                ) : (
                  <div className="text-center mt-5">
                    <p>{t("No data available in table")} </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSellOrders;
