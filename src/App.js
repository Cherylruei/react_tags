import "./App.scss";
import tripType from "./data/tripType.json";
import { useState } from "react";
import Container from "./Container/Container";
import {
  getCombinedProductData,
  getMarketingData,
  getShipData,
  getTrainData,
} from "./utility/dataUtils";

// 除非必要，不要把 state 和資料 import 放在App裡，盡量直接放在需要的子元素裡，以避免影響效能

function App() {
  const [isShipActive, setIsShipActive] = useState(false);
  const [isTrainActive, setIsTrainActive] = useState(false);

  // 產品規格 tags
  const combinedProductData = getCombinedProductData();
  // 行銷活動 tags
  const marketingData = getMarketingData();
  // 郵輪規格 tags
  const combinedShipData = getShipData();
  // 鐵路規格 tags
  const combinedTrainData = getTrainData();

  return (
    <div className="App">
      <Container
        title="遊玩交通"
        data={tripType}
        transportation={true}
        isShipActive={isShipActive}
        setIsShipActive={setIsShipActive}
        isTrainActive={isTrainActive}
        setIsTrainActive={setIsTrainActive}
      />
      {isShipActive && <Container title="郵輪規格" data={combinedShipData} />}
      {isTrainActive && <Container title="鐵道規格" data={combinedTrainData} />}
      <Container title="產品規格" data={combinedProductData} />
      <Container title="行銷活動" data={marketingData} />
    </div>
  );
}

export default App;
