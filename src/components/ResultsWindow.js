import React from 'react';
import ReactDOM from 'react-dom';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  useId,
  Card,
  CardHeader,
  Caption1,
} from '@fluentui/react-components';
import sampleData from '../sample/report.json';


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

export const ResultsWindow = ({results}) => {
  console.log('results', results);
  const data = sampleData.content;
  console.log('data', data);


  const styles = useStyles();
  const labelId = useId();
  return (
    <div>
      <div className={styles.resultsLabel} id={labelId}>
        Results
      </div>
      <div className={styles.results}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {data.map((item, index) => (
          <Card key={index} style={{ margin: '10px' }}>
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
  )
}