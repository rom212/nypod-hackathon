import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  useId,
  Card,
  CardHeader,
  Caption1,
} from "@fluentui/react-components";
import * as summaryService from "../services/Summary.js";
import sampleData from "../sample/report.json";

const useStyles = makeStyles({
  resultsLabel: {
    color: tokens.colorNeutralForegroundOnBrand,
    backgroundColor: tokens.colorBrandBackground,
    width: "fit-content",
    fontWeight: tokens.fontWeightBold,
    ...shorthands.padding("2px", "12px"),
  },
  results: {
    overflowY: "auto",
    boxShadow: tokens.shadow16,
    position: "relative",
    minWidth: "200px",
    height: "100%",
    ...shorthands.border("2px", "solid", tokens.colorBrandBackground),
    ...shorthands.padding("12px", "12px"),
  },
});

const ResultsWindow = ({ results }) => {
  console.log(results);
  
  const styles = useStyles();
  const labelId = useId();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await summaryService.getSummary([], "no");
        console.log("response", response);
        setData(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); 

  console.log(error);
  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // const datas = data.content;

  return (
    <div>
      <div className={styles.resultsLabel} id={labelId}>
        Results
      </div>
      <div className={styles.results}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {data.map((item, index) => (
            <Card key={index} style={{ margin: "10px" }}>
              <CardHeader
                header={<Text weight="semibold">{item.name}</Text>}
                description={
                  <Caption1 className={styles.caption}>Summary</Caption1>
                }
              />
              <Text>{item.report}</Text>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsWindow;