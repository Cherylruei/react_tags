import Tag from '../Tag/Tag';
import './Container.scss';
import { useRef, useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { debounce } from '../utility/utility';

const Container = ({ title, data, transportation, hasTagClick }) => {
  // 監測 overflow
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className='container'>
      <h4 className='title'>{title}</h4>
      <OverflowMoniter isDisplay={isDisplay} setIsDisplay={setIsDisplay}>
        {data.map((type) => (
          <Tag
            hasTagClick={hasTagClick}
            key={transportation ? type.TypeCode : type.TagNo}
            text={transportation ? type.TypeName : type.TagName}
            typeCode={type.TypeCode ? type.TypeCode : type.TagNo}
            transportation={true}
          />
        ))}
      </OverflowMoniter>
    </div>
  );
};

export default Container;

function OverflowMoniter({ children, isDisplay, setIsDisplay }) {
  const elementRef = useRef();
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [mediaWidth, setMedidaWidth] = useState(false);

  const displayButton = () => {
    if (elementRef) {
      const element = elementRef.current;
      setIsOverflowed(element.scrollHeight > element.clientHeight);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setMedidaWidth(window.innerWidth);
      setIsDisplay(false);
    };

    const handleResizeDebounce = debounce(handleResize, 500);
    window.addEventListener('resize', handleResizeDebounce);

    return () => {
      window.removeEventListener('resize', handleResizeDebounce);
    };
    // eslint-disable-next-line
  }, [mediaWidth]);

  useEffect(() => {
    displayButton();
  }, [mediaWidth]);

  return (
    <>
      <div
        ref={elementRef}
        className={`tagsContainer ${isDisplay && 'display'}`}
      >
        <div className='children'>{children}</div>
      </div>
      {isOverflowed && (
        <div className='content' onClick={() => setIsDisplay(!isDisplay)}>
          {isDisplay ? '收起' : '更多'}
          {isDisplay ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      )}
    </>
  );
}
