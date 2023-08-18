import productCategory from "./category.json";

// 產品規格 tags
export const getCombinedProductData = () => {
  return productCategory[0].TypeList.flatMap(
    (group) => group.GroupList[0].TagList
  ).concat(productCategory[0].TypeList[5].GroupList[1].TagList);
};

// 行銷活動 tags
export const getMarketingData = () => {
  return productCategory[1].TypeList[0].GroupList[0].TagList;
};

// 郵輪規格 tags
export const getShipData = () => {
  return productCategory[2].TypeList[0].GroupList.flatMap(
    (group) => group.TagList
  );
};

// 鐵路規格 tags
export const getTrainData = () => {
  return productCategory[2].TypeList[1].GroupList.flatMap(
    (group) => group.TagList
  );
};
