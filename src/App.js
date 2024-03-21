import React from "react";
import ReactDOM from "react-dom";
import {
  makeStyles,
  FluentProvider,
  webLightTheme,
  Title1,
  Subtitle1,
  Text,
  tokens,
} from "@fluentui/react-components";
import { Multiselect } from "./components/Multiselect";
import { SubmitButton } from "./components/SubmitButton";
import { ResultsWindow } from "./components/ResultsWindow";
import { CUSTOMERS } from "./constants.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "auto",
    height: "auto",
    boxSizing: "border-box",
    "> *": {
      textOverflow: "ellipsis",
    },
    "> :not(:first-child)": {
      marginTop: "0px",
    },
    "> *:not(.ms-StackItem)": {
      flexShrink: 1,
    },
    rowGap: "5px",
  },
  header: {
    height: "3rem",
    backgroundImage: "linear-gradient(to right, #0F6CBD, white)",
    width: "auto",
    flexShrink: 1,
    color: "white",
  },

  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "auto",
    height: "auto",
    rowGap: "5px",
    boxSizing: "border-box",
    "> *": {
      textOverflow: "ellipsis",
    },
    "> :not(:first-child)": {
      marginTop: "0px",
    },
    "> *:not(.ms-StackItem)": {
      flexShrink: 1,
    },
  },

  mainContent: {
    height: "auto",
    width: "500px",
    flexShrink: 1,
    "@media (max-width: 800px)": {
      width: "100%",
    },
  },

  controls: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: "5px",
    alignItems: "flex-end",
  },

  multiselect: {
    display: "flex",
    flexShrink: 1,
  },

  submitButton: {
    display: "flex",
    flexShrink: 1,
  },

  resultsContent: {
    height: "auto",
    width: "auto",
    flexGrow: 1,
    maxWidth: "700px",
    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
  subTitle: {
    fontWeight: "bold",
    color: "rgba(171, 143, 99, 1)",
    fontSize: "1.75rem",
  },
  description: {
    fontSize: "1.25rem",
  },
});

function App() {
  const [results, setResults] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleDropdownSelect = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const styles = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <div className={styles.root}>
          <div className={styles.header}>
            <Title1 className={styles.title}>NYC Pod Hackathon Project</Title1>
          </div>
          <div className={styles.content}>
            <div className={styles.mainContent}>
              <Subtitle1 className={styles.subTitle}>
                Know your customer!
              </Subtitle1>
              <div></div>
              <Text className={styles.description}>
                Grounded in news and financial reports, this AI-driven account
                analysis tool provides fresh insights on your customer,
                including their revenue growth, readiness for transformation,
                and IT budget spending patterns
              </Text>
              <div className={styles.controls}>
                <div className={styles.multiselect}>
                  <Multiselect
                    options={CUSTOMERS}
                    onOptionSelect={handleDropdownSelect}
                  />
                </div>
                <div className={styles.submitButton}>
                  <SubmitButton
                    selectedOptions={selectedOptions}
                    setResults={setResults}
                  />
                </div>
              </div>
            </div>
            <div className={styles.resultsContent}>
              <ResultsWindow results={results} />
            </div>
          </div>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
