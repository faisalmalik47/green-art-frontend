import type { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import SwapCoinSidebar from "layout/swap-coin-sidebar";
import {
  getUserCoinForSwapAction,
  getRateAction,
  swapCoinAction,
} from "state/actions/swap";
import { setLoading } from "state/reducer/user";
import { useDispatch } from "react-redux";
import { parseCookies } from "nookies";
import { getRateSsr } from "service/swap";
const SwapCoin: NextPage = ({
  walletLists,
  wallet_rate,
  convert_rate,
  ssrRate,
  from_wallet,
  to_wallet,
}: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  let tempfromSelected;
  let temptoSelected;
  const [fromSelected, setFromSelected] = React.useState<any>({
    amount: 0,
    selected: null,
    coin_id: null,
  });
  const [toSelected, setToSelected] = React.useState<any>({
    amount: 0,
    selected: null,
    coin_id: null,
  });
  const [rate, setRate] = React.useState<any>({
    wallet_rate: 0,
    convert_rate: 0,
    rate: 0,
    from_wallet: null,
    to_wallet: null,
  });
  const swapSelected = async () => {
    tempfromSelected = await { ...fromSelected };
    temptoSelected = await { ...toSelected };
    let midvar;
    await setFromSelected(temptoSelected);
    await setToSelected(tempfromSelected);
    setRate({
      ...rate,
      convert_rate: 0,
    });
    midvar = temptoSelected;
    temptoSelected = tempfromSelected;
    tempfromSelected = midvar;
  };
  const convertCoin = async (amount: any, from_id: any, to_id: any) => {
    const convert_rate = await getRateAction(from_id, to_id, amount, setRate);
    setToSelected({
      ...toSelected,
      amount: convert_rate,
    });
  };

  React.useEffect(() => {
    setToSelected({
      ...toSelected,
      amount: rate.convert_rate,
    });
  }, [rate]);
  React.useEffect(() => {
    setFromSelected({
      amount: 1,
      selected: walletLists[0]?.coin_type,
      coin_id: walletLists[0]?.id,
    });
    setToSelected({
      amount: wallet_rate,
      selected: walletLists[1]?.coin_type,
      coin_id: walletLists[1]?.id,
    });
    setRate({
      wallet_rate: wallet_rate,
      convert_rate: convert_rate,
      rate: ssrRate,
      from_wallet: from_wallet,
      to_wallet: to_wallet,
    });
    // convertCoin(1, walletLists[0]?.id, walletLists[1]?.id);
  }, []);
  return (
    <div className="page-wrap">
      <SwapCoinSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="overview-area">
              <div className="overview-left">
                <h2 className="section-top-title">Swap Coin</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10">
              <div className="section-wrapper">
                <div className="swap-area">
                  <div className="swap-area-top">
                    <div className="form-group">
                      <div className="swap-wrap">
                        <div className="swap-wrap-top">
                          <label>From</label>
                          <span className="available">Available : 0 USDT</span>
                        </div>
                        <div className="swap-input-wrap">
                          <div className="form-amount">
                            <input
                              type="text"
                              className="form-control"
                              id="amount-one"
                              value={fromSelected ? fromSelected.amount : ""}
                              placeholder="Please enter 10 -2400000"
                              onChange={(e) => {
                                setFromSelected({
                                  ...fromSelected,
                                  amount: e.target.value,
                                });
                                convertCoin(
                                  e.target.value,
                                  fromSelected.coin_id,
                                  toSelected.coin_id
                                );
                              }}
                            />
                          </div>
                          <div className="cp-select-area">
                            <select
                              className=" form-control "
                              id="currency-one"
                              onChange={(e: any) => {
                                setFromSelected({
                                  ...fromSelected,
                                  coin_id: e.target.value,
                                });
                              }}
                            >
                              <option value="" selected disabled hidden>
                                {fromSelected.selected
                                  ? fromSelected.selected
                                  : "Select"}
                              </option>
                              {walletLists?.map((item: any, index: number) => (
                                <option
                                  key={index}
                                  value={item.id}
                                  selected={
                                    fromSelected.coin_id === item.id.toString()
                                  }
                                >
                                  {item.coin_type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swap-button-area text-center">
                      <button
                        id="swap"
                        className="swap-button"
                        onClick={async () => {
                          await swapSelected();
                          await getRateAction(
                            toSelected.coin_id,
                            fromSelected.coin_id,
                            toSelected.amount,
                            setRate
                          );
                        }}
                      >
                        <i className="fa fa-refresh" />
                      </button>
                    </div>
                    <div className="form-group">
                      <div className="swap-wrap">
                        <div className="swap-wrap-top">
                          <label>To</label>
                        </div>
                        <div className="swap-input-wrap">
                          <div className="form-amount">
                            <input
                              type="text"
                              className="form-control"
                              id="amount-two"
                              value={toSelected.amount}
                              placeholder="Please enter 0 - 65"
                              disabled
                            />
                          </div>
                          <div className="cp-select-area">
                            <select
                              className="form-control"
                              id="currency-two"
                              onChange={(e) => {
                                setToSelected({
                                  ...toSelected,
                                  coin_id: e.target.value,
                                });
                              }}
                            >
                              <option value="" selected disabled hidden>
                                {toSelected.selected
                                  ? toSelected.selected
                                  : "Select"}
                              </option>
                              {walletLists?.map((item: any, index: number) => (
                                <option
                                  key={index}
                                  value={item.id}
                                  selected={
                                    toSelected.coin_id === item.id.toString()
                                  }
                                >
                                  {item.coin_type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swap-area-middle">
                    <ul>
                      <li>
                        <span>Price</span>
                        <span id="rate">
                          1 {rate.from_wallet} = {rate.rate ? rate.rate : "0"}{" "}
                          {rate.to_wallet}
                        </span>
                      </li>
                      <li>
                        <span>You will spend</span>
                        <span className="spend">
                          {rate.convert_rate} {rate.to_wallet}
                        </span>
                      </li>
                    </ul>
                    {/* {error.status && (
                      <div className="message-box">
                        <p>{error.message}</p>
                      </div>
                    )} */}
                  </div>
                  <div className="swap-area-bottom">
                    <button className="primary-btn-outline">Refresh</button>
                    <button
                      className="primary-btn-outline"
                      disabled={
                        !fromSelected.amount ||
                        !fromSelected.coin_id ||
                        !toSelected.amount ||
                        !toSelected.coin_id
                      }
                      onClick={() => {
                        swapCoinAction(
                          fromSelected.amount,
                          fromSelected.coin_id,
                          toSelected.coin_id,
                          setLoading
                        );
                      }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          <span>Please wait</span>
                        </>
                      ) : (
                        "convart"
                      )}
                    </button>
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/swap-history");
  const cookies = parseCookies(ctx);
  const walletLists = await getUserCoinForSwapAction(null, ctx);
  const data = await getRateSsr(
    walletLists[0].id,
    walletLists[1].id,
    1,
    cookies.token
  );
  const { wallet_rate, convert_rate, rate, from_wallet, to_wallet } = data;
  return {
    props: {
      walletLists,
      convert_rate,
      ssrRate: rate,
      from_wallet: from_wallet.coin_type,
      to_wallet: to_wallet.coin_type,

      wallet_rate,
    },
  };
};

export default SwapCoin;
