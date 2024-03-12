import { getWalletDepositByWalletId } from "service/NextApi/private";

export default async function handler(req: any, res: any) {
  const { wallet_id } = req.query;
  if (req.method === "GET") {
    const response = await getWalletDepositByWalletId(req, wallet_id);
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "404 not found", success: false });
  }
}
