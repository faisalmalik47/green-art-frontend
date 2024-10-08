import { NoItemFound } from "components/NoItemFound/NoItemFound";
import request from "lib/request";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import { getMarketsTradeSectionDataApi } from "service/markets";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import SectionLoading from "components/common/SectionLoading";
import { formatCurrency } from "common";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

async function listenMessages(setUpdatedTradeData: any) {
  //@ts-ignore
  window.Pusher = Pusher;
  //@ts-ignore
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "test",
    wsHost: process.env.NEXT_PUBLIC_HOST_SOCKET,
    wsPort: process.env.NEXT_PUBLIC_WSS_PORT
      ? process.env.NEXT_PUBLIC_WSS_PORT
      : 6006,
    wssPort: 443,
    forceTLS: false,
    cluster: "mt1",
    disableStats: true,
    enabledTransports: ["ws", "wss"],
  });
  //@ts-ignore
  window.Echo.channel(`market-overview-top-coin-list-data`).listen(
    ".market-overview-top-coin-list",
    (e: any) => {
      if (e?.coin_pair_details === null) return;
      setUpdatedTradeData(e?.coin_pair_details);
    }
  );
}

export default function TradesTable({ selectedCurrency }: any) {
  const [tradeDatas, setTradeDatas] = useState<any>([]);
  const [tradeItems, setTradeItems] = useState<any>([]);
  const [selectType, setSelectType] = useState(1);
  const [updatedTradeData, setUpdatedTradeData] = useState<any>({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { dashboard } = useSelector((state: RootState) => state.exchange);

  // use
  const router = useRouter();

  useEffect(() => {
    listenMessages(setUpdatedTradeData);
  }, []);

  useEffect(() => {
    updateTradeDataHandler();
  }, [updatedTradeData]);

  const updateTradeDataHandler = () => {
    if (Object.keys(updatedTradeData).length === 0) return;
    const updatedArray = tradeItems?.map((item: any) => {
      if (item.id === updatedTradeData?.id) {
        return updatedTradeData;
      }
      return item;
    });
    if (updatedArray.length <= 0) return;
    setTradeItems(updatedArray);
  };

  useEffect(() => {
    getMarketsTradeSectionData(1);
  }, [selectType, search, selectedCurrency]);

  const getMarketsTradeSectionData = async (page: any) => {
    setLoading(true);
    const data = await getMarketsTradeSectionDataApi(
      selectedCurrency.value,
      selectType,
      search,
      page
    );
    if (!data.success) {
      toast.error(data.message);
      setLoading(false);

      return;
    }
    setTradeDatas(data.data);
    setTradeItems(data.data.data);
    setLoading(false);
  };
  const handlePageClick = (event: any) => {
    getMarketsTradeSectionData(event.selected + 1);
  };

  const { t } = useTranslation();
  return (
    <section className="container-4xl my-5 ">
      <div className="row ">
        <div className="col-12">
          <div className="market-trend-area shadow-sm section-padding-custom wallet-card-info-container">
            <div className="container-4xl">
              <div className="row">
                <div className="col-md-9 col-12">
                  <div className="exchange-tab-menu">
                    <ul
                      className="nav nav-tabs"
                      id="exchangeTab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="CoreAssets-tab"
                          data-toggle="tab"
                          href="#CoreAssets"
                          role="tab"
                          aria-controls="CoreAssets"
                          aria-selected="true"
                          onClick={() => {
                            setSelectType(1);
                          }}
                        >
                          {t("All Cryptos")}
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="Gainers-tab"
                          data-toggle="tab"
                          href="#Gainers"
                          role="tab"
                          aria-controls="Gainers"
                          aria-selected="false"
                          onClick={() => setSelectType(2)}
                        >
                          {t("Spot Markets")}
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="Listings-tab"
                          data-toggle="tab"
                          href="#Listings"
                          role="tab"
                          aria-controls="Listings"
                          aria-selected="false"
                          onClick={() => setSelectType(3)}
                        >
                          {t("Futures Markets")}
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="Listings-tab"
                          data-toggle="tab"
                          href="#Listings"
                          role="tab"
                          aria-controls="Listings"
                          aria-selected="false"
                          onClick={() => setSelectType(4)}
                        >
                          {t("New Listing")}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-12">
                  <div className="form-group has-search-market-trade">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Coin Name"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="tab-content" id="exchangeTabContent">
                <div
                  className="tab-pane fade show active"
                  id="CoreAssets"
                  role="tabpanel"
                  aria-labelledby="CoreAssets-tab"
                >
                  {loading ? (
                    <SectionLoading />
                  ) : (
                    <>
                      {tradeItems?.length > 0 ? (
                        <div className="exchange-volume-table">
                          <div className="table-responsive">
                            <div
                              id="DataTables_Table_0_wrapper"
                              className="dataTables_wrapper no-footer overflow-x-auto"
                            >
                              <table
                                className="table table-borderless dataTable no-footer"
                                id="DataTables_Table_0"
                                role="grid"
                                aria-describedby="DataTables_Table_0_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      scope="col"
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                    >
                                      {t("Market")}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sorting_disabled text-right w-81-2812"
                                      rowSpan={1}
                                      colSpan={1}
                                    >
                                      {t("Price")}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sorting_disabled text-right w-193-797"
                                      rowSpan={1}
                                      colSpan={1}
                                    >
                                      {t("Change (24h)")}
                                    </th>

                                    <th
                                      scope="col"
                                      className="sorting_disabled text-right w-207-766"
                                      rowSpan={1}
                                      colSpan={1}
                                    >
                                      {t("Volume")}
                                    </th>
                                    <th
                                      scope="col"
                                      className="sorting_disabled text-right w-207-766"
                                      rowSpan={1}
                                      colSpan={1}
                                    >
                                      {t("Market Cap")}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tradeItems?.map((item: any, index: any) => (
                                    <tr role="row" className="odd" key={index}>
                                      <td className="mb-2 p-2 min-w-100">
                                        <div className="d-flex w-full">
                                          <img
                                            className="icon mr-3"
                                            src={
                                              item?.coin_icon || "/bitcoin.png"
                                            }
                                            alt="coin"
                                            width="25px"
                                            height="25px"
                                          />
                                          <a className="cellMarket" href="#">
                                            <div className="marketSymbols">
                                              <span className="quoteSymbol">
                                                {selectType == 2 ||
                                                selectType == 3 ? (
                                                  <>
                                                    {item.coin_type}/
                                                    {item.base_coin_type}
                                                  </>
                                                ) : (
                                                  <>{item.coin_type}</>
                                                )}
                                              </span>
                                            </div>
                                          </a>
                                        </div>
                                      </td>
                                      <td className="text-black text-right p-2">
                                        $
                                        {formatCurrency(
                                          item.price,
                                          dashboard?.order_data?.total
                                            ?.trade_wallet?.pair_decimal
                                        )}
                                      </td>
                                      <td className="text-right p-2">
                                        <span
                                          className={`changePos  ${
                                            parseFloat(item.change) >= 0
                                              ? "text-success"
                                              : "text-danger"
                                          } `}
                                        >
                                          {formatCurrency(
                                            item.change,
                                            dashboard?.order_data?.total
                                              ?.trade_wallet?.pair_decimal
                                          )}
                                          %
                                        </span>
                                      </td>
                                      {/* <td className="text-center">
                                      {parseFloat(item.change) >= 0 ? (
                                        <img
                                          src="/chart-image-1.png"
                                          alt="chart-image"
                                          className="chart-img"
                                        />
                                      ) : (
                                        <img
                                          src="/chart-image-2.png"
                                          alt="chart-image"
                                          className="chart-img"
                                        />
                                      )}
                                    </td> */}
                                      <td className="text-black text-right p-2">
                                        {formatCurrency(
                                          item.volume,
                                          dashboard?.order_data?.total
                                            ?.trade_wallet?.pair_decimal
                                        )}
                                      </td>
                                      <td className="text-black text-right p-2">
                                        {item.total_balance
                                          ? formatCurrency(
                                              item.total_balance,
                                              dashboard?.order_data?.total
                                                ?.trade_wallet?.pair_decimal
                                            )
                                          : 0}
                                      </td>
                                      {/* <td
                                      className="text-right"
                                      onClick={async () => {
                                        await localStorage.setItem(
                                          "base_coin_id",
                                          item?.parent_coin_id
                                        );
                                        await localStorage.setItem(
                                          "trade_coin_id",
                                          item?.child_coin_id
                                        );
                                        await localStorage.setItem(
                                          "current_pair",
                                          item?.child_coin_name +
                                            "_" +
                                            item?.parent_coin_name
                                        );
                                        await localStorage.setItem(
                                          "coin_pair_id",
                                          item?.coin_pair_id
                                        );
                                      }}
                                    >
                                      <a
                                        className="btnTrade btn-link mb-2"
                                        href={
                                          router.locale !== "en"
                                            ? `/${router.locale}/futures/exchange`
                                            : "/futures/exchange"
                                        }
                                      >
                                        {t("Trade")}
                                      </a>
                                    </td> */}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row justify-content-end mt-1">
                            <ReactPaginate
                              nextLabel=">"
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={5}
                              pageCount={Math.ceil(tradeDatas.total / 15)}
                              previousLabel="<"
                              renderOnZeroPageCount={null}
                              className={`d-flex align-items-center justify-content-center`}
                              pageLinkClassName={`paginate-number`}
                              activeLinkClassName={`active-paginate-cls`}
                              previousLinkClassName={`text-primary-color text-25 mr-2`}
                              nextLinkClassName={`text-primary-color text-25 ml-2`}
                              forcePage={tradeDatas.current_page - 1}
                            />
                          </div>
                        </div>
                      ) : (
                        <NoItemFound />
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
