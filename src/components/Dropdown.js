import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown({ options, label, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!elementRef.current) {
        return;
      }

      if (!elementRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [])

  const renderOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionChange(option)} key={option.value}>
        {option.label}
      </div>
    )
  });

  const handleOptionChange = (option) => {
    setIsOpen(false);
    onChange(option);
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const placeholder = value?.label ? value.label : 'Select option';

  return (
    <div className="w-48 relative" ref={elementRef}>
      <div> {label} </div>
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleOpen}>
        {placeholder}
        <MdKeyboardArrowDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown;
