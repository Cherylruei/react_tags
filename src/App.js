import "./App.scss";
import tripType from "./tripType.json";
import { useState } from "react";
import Container from "./Container/Container";
import {
  getCombinedProductData,
  getMarketingData,
  getShipData,
  getTrainData,
} from "./dataUtils";

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
