import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import type { NextPage } from "next";
import React, { useState } from "react";

const MyWallet: NextPage = () => {
  type searchType = string;
  const [search, setSearch] = useState<searchType>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="page-wrap">
        <div className="page-left-sidebar">
          <div className="sidebar-top">
            <ul className="left-menu">
              <li className="active">
                <a href="">Wallet Overview</a>
              </li>
              <li className="">
                <a href="">Swap Coin</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-middle">
            <button
              value="0"
              id="depositId"
              type="submit"
              className="depositId primary-btn-outline btn-deposite"
            >
              Deposit
            </button>
            <button
              value="0"
              id="withdrawalId"
              type="submit"
              className="withdrawalId primary-btn-outline btn-withdraw"
            >
              Withdraw
            </button>
          </div>
        </div>
        <div className="page-main-content">
          <div className="container-fluid">
            <div className="section-top-wrap mb-25">
              <div className="overview-area">
                <div className="overview-left">
                  <h2 className="section-top-title">Overview</h2>
                  <h4 className="blance-title">Total balance</h4>
                  <h4 className="blance">0.545645656</h4>
                </div>
              </div>
            </div>
            <h4 className="section-title-medium">Asset Balances</h4>
            <div className="asset-balances-area">
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
                            Show{" "}
                            <select
                              name="assetBalances_length"
                              aria-controls="assetBalances"
                              className=""
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                        <div id="table_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className="data_table_input"
                              placeholder=""
                              aria-controls="table"
                              value={search}
                              onChange={handleChange}
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
                          <th scope="col">
                            Asset
                            <i className="fas fa-sort-down sort_space"></i>
                          </th>
                          <th scope="col">
                            Symbol
                            <i className="fas fa-sort-up sort_space"></i>
                          </th>
                          <th scope="col">
                            On Order
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Available Balance
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                          <th scope="col">
                            Total Balance
                            <i className="fas fa-sort sort_space"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                        <tr id="{{$wallet->id}}">
                          <td>
                            <div className="asset">
                              <img
                                className="asset-icon"
                                src="/amz.png"
                                alt=""
                              />
                              <span className="asset-name">BCH Wallet</span>
                            </div>
                          </td>
                          <td>
                            <span className="symbol">BCH</span>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance market incree">
                                0.00000
                              </span>
                              <span className="usd">$0.000000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.00000</span>
                            </div>
                          </td>
                          <td>
                            <div className="blance-text">
                              <span className="blance">0.000000</span>
                              <span className="usd">0.000000</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="pagination-wrapper"
                      id="assetBalances_paginate"
                    >
                      <a className="paginate-button">
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <span>
                        <a
                          className="paginate_button paginate-number"
                          aria-controls="assetBalances"
                          data-dt-idx="1"
                        >
                          1
                        </a>
                      </span>
                      <a className="paginate-button">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="asset-balances-right visible">
                <div className="box-one single-box visible">
                  <div className="section-wrapper">
                    <div className="deposit-info-area" id="wallet_deposit_area">
                      <div className="deposit-info-top">
                        <div className="balance-box">
                          <img
                            className="icon"
                            src="http://localhost:8000/assets/user/images/bitcoin.png"
                            alt="coin"
                          />
                          <div className="balance-content">
                            <h4> BCH Balance</h4>
                            <h5>BCH Wallet</h5>
                          </div>
                        </div>
                        <a href="#" className="close-btn">
                          <i className="fa fa-times" />
                        </a>
                      </div>
                      <div className="total-balance">
                        <div className="total-balance-left">
                          <h3>Total Balance</h3>
                        </div>
                        <div className="total-balance-right">
                          <h3>0.00000000 BCH</h3>
                          <h4>0.00000000 USD</h4>
                        </div>
                      </div>
                      <div className="address-area">
                        <h3>Address</h3>
                        <p>
                          Only send BCH to this address. Sending any other asset
                          to this address may result in the loss of your
                          deposit!{" "}
                        </p>
                        <div className="input-url">
                          <input
                            type="url"
                            className="form-control"
                            id="url"
                            defaultValue=""
                            readOnly
                          />
                          <button type="button" className="btn copy-url-btn">
                            <i className="fa fa-clone" />
                          </button>
                        </div>
                        <div className="bar-code-area">
                          {/*?xml version="1.0" encoding="UTF-8"?*/}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width={300}
                            height={300}
                            viewBox="0 0 300 300"
                          >
                            <rect
                              x={0}
                              y={0}
                              width={300}
                              height={300}
                              fill="#ffffff"
                            />
                            <g transform="scale(14.286)">
                              <g transform="translate(0,0)">
                                <path
                                  fillRule="evenodd"
                                  d="M8 0L8 1L9 1L9 0ZM10 0L10 2L8 2L8 5L9 5L9 6L8 6L8 7L9 7L9 6L10 6L10 7L11 7L11 8L8 8L8 9L7 9L7 8L6 8L6 9L4 9L4 8L0 8L0 11L1 11L1 9L3 9L3 11L4 11L4 13L8 13L8 14L9 14L9 12L8 12L8 11L9 11L9 10L11 10L11 11L10 11L10 13L11 13L11 14L10 14L10 15L13 15L13 14L12 14L12 13L13 13L13 12L12 12L12 10L15 10L15 9L14 9L14 8L13 8L13 5L12 5L12 4L13 4L13 3L12 3L12 1L13 1L13 0ZM10 2L10 4L9 4L9 5L11 5L11 4L12 4L12 3L11 3L11 2ZM11 6L11 7L12 7L12 6ZM16 8L16 9L17 9L17 11L14 11L14 12L15 12L15 13L14 13L14 14L15 14L15 16L12 16L12 17L11 17L11 16L9 16L9 17L8 17L8 21L11 21L11 20L10 20L10 18L12 18L12 19L13 19L13 21L14 21L14 19L15 19L15 20L16 20L16 21L17 21L17 20L16 20L16 18L20 18L20 17L21 17L21 16L20 16L20 17L17 17L17 15L18 15L18 16L19 16L19 15L18 15L18 13L19 13L19 12L20 12L20 11L21 11L21 10L20 10L20 11L19 11L19 10L18 10L18 9L19 9L19 8ZM20 8L20 9L21 9L21 8ZM6 9L6 10L7 10L7 11L5 11L5 10L4 10L4 11L5 11L5 12L7 12L7 11L8 11L8 10L7 10L7 9ZM2 12L2 13L3 13L3 12ZM11 12L11 13L12 13L12 12ZM16 12L16 13L15 13L15 14L16 14L16 15L17 15L17 13L18 13L18 12ZM20 13L20 14L21 14L21 13ZM12 17L12 18L13 18L13 19L14 19L14 17ZM18 19L18 20L19 20L19 21L20 21L20 20L21 20L21 19ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM14 0L14 7L21 7L21 0ZM15 1L15 6L20 6L20 1ZM16 2L16 5L19 5L19 2ZM0 14L0 21L7 21L7 14ZM1 15L1 20L6 20L6 15ZM2 16L2 19L5 19L5 16Z"
                                  fill="#000000"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-two single-box">
                  <div className="section-wrapper">
                    <div
                      className="withdrawal-info-area"
                      id="withdrawal_wallet_area"
                    >
                      <div className="withdrawal-info-top">
                        <div className="balance-box">
                          <img
                            className="icon"
                            src="http://localhost:8000/assets/user/images/bitcoin.png"
                            alt="coin"
                          />
                          <div className="balance-content">
                            <h4> BCH Balance</h4>
                            <h5>BCH Wallet</h5>
                          </div>
                        </div>
                        <a href="#" className="close-btn">
                          <i className="fa fa-times" />
                        </a>
                      </div>
                      <div className="withdrawal-form">
                        <div className="avable-blance">
                          <h4 className="avable-blance-title">
                            AVAILABLE BALANCE
                          </h4>
                          <h2 className="blance">0.00000000 BCH</h2>
                          <h4 className="blance-usd">0.00000000 USD</h4>
                        </div>
                        <div className="form-group">
                          <div className="withdrawal-limit">
                            {" "}
                            1000 BCH daily withdrawal limit.
                          </div>
                        </div>
                        <form
                          action="http://localhost:8000/user/Withdraw/balance"
                          method="post"
                          id="withdrawFormData"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            defaultValue="Dk52EUcPUPk5pw0xWMjCYL6LrE63UrkJ788Mqpm0"
                          />{" "}
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                          <div className="form-group">
                            <div className="amount-wrap">
                              <input
                                type="text"
                                className="form-control"
                                id="amountWithdrawal"
                                name="amount"
                                placeholder="AMOUNT TO WITHDRAW"
                              />
                              <small>
                                <span>Fees 0.00000000 %</span>
                              </small>
                              <input
                                id="withdrawalFees"
                                type="hidden"
                                defaultValue={0.0}
                              />
                            </div>
                          </div>
                          <input
                            type="hidden"
                            name="wallet_id"
                            defaultValue={12}
                          />
                          <button type="button" className="withdraw-btn">
                            Withdraw
                          </button>
                          <div
                            className="modal fade"
                            id="g2fcheck"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Google Authentication
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-12">
                                      <p>
                                        Open your Google Authenticator app and
                                        enter the 6-digit code from the app into
                                        the input field to remove the google
                                        secret key
                                      </p>
                                      <input
                                        placeholder="Code"
                                        required
                                        type="text"
                                        className="form-control"
                                        name="code"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Verify
                                  </button>
                                </div>
                              </div>
                            </div>
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
      </div>
    </>
  );
};
MyWallet.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/my-wallet");
  return {};
};
export default MyWallet;
