import * as React from "react";
import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px"),
    maxWidth: "400px",
  },
});

export const Multiselect = (props) => {
  const comboId = useId("combo-multi");
  const options = props.options;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Select ticker symbol(s)</label>
      <Dropdown
        aria-labelledby={comboId}
        multiselect={true}
        placeholder="Select"
        {...props}
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