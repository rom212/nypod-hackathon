import {
    Text,
    Card,
    CardHeader,
    Caption1,
    Spinner,
  } from "@fluentui/react-components";
import '../stylesheets/ResultsWindow.css';

const renderResults = (results) => {
    if (results === null) {
      return <div><Text>Waiting on selection</Text></div>;
    }
  
    if (typeof results === "boolean") {
      return <Spinner appearance="primary" label="Loading..." />;
    }
  
    if (Array.isArray(results) && results.length !== 0) {
      return results.map((item, index) => (
        <Card key={index} className="card">
          <CardHeader
            header={<Text weight="semibold">{item.name}</Text>}
            description={<Caption1>Summary</Caption1>}
          />
          <Text>
            <div>{item.report}</div>
          </Text>
        </Card>
      ));
    }
  
    return <div>No results</div>;
  };

  export const ResultsWindow = ({ results }) => (
    <div div className="resultsWindow">
      <div className="resultsLabel">Results</div>
      <div className="resultsBox">{renderResults(results)}</div>
    </div>
  );