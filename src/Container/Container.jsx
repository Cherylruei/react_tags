import Tag from "../Tag/Tag";
import './Container.scss'
import { useRef, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { debounce } from "../utility/utility";

const Container = ({ title, data, transportation,isShipActive, setIsShipActive, isTrainActive, setIsTrainActive}) => {
    // 監測 overflow
    const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="container">
    <h4 className="title">{title}</h4>
    <OverflowMoniter
      isDisplay={isDisplay}
      setIsDisplay={setIsDisplay}
    >
      {data.map((type) => (
        <Tag
          key={transportation? type.TypeCode : type.TagNo}
          text={transportation? type.TypeName : type.TagName}
          icon={type.TypeCode}
          transportation={true}
          isShipActive={isShipActive}
          setIsShipActive={setIsShipActive}
          isTrainActive={isTrainActive}
          setIsTrainActive={setIsTrainActive}
        />
      ))}
    </OverflowMoniter>
  </div>
  )
}

export default Container

  function OverflowMoniter({ children, isDisplay, setIsDisplay }) {
      const elementRef = useRef();
      const [isOverflowed, setIsOverflowed] = useState(false)
      const [mediaWidth, setMedidaWidth] = useState(false)

      const displayButton = () => {
        if (elementRef){
          const element = elementRef.current
          setIsOverflowed(element.scrollHeight > element.clientHeight);

        }
      }
      console.log(elementRef)
      useEffect(() => {
        const handleResize = () => {
          setMedidaWidth(window.innerWidth)
          // 每一次 resize 就把標籤關起來
          setIsDisplay(false)
          console.log("resizedd")
        }
      
        const handleResizeDebounce = debounce(handleResize, 500)
        window.addEventListener('resize', handleResizeDebounce)
    
        return () => {
          window.removeEventListener('resize', handleResizeDebounce)
        }
      }, [mediaWidth]);

      useEffect(() => {
        displayButton()
      },[mediaWidth])

      return (
        <>
          <div
            ref={elementRef}
            className={`tagsContainer ${isDisplay && "display"}`}
          >
           <div className="children">{children}</div>
          </div>
          {isOverflowed && (
            <div className="content" onClick={() => setIsDisplay(!isDisplay)}>
              {isDisplay ? "收起" : "更多"}
              {isDisplay ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          )}
        </>
      );
    }
  
