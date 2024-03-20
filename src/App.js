
import React from 'react';
import ReactDOM from 'react-dom';
import {
  makeStyles,
  FluentProvider,
  teamsLightTheme,
  Title1,
  Subtitle1,
  Text
} from '@fluentui/react-components';
import { Multiselect } from './components/Multiselect';
import { SubmitButton } from './components/SubmitButton';
import { ResultsWindow } from './components/ResultsWindow';
import * as SummaryService from './services/Summary.js';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",

  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
});

function App() {
  const styles = useStyles();
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
        <div className={styles.root}>
          <div className={styles.leftColumn}>
            <Title1>NYC Pod Hackathon Project</Title1>
            <Subtitle1>Description of what the project is/does</Subtitle1>
            <div></div>
            <Text>These are the instructions for how to use the application</Text>
            <Multiselect options={["NASDAQ", "ADP", "J&J", "BNY", "YALE", "BMS"]} />
            <SubmitButton />
          </div>
          <div className={styles.rightColumn}>
            <ResultsWindow results="Results will be displayed here" />
          </div>

        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
