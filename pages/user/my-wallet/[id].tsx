import React, { useState, useRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  WalletDepositApiAction,
  WalletWithdrawApiAction,
} from "state/actions/wallet";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  pageAvailabilityCheck,
  SSRAuthCheck,
} from "middlewares/ssr-authentication-check";
import { parseCookies } from "nookies";
import { GetUserInfoByTokenServer } from "service/user";
import Link from "next/link";
import DepositFaq from "components/deposit/DepositFaq";
import {
  MY_WALLET_DEPOSIT_TYPE,
  MY_WALLET_WITHDRAW_TYPE,
} from "helpers/core-constants";
import { DipositComponent } from "components/MyWallet/diposit";
import { WithdrawComponent } from "components/MyWallet/withdraw";
import { getFaqList } from "service/faq";
import FAQ from "components/FAQ";
import Footer from "components/common/footer";
import { customPage, landingPage } from "service/landing-page";

const DeposiAndWithdraw = ({
  faq,
  customPageData,
  socialData,
  copyright_text,
}: any) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [faqs, setFaqs] = useState<any>([]);

  const [responseData, setResponseData]: any = useState();
  const [dependecy, setDependecy] = useState(0);
  const handleWithdrawAndDeposit = async (actionType: string, id: number) => {
    // if (!router.query.id) return;

    if (actionType === MY_WALLET_DEPOSIT_TYPE) {
      const response = await WalletDepositApiAction(
        Number(router.query.coin_id)
      );
      if (response.success === true) {
        setResponseData({
          ...response,
          deposit: response.wallet,
          address: response.address ? response.address : null,
        });
      }
    } else {
      const response = await WalletWithdrawApiAction(
        Number(router.query.coin_id)
      );
      if (response.success === true) {
        setResponseData({
          ...response,
          withdraw: response.wallet,
          address: response.address,
        });
      }
    }
  };

  useEffect(() => {
    setFaqs(faq.data.data);
    handleWithdrawAndDeposit(
      String(router.query.id),
      Number(router.query.coin_id)
    );
  }, [dependecy]);

  return (
    <>
      <div className="page-wrap my-wallet-page">
        <div className="container">
          <div className="row">
            {router.query.id === MY_WALLET_DEPOSIT_TYPE && (
              <DipositComponent
                responseData={responseData}
                router={router}
                setDependecy={setDependecy}
              />
            )}

            {router.query.id === MY_WALLET_WITHDRAW_TYPE && (
              <WithdrawComponent responseData={responseData} router={router} />
            )}

            <div className={`col-md-5 faq-wallet-section`}>
              <div className={`box-one single-box visible`}>
                <div className="section-wrapper boxShadow">
                  <FAQ faqs={faqs} type={router.query.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/my-wallet/deposit");
  const cookies = parseCookies(ctx);
  const response = await GetUserInfoByTokenServer(cookies.token);
  const commonRes = await pageAvailabilityCheck();
  const FAQ = await getFaqList();
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();

  if (parseInt(commonRes.currency_deposit_status) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: response.user,
      faq: FAQ,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};

export default DeposiAndWithdraw;
