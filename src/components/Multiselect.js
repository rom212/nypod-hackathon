import * as React from "react";
import {
  Dropdown,
  Option,
  useId,
} from "@fluentui/react-components";
import '../stylesheets/Multiselect.css';

export const Multiselect = ({ options, onOptionSelect }) => {
  const comboId = useId("combo-multi");

  const handleDropdownSelect = (event, data) => {
    onOptionSelect(data.selectedOptions);
  };

  return (
    <div className="multiselect">
      <label id={comboId}>Select ticker symbol(s)</label>
      <Dropdown
        aria-labelledby={comboId}
        multiselect={true}
        placeholder="Select"
        onOptionSelect={handleDropdownSelect}
      >
        {options.map((option) => (
          <Option key={option}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};