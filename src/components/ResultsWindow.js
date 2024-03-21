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
  Spinner,
} from "@fluentui/react-components";
import type { SpinnerProps } from "@fluentui/react-components";

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

export const ResultsWindow = ({ results }) => {
  
  const styles = useStyles();
  const labelId = useId();
  
  console.log('ResultsWindow - results', results);

  if (results === null) {
    return (
      <div>
        <div className={styles.resultsLabel} id={labelId}>
          Results
        </div>
        <div className={styles.results}>
          <div style={{height: "100%", textAlign: "center"}}>Waiting on selection</div>
        </div>
      </div>
    );
  }

  if (typeof results === "boolean") {
    return (
      <div>
        <div className={styles.resultsLabel} id={labelId}>
          Results
        </div>
        <div className={styles.results}>
          <div style={{height: "100%", textAlign: "center"}}>
            <Spinner appearance="primary" label="Loading..." />
          </div>
        </div>
      </div>
    );
  }


  if (Array.isArray(results) && results.length !== 0) {
    return (
      <div>
        <div className={styles.resultsLabel} id={labelId}>
          Results
        </div>
        <div className={styles.results}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {results.map((item, index) => (
              <Card key={index} style={{ margin: "10px" }}>
                <CardHeader
                  header={<Text weight="semibold">{item.name}</Text>}
                  description={
                    <Caption1 className={styles.caption}>Summary</Caption1>
                  }
                />
                <Text>
                  <div style={{ whiteSpace: 'pre-wrap' }}>
                    {item.report}
                  </div>
                </Text>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  

  return (
    <div>
      <div className={styles.resultsLabel} id={labelId}>
        Results
      </div>
      <div className={styles.results}>
        <div style={{height: "100%", textAlign: "center"}}>No results</div>
      </div>
    </div>
  );
};