import React, { useEffect, useState } from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBuyAmount,
  setBuyPrice,
  setSellAmount,
  setSellPrice,
} from "state/reducer/demoExchange";
import useTranslation from "next-translate/useTranslation";
import { formatCurrency } from "common";
import { RootState } from "state/store";
const DemoAllBuyOrdersFull = ({ buy, show }: any) => {
  const { t } = useTranslation("common");
  const [OpenBookBuy, setopenBookBuy] = useState<any>([]);
  const { dashboard } = useSelector((state: RootState) => state.exchange);

  const dispatch = useDispatch();
  const changeBuyPrice = (price: number, amount: number) => {
    dispatch(setSellPrice(price));
    dispatch(setSellAmount(amount));
    dispatch(setBuyAmount(amount));
    dispatch(setBuyPrice(price));
  };
  const [summary, setSummary] = React.useState({
    amount: 0,
    total: 0,
  });
  useEffect(() => {
    const Array = show ? [...buy].reverse().slice(-show) : [...buy].reverse();
    setopenBookBuy(Array);
  }, [buy]);
  return (
    <div className="sell-order">
      <div className="trades-table">
        <div className="trades-table-body" />
        <div
          id="exchangeAllSellOrders_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div
            id="exchangeAllSellOrders_processing"
            className="dataTables_processing d-none"
          >
            {t("Processing")}...
          </div>
          <div className="">
            <div className="dataTables_scrollHead overflow-hidden position-relative border-0 w-full">
              <div className="dataTables_scrollHeadInner box-sizing-content-box pr-0 w-431-25">
                <table
                  className="table dataTable no-footer ml-0 w-431-25"
                  role="grid"
                >
                  <thead>
                    <tr role="row"></tr>
                    <tr role="row"></tr>
                    <tr role="row"></tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="dataTables_scrollBody mt-2 overflow-auto position-relative w-full h-855">
              {OpenBookBuy.length > 0 ? (
                <table
                  id="exchangeAllSellOrders"
                  className="table dataTable no-footer w-full"
                  role="grid"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="table-col price sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Price"
                      ></th>
                      <th
                        className="table-col amount sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Amount"
                      ></th>
                      <th
                        className="table-col time text-right sorting_desc"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Time"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {OpenBookBuy?.length !== 0 ? (
                      OpenBookBuy?.map((item: any, index: number) => (
                        <Tooltip
                          key={index}
                          placement={"right"}
                          overlay={
                            <span>
                              <span>
                                {t("Avg Price")}: {item.price}
                              </span>
                              <br />
                              <span>
                                {t("Amount")}: {summary.amount}
                              </span>
                              <br />

                              <span>
                                {t("Size")}: {summary.total}
                              </span>
                            </span>
                          }
                          trigger={["hover"]}
                          overlayClassName="rcTooltipOverlay"
                        >
                          <tr
                            className="odd d-table-row"
                            onClick={() => {
                              changeBuyPrice(item.price, item.amount);
                            }}
                            onMouseEnter={() => {
                              const selectedIndex = index;
                              const firstIndex = 0;
                              let sumtotal = 0;
                              let sumAmount = 0;
                              for (
                                let i = selectedIndex;
                                i >= firstIndex;
                                i--
                              ) {
                                sumtotal += parseFloat(OpenBookBuy[i].total);
                                sumAmount += parseFloat(OpenBookBuy[i].amount);
                              }
                              setSummary({
                                amount: sumAmount,
                                total: sumtotal,
                              });
                            }}
                          >
                            <td>
                              <div className="asset">
                                <span className="text-success">
                                  {item.price}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="asset">
                                <span className="asset-name">
                                  {item.amount}
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className="asset">
                                <span className="asset-name">
                                  {parseFloat(item.total).toFixed(2)}
                                </span>
                              </div>
                            </td>
                            <div
                              className="progress-green"
                              style={{
                                width: `${
                                  parseFloat(item?.percentage)
                                    ? parseFloat(item?.percentage)
                                    : 0
                                }%`,
                              }}
                            ></div>
                          </tr>
                        </Tooltip>
                      ))
                    ) : (
                      <tr>
                        <td className="">{t("No data available in table")}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ) : (
                <div className="text-center mt-5">
                  <p>{t("No data available in table")} </p>
                </div>
              )}
            </div>

            <div className="dataTables_scrollBody mt-2 overflow-auto position-relative w-full h-855">
              {OpenBookBuy.length > 0 ? (
                <div>
                  {OpenBookBuy?.length !== 0 ? (
                    OpenBookBuy?.map((item: any, index: number) => (
                      <Tooltip
                        key={index}
                        placement={"right"}
                        overlay={
                          <span>
                            <span>
                              {t("Avg Price")}: {item.price}
                            </span>
                            <br />
                            <span>
                              {t("Amount")}: {summary.amount}
                            </span>
                            <br />

                            <span>
                              {t("Size")}: {summary.total}
                            </span>
                          </span>
                        }
                        trigger={["hover"]}
                        overlayClassName="rcTooltipOverlay"
                      >
                        <div
                          className=" row mx-0 position-relative"
                          onClick={() => {
                            changeBuyPrice(item.price, item.amount);
                          }}
                          onMouseEnter={() => {
                            const selectedIndex = index;
                            const firstIndex = 0;
                            let sumtotal = 0;
                            let sumAmount = 0;
                            for (let i = selectedIndex; i >= firstIndex; i--) {
                              sumtotal += parseFloat(OpenBookBuy[i].total);
                              sumAmount += parseFloat(OpenBookBuy[i].amount);
                            }
                            setSummary({
                              amount: sumAmount,
                              total: sumtotal,
                            });
                          }}
                        >
                          <div className="col-4 px-0">
                            <div className="asset">
                              <span className="text-success order-book-body-text">
                                {formatCurrency(
                                  item.price,
                                  dashboard?.order_data?.total?.trade_wallet
                                    ?.pair_decimal
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="asset">
                              <span className="asset-name order-book-body-text">
                                {formatCurrency(
                                  item.amount,
                                  dashboard?.order_data?.total?.trade_wallet
                                    ?.pair_decimal
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="asset">
                              <span className="asset-name order-book-body-text">
                                {formatCurrency(
                                  item.total,
                                  dashboard?.order_data?.total?.trade_wallet
                                    ?.pair_decimal
                                )}
                              </span>
                            </div>
                          </div>
                          <div
                            className="progress-green"
                            style={{
                              width: `${
                                parseFloat(item?.percentage)
                                  ? parseFloat(item?.percentage)
                                  : 0
                              }%`,
                            }}
                          ></div>
                        </div>
                      </Tooltip>
                    ))
                  ) : (
                    <div>
                      <div className="">{t("No data available in table")}</div>
                    </div>
                  )}
                </div>
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
  );
};

export default DemoAllBuyOrdersFull;
