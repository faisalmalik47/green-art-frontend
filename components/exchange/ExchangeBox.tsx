import React, { useState } from "react";

const ExchangeBox = () => {
  type tradingTabType = number;
  const [tradingTab, setTradingTab] = useState<tradingTabType>(1);
  const handletradingTab = (tab: number) => {
    setTradingTab(tab);
  };
  return (
    <div className="exchange-box order-box">
      <div className="trades-headers">
        <ul
          id="pills-tab"
          role="tablist"
          className="nav nav-pills transfer-tabs"
        >
          <li
            role="presentation"
            className="nav-item"
            onClick={() => {
              handletradingTab(1);
            }}
          >
            <a
              id="pills-transfer-1-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-1"
              aria-selected="true"
              className={`nav-link ${tradingTab === 1 ? "active" : ""}`}
            >
              Buy
            </a>
          </li>{" "}
          <li
            role="presentation"
            className="nav-item"
            onClick={() => {
              handletradingTab(2);
            }}
          >
            <a
              id="pills-transfer-2-tab"
              data-toggle="pill"
              role="tab"
              aria-controls="pills-transfer-2"
              aria-selected="false"
              className={`nav-link ${tradingTab === 2 ? "active" : ""}`}
            >
              Sell
            </a>
          </li>
        </ul>
      </div>{" "}
      <div id="pills-tabContent" className="tab-content">
        <div
          id="pills-transfer-1"
          role="tabpanel"
          aria-labelledby="pills-transfer-1-tab"
          className={`tab-pane fade show ${tradingTab === 1 && "active"} `}
        >
          <ul
            id="BuyTab"
            role="tablist"
            className="nav nav-tabs inner-tabs-menu"
          >
            <li role="presentation" className="nav-item">
              <a
                id="Limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Limit"
                aria-selected="true"
                className="nav-link active"
              >
                Limit
              </a>
            </li>{" "}
            <li role="presentation" className="nav-item">
              <a
                id="Market-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Market"
                aria-selected="false"
                className="nav-link"
              >
                Market
              </a>
            </li>{" "}
            <li role="presentation" className="nav-item">
              <a
                id="Stop-limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Stop-limit"
                aria-selected="false"
                className="nav-link"
              >
                Stop-limit
              </a>
            </li>
          </ul>{" "}
          <div id="BuyTabContent" className="tab-content">
            <div
              id="Limit"
              role="tabpanel"
              aria-labelledby="Limit-tab"
              className="tab-pane fade show active"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form id="buy-form" className="mt-4">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Price</label>{" "}
                        <input
                          name="price"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Total Amount</label>{" "}
                        <input
                          // disabled
                          name="total_amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              id="Market"
              role="tabpanel"
              aria-labelledby="Market-tab"
              className="tab-pane fade"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form id="buy-form" className="mt-4">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Price</label>{" "}
                        <p className="form-control">Market</p>{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              id="Stop-limit"
              role="tabpanel"
              aria-labelledby="Stop-limit-tab"
              className="tab-pane fade"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form id="stop-limit-form" className="mt-4">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">USDT</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Stop</label>{" "}
                        <input
                          name="stop"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Limit</label>{" "}
                        <input
                          name="limit"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Total Amount</label>{" "}
                        <input
                          // disabled
                          name="total_amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="pills-transfer-2"
          role="tabpanel"
          aria-labelledby="pills-transfer-2-tab"
          className={`tab-pane fade show ${tradingTab === 2 && "active"} `}
        >
          <ul
            id="SellTab"
            role="tablist"
            className="nav nav-tabs inner-tabs-menu"
          >
            <li role="presentation" className="nav-item">
              <a
                id="sell-Limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="LimitSell"
                aria-selected="true"
                className="nav-link active"
              >
                Limit
              </a>
            </li>{" "}
            <li role="presentation" className="nav-item">
              <a
                id="sell-Market-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="MarketSell"
                aria-selected="false"
                className="nav-link"
              >
                Market
              </a>
            </li>{" "}
            <li role="presentation" className="nav-item">
              <a
                id="sell-Stop-limit-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="Stop-limitSell"
                aria-selected="false"
                className="nav-link"
              >
                Stop-limit
              </a>
            </li>
          </ul>{" "}
          <div id="SellTabContent" className="tab-content">
            <div
              id="LimitSell"
              role="tabpanel"
              aria-labelledby="Limit-tab"
              className="tab-pane fade show active"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form
                      method="POST"
                      action="/user/exchange/sell"
                      id="sell-form"
                      className="mt-4"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Price</label>{" "}
                        <input
                          name="price"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Total Amount</label>{" "}
                        <input
                          // disabled
                          name="total_amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              id="MarketSell"
              role="tabpanel"
              aria-labelledby="Market-tab"
              className="tab-pane fade"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form
                      method="POST"
                      action="/user/exchange/sell"
                      id="sell-form"
                      className="mt-4"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Price</label>{" "}
                        <p className="form-control">Market</p>{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              id="Stop-limitSell"
              role="tabpanel"
              aria-labelledby="Stop-limit-tab"
              className="tab-pane fade"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="cp-user-profile-info">
                    <form id="stop-limit-form" className="mt-4">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="g2OWJq3pDqYRQmVvmGt799aCsDmkkV4UjrWDhzcF"
                      />{" "}
                      <div className="form-group mt-4">
                        <div className="total-top">
                          <label>Total</label> <label>Available</label>
                        </div>{" "}
                        <div className="total-top-blance">
                          <div className="total-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>{" "}
                          <div className="avilable-blance">
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span>0.00</span>
                            </span>{" "}
                            <span
                              className="text-warning"
                              style={{ fontWeight: 700 }}
                            >
                              <span className="base_coin_type">BTC</span>
                            </span>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Stop</label>{" "}
                        <input
                          name="stop"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Limit</label>{" "}
                        <input
                          name="limit"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Amount</label>{" "}
                        <input
                          name="amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="trade_coin_type">BTC</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-3">
                        <label>Total Amount</label>{" "}
                        <input
                          // disabled
                          name="total_amount"
                          type="text"
                          placeholder=""
                          className="form-control number_only"
                        />{" "}
                        <span
                          className="text-warning blns"
                          style={{ fontWeight: 700 }}
                        >
                          <span className="base_coin_type">USDT</span>
                        </span>
                      </div>{" "}
                      <div className="form-group mt-4 d-flex justify-content-between flex-wrap">
                        <a className="btn btn-danger"> Login</a>
                      </div>
                    </form>
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

export default ExchangeBox;
