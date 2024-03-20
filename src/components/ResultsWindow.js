import React from 'react';
import ReactDOM from 'react-dom';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  useId
} from '@fluentui/react-components';

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
    height: "200px",
    ...shorthands.border("2px", "solid", tokens.colorBrandBackground),
    ...shorthands.padding("12px", "12px"),
  },

})

export const ResultsWindow = (props) => {
  const styles = useStyles();
  const labelId = useId();
  return (
    <div>
      <div className={styles.resultsLabel} id={labelId}>
        Results
      </div>
      <div className={styles.results}>
        <Text align="justify">
          {props.results}
        </Text>
      </div>
    </div>
  )
}