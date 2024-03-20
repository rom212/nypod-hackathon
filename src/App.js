import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch } from "@fluentui/react-components";
import type { SwitchProps } from "@fluentui/react-components";

function App() {
  const [checked, setChecked] = React.useState(true);
  const onChange = React.useCallback(
    (ev) => {
      setChecked(ev.currentTarget.checked);
    },
    [setChecked]
  );

  return (
    <div className="App">
      <h2>Customer Report</h2>
      <div className="main-box">
        <div className="inner-box">
          <h3>form</h3>
          <Switch
            checked={checked}
            onChange={onChange}
            label={checked ? "Checked" : "Unchecked"}
          />
        </div>
        <div className="inner-box">output</div>
      </div>
    </div>
  );
}

export default App;
