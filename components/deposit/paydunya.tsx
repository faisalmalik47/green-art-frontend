import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GetPayDunyaPaymentUrl } from "service/deposit";
import { UserSettingsApi } from "service/settings";
import { RootState } from "state/store";
import DepositGoogleAuth from "./deposit-g2fa";

const Paydunya = ({ walletlist }: any) => {
  const { t } = useTranslation("common");
  const [credential, setCredential] = useState<any>({
    code: "",
  });
  const [walletID, setwalletID] = useState<any>();
  const { settings } = useSelector((state: RootState) => state.common);
  const [errorMessage, setErrorMessage] = React.useState({
    status: false,
    message: "",
  });
  const CheckG2faEnabled = async () => {
    const { data } = await UserSettingsApi();
    const { user } = data;
    if (
      user.google2fa !== 1 &&
      parseInt(settings.currency_deposit_2fa_status) === 1
    ) {
      setErrorMessage({
        status: true,
        message: t("Google 2FA is not enabled, Please enable Google 2FA fist"),
      });
    }
  };
  useEffect(() => {
    CheckG2faEnabled();
  }, []);
  const [amount, setAmount] = useState("");
  const onSubmit = async (e: any) => {
    // e.preventDefault();
    const response = await GetPayDunyaPaymentUrl(amount, walletID);
    if (response.success) {
      toast.success(response.message);
      window.open(response?.data?.payment_url, "_blank");
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div>
      <div className="cp-user-title mt-5 mb-4">
        <h4>{t("Deposit With Paydunya")}</h4>
      </div>
      <div>
        <form className="row" onSubmit={onSubmit}>
          <div className="col-lg-12">
            <div className="">
              <div className="swap-area">
                <div className="swap-area-top">
                  <div className="form-group">
                    <div className="swap-wrap">
                      <div className="swap-wrap-top">
                        <label>{t("Enter amount")}</label>
                        <span className="available">{t("Currency(XOF)")}</span>
                      </div>
                      <div className="swap-input-wrap">
                        <div className="form-amount">
                          <input
                            type="number"
                            className="form-control border-0"
                            id="amount-one"
                            placeholder={t("Please enter 1-2400000")}
                            value={amount}
                            onChange={(e) => {
                              setAmount(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <select
              className="form-control "
              id="currency-one"
              onChange={(e) => {
                setwalletID(e.target.value);
              }}
            >
              <option value="" selected disabled hidden>
                Select one
              </option>
              {walletlist?.map((wallet: any, index: any) => (
                <option value={wallet.id} key={index}>
                  {wallet.coin_type}
                </option>
              ))}
            </select>
          </div>

          <DepositGoogleAuth
            convertCurrency={onSubmit}
            credential={credential}
            setCredential={setCredential}
          />
          {errorMessage.status && (
            <div className="alert alert-danger col-lg-12">
              {errorMessage.message}
            </div>
          )}
          {parseInt(settings.currency_deposit_2fa_status) === 1 &&
          amount &&
          walletID ? (
            <button
              className="primary-btn-outline w-100"
              type="button"
              data-target="#exampleModal"
              disabled={errorMessage.status === true}
              data-toggle="modal"
            >
              {t("Deposit")}
            </button>
          ) : (
            <button
              className="primary-btn-outline w-100"
              type="button"
              data-target="#exampleModal"
              disabled={errorMessage.status === true}
              data-toggle="modal"
            >
              {t("Deposit")}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Paydunya;
