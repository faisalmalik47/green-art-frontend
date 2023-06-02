import { CUstomSelect } from "components/common/CUstomSelect";
import { FIXED_PRICE, FLOAT_PRICE } from "helpers/core-constants";
import { useEffect, useState } from "react";
import { BsPlusLg, BsQuestionSquareFill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

export const AddPostOne = ({
  setAddStep,
  data,
  setSelectedAsset,
  selectedAsset,
  setselectedCurrency,
  selectedCurrency,
  pricePoint,
  priceType,
  setPriceType,
  setPricePoint,
  uid,
}: any) => {
  const [AssetOptions, setAssetOptions] = useState([]);
  const [CurrencyOptions, setCurrencyOptions] = useState([]);

  const handleCurrency = (e: any) => {
    setselectedCurrency(e);
  };
  const handleAsset = (e: any) => {
    setSelectedAsset(e);
  };
  useEffect(() => {
    let myAssets: any = [];
    let myCurrency: any = [];
    data?.data?.currency?.map((asset: any) => {
      const obj = {
        value: asset.currency_code,
        label: asset.currency_code,
      };
      myCurrency.push(obj);
    });
    data?.data?.assets?.map((asset: any) => {
      const obj = {
        value: asset.coin_type,
        label: asset.coin_type,
      };
      myAssets.push(obj);
    });
    setAssetOptions(myAssets);
    setCurrencyOptions(myCurrency);
  }, [data?.data?.assets]);
  return (
    <div className="col-12 mt-4">
      <div className="buySellAddBox px-5 py-5 rounded">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <label> Asset:</label>
            <CUstomSelect
              options={AssetOptions}
              isSearchable={true}
              disable={uid ? true : false}
              handleFunction={handleAsset}
              defaultValue={selectedAsset}
            />
          </div>
          <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
            <label> With Fiat:</label>
            <CUstomSelect
              options={CurrencyOptions}
              isSearchable={true}
              disable={uid ? true : false}
              handleFunction={handleCurrency}
              defaultValue={selectedCurrency}
            />
          </div>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-md-5 col-6 adFromPrice">
                <p>Your Price</p>
                <h4>
                  {selectedCurrency?.value} {pricePoint.highest_price}
                </h4>
              </div>
              <div className="col-md-5 col-6 adFromPrice">
                <p>Lowest Order Price</p>
                <h4>
                  {selectedCurrency?.value} {pricePoint.lowest_price}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row">
              <div className="col-md-3 col-6">
                <label>Price Type</label>
                <div className="adFromCheckBox">
                  <input
                    type="radio"
                    name="optradio"
                    checked={priceType === FIXED_PRICE}
                    onChange={() => setPriceType(FIXED_PRICE)}
                  />
                  <p>Fixed</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <label></label>
                <div className="adFromCheckBox">
                  <input
                    type="radio"
                    name="optradio"
                    checked={priceType === FLOAT_PRICE}
                    onChange={() => setPriceType(FLOAT_PRICE)}
                  />
                  <p>Floating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <label>Fixed</label>
            <span className="adFromPriceInecDecButton d-flex align-items-center">
              <button
                onClick={() =>
                  setPricePoint({
                    ...pricePoint,
                    price: Math.max(
                      0,
                      parseFloat(pricePoint.price) - 1
                    ).toFixed(2),
                  })
                }
              >
                <FaMinus />
              </button>
              <input
                type="number"
                value={pricePoint.price}
                className="pricePoint_field"
                onChange={(e) =>
                  setPricePoint({ ...pricePoint, price: e.target.value })
                }
              />
              {priceType === FLOAT_PRICE && "%"}
              <button
                onClick={() =>
                  setPricePoint({
                    ...pricePoint,
                    price: (parseFloat(pricePoint.price) + 1).toFixed(2),
                  })
                }
              >
                <BsPlusLg />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 row col-sm-4 col-md-3 col-lg-2 float-right mx-auto">
        {selectedAsset &&
          selectedCurrency &&
          pricePoint.highest_price &&
          pricePoint.lowest_price && (
            <button
              onClick={() => setAddStep("stepTwo")}
              className="addTabButton buySellBoxActive py-2"
            >
              Next
            </button>
          )}
      </div>
    </div>
  );
};
