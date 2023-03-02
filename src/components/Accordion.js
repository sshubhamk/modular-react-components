import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const onArrowClick = (index) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === index) {
        return -1
      } return index;
    });
  };


  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </span>
    );

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => onArrowClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <p className="border-b p-5"> {item.content} </p>}
      </div>
    );
  });

  return <div className="border-x border-t rounded"> {renderItems}</div>
}

export default Accordion;
