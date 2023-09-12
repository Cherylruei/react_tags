import tripType from '../data/tripType.json';
import { useState } from 'react';
import Container from '../Container/Container';
import {
  getCombinedProductData,
  getMarketingData,
  getShipData,
  getTrainData,
} from '../utility/dataUtils';
import './TagGroups.scss';

const TagGroups = () => {
  const [isVisible, setIsVisible] = useState([]);

  const hasTagClick = (value) => {
    setIsVisible((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
    return value;
  };

  // 產品規格 tags
  const combinedProductData = getCombinedProductData();
  // 行銷活動 tags
  const marketingData = getMarketingData();
  // 郵輪規格 tags
  const combinedShipData = getShipData();
  // 鐵路規格 tags
  const combinedTrainData = getTrainData();
  return (
    <div className='tagGroups'>
      <Container
        title='遊玩交通'
        data={tripType}
        transportation={true}
        hasTagClick={hasTagClick}
      />
      {isVisible.includes('01') && (
        <Container
          title='郵輪規格'
          data={combinedShipData}
          hasTagClick={hasTagClick}
        />
      )}
      {isVisible.includes('03') && (
        <Container
          title='鐵道規格'
          data={combinedTrainData}
          hasTagClick={hasTagClick}
        />
      )}
      <Container
        title='產品規格'
        data={combinedProductData}
        hasTagClick={hasTagClick}
      />
      <Container
        title='行銷活動'
        data={marketingData}
        hasTagClick={hasTagClick}
      />
    </div>
  );
};

export default TagGroups;
