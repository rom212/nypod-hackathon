import React from "react";
import ReactDOM from "react-dom";
import {
  makeStyles,
  FluentProvider,
  webLightTheme,
  Title1,
  Subtitle1,
  Text,
} from "@fluentui/react-components";
import { Multiselect } from "./components/Multiselect";
import { SubmitButton } from "./components/SubmitButton";
import { ResultsWindow } from "./components/ResultsWindow";
import { CUSTOMERS } from "./constants.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftColumn: {
    display: "flex",
    rowGap: "15px",
    flexDirection: "column",
    width: "50%",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  title: {
    backgroundImage: "linear-gradient(to right, #0F6CBD, white)",
    color: "white",
    height: "3rem",
  },
  subTitle: {
    color: "#AB8F63",
    fontWeight: "bold",
  },
});

function App() {
  const [results, setResults] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleDropdownSelect = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const styles = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <div className={styles.root}>
          <div className={styles.leftColumn}>
            <Title1 className={styles.title}>NYC Pod Hackathon Project</Title1>
            <Subtitle1 className={styles.subTitle}>
              Know your customer!
            </Subtitle1>
            <div></div>
            <Text>
              Grounded in news and financial reports, this AI-driven account
              analysis tool provides fresh insights on your customer, including
              their revenue growth, readiness for transformation, and IT budget
              spending patterns
            </Text>
            <Multiselect
              options={CUSTOMERS}
              onOptionSelect={handleDropdownSelect}
            />
            <SubmitButton
              selectedOptions={selectedOptions}
              setResults={setResults}
            />
          </div>
          <div className={styles.rightColumn}>
            <ResultsWindow results={results} />
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
