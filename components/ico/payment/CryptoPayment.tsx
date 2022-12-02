import { CRYPTO_DEPOSIT } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { TokenBuyIcoCryptoAction } from "state/actions/launchpad";

const CryptoPayment = ({ walletlist, initialData }: any) => {
  const [data, setData] = useState<any>({
    amount: 0,
    payer_wallet: null,
  });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  console.log(walletlist, "walletlist");
  return (
    <div className="w-100 ico-tokenCreate row">
      <div className="col-md-6 form-input-div">
        <label className="ico-label-box" htmlFor="">
          {t("Amount")}
        </label>
        <input
          type="number"
          name="amount"
          value={data.amount}
          placeholder="amount"
          required
          className={`ico-input-box`}
          onChange={(e: any) => {
            setData({
              ...data,
              amount: e.target.value,
            });
          }}
        />
      </div>
      <div className="col-md-6 form-input-div">
        <label className="ico-label-box" htmlFor="">
          {t("Select Coin Currency")}
        </label>
        <select
          name="coin_currency"
          className={`ico-input-box`}
          required
          onChange={(e) => {
            setData({
              ...data,
              payer_wallet: e.target.value,
            });
          }}
        >
          <option value="">{t("Select currency")}</option>
          {walletlist?.map((item: any, index: any) => (
            <option value={item.id} key={index}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <button
        disabled={!data.payer_wallet || !data.amount || !initialData.token_id}
        className="primary-btn-outline w-100"
        type="button"
        onClick={() => {
          TokenBuyIcoCryptoAction(
            initialData,
            setLoading,
            data.payer_wallet,
            data.amount,
            CRYPTO_DEPOSIT
          );
        }}
      >
        {loading ? t("Please wait") : t("Make Payment")}
      </button>
    </div>
  );
};

export default CryptoPayment;
