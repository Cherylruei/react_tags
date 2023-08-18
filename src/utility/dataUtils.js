import productCategory from "../data/category.json";

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

// 交通的規格會有 tripCode 可以做判斷，要如何重整資料，盡量用資料裡的現有東西去判斷要抓的資料
// 盡量避免使用 TypeList[0] 使用 Index 去一個個抓資料，以防後端給的資料有改動，需要重改，不要把它寫死

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
