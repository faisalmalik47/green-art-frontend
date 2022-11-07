import {
  getLaunchpadList,
  getLaunchpadListDetails,
  launchpadBuyIcoToken,
  launchpadDynamicFrom,
  launchpadDynamicFromSubmit,
} from "service/launchpad";

export const getLaunchpadListAction = async (setLaunchpadList: any) => {
  const response = await getLaunchpadList();
  setLaunchpadList(response);
};
export const getLaunchpadListDetailsAction = async (
  setLaunchpadListDetails: any,
  id: any
) => {
  const response = await getLaunchpadListDetails(id);
  setLaunchpadListDetails(response);
};

export const launchpadBuyIcoTokenAction = async () => {
  const response = await launchpadBuyIcoToken();
  return response;
};
export const launchpadDynamicFromSubmitAction = async () => {
  const response = await launchpadDynamicFromSubmit();
  return response;
};
export const launchpadDynamicFromAction = async () => {
  const response = await launchpadDynamicFrom();
  return response;
};
