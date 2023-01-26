import { formateData } from "common";
import { NoItemFound } from "components/NoItemFound/NoItemFound";
import TableLoading from "components/common/TableLoading";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { getNewsByCategoryApi } from "service/news";
import { CustomLoading } from "components/common/CustomLoading";

export const NewsList = ({
  recentNewsData,
  setRecentNews,
  categories,
  setLoading,
  loading,
  setLinks,
  setSelected,
  selected,
}: any) => {
  const getNewsByCategory = async (id: any) => {
    setLoading(true);
    setSelected(id);
    const CategoryNews = await getNewsByCategoryApi(id, 0, 5, 1);
    setRecentNews(CategoryNews?.data?.data);
    setLinks(CategoryNews?.data?.links);
    setLoading(false);
  };
  const { t } = useTranslation("common");

  return (
    <>
      <div className="row">
        <div className="col-12 mb-5 mt-5 d-flex">
          <div className="newsCategory">
            {categories.map((category: any, index: any) => (
              <li
                key={index}
                className={`itemCatagory ${
                  category?.id === selected ? "itemCatagoryactive" : ""
                }`}
                onClick={() => {
                  getNewsByCategory(category?.id);
                }}
              >
                {category?.title}
              </li>
            ))}
          </div>
        </div>
        <div className="">
          {loading ? (
          <div className="newsLoadingContainer">
              <CustomLoading />
            </div>
          ) : (
            <div className="col-12 mb-5">
              {recentNewsData.length > 0 &&
                recentNewsData?.map((list: any, index: any) => (
                  <Link key={index} href={"/news/" + list?.post_id}>
                    <div className="newsCard p-4 mt-2">
                      <a href="">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              className="rounded"
                              src={list.thumbnail}
                              alt=""
                            />
                          </div>
                          <div className="col-md-8 pt-3 pt-md-0">
                            <div className="newsCardText">
                              <h3 className="titleText">{list.title}</h3>
                              <small>{formateData(list.created_at)}</small>
                              <p>{list.description}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Link>
                ))}
              {recentNewsData.length === 0 && loading === false && (
                <NoItemFound />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
