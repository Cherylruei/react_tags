import { useState } from 'react';
import './Tag.scss';
import { TripIcon } from '../constants/constant';

const Tag = ({ text, typeCode, hasTagClick, transportation }) => {
  const [isTagActive, setIsTagActive] = useState(false);

  const handleClick = () => {
    // 回傳點擊的 typeCode
    hasTagClick(typeCode);
    // 設置 tag active 樣式
    setIsTagActive(!isTagActive);
  };

  return (
    <>
      <div className={`tag ${isTagActive && 'active'}`} onClick={handleClick}>
        {transportation && <TripIcon typeCode={typeCode} />}
        {text}
      </div>
    </>
  );
};

export default Tag;
