import { useState } from "react";
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const dropdownOptions = [
    {
      label: 'Banana',
      value: 'banana'
    },
    {
      label: 'Apple',
      value: 'apple'
    },
    {
      label: 'Mango',
      value: 'mango'
    },
    {
      label: 'Grapes',
      value: 'grapes'
    }
  ];

  const handleChange = (option) => {
    setSelection(option);
  }

  return <Dropdown options={dropdownOptions}
    value={selection} onChange={handleChange} label="Select Value" />
}

export default DropdownPage;
