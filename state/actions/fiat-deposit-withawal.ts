import Router from "next/router";
import { toast } from "react-toastify";
import {
  addEditBankDetails,
  apiFiatWithdrawal,
  deleteBank,
  fiatWithdrawProcess,
  getBankList,
  getFiatWithdrawalRate,
} from "service/deposit";

export const addEditBankDetailsAction = async (
  payload: any,
  setLoading: any
) => {
  setLoading(true);
  const response = await addEditBankDetails(payload);
  setLoading(false);
  if (response.success === true) {
    toast.success(response.message);
    Router.push("/user/bank/list");
  } else if (response.success === false) {
    toast.error(response.message);
  }
};

export const geyBankListAction = async (setBankList: any, setLoading: any) => {
  setLoading(true);
  const response = await getBankList();
  setLoading(false);
  setBankList(response.data);
};
export const deleteBankAction = async (setLoading: any, id: any) => {
  setLoading(true);
  const response = await deleteBank(id);
  setLoading(false);
  if (response.success === true) {
    toast.success(response.message);
    Router.push("/user/bank/list");
  } else if (response.success === false) {
    toast.error(response.message);
    Router.push("/user/bank/list");
  }
};

export const fiatWithdrawProcessAction = async (
  payload: any,
  setLoading: any
) => {
  setLoading(true);
  const response = await fiatWithdrawProcess(payload);
  setLoading(false);
  if (response.success === true) {
    toast.success(response.message);
    Router.push("/user/bank/list");
  } else if (response.success === false) {
    toast.error(response.message);
  }
};

export const apiFiatWithdrawalAction = async (
  setInitialData: any,
  setLoading: any
) => {
  setLoading(true);
  const response = await apiFiatWithdrawal();
  setLoading(false);
  console.log(response.data, "response.data");
  setInitialData(response.data);
};
export const getFiatWithdrawalRateAction = async (payload: any) => {
  const response = await getFiatWithdrawalRate(payload);
  return response;
};
