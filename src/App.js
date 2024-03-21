import React from "react";
import './stylesheets/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import {
  FluentProvider,
  webLightTheme,
  Title1,
  Subtitle1,
  Text,
} from '@fluentui/react-components';
import { Multiselect } from "./components/Multiselect";
import { SubmitButton } from "./components/SubmitButton";
import { ResultsWindow } from "./components/ResultsWindow";
import { CUSTOMERS } from "./constants.js";

function App() {

  const [results, setResults] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleDropdownSelect = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  return (
    <FluentProvider theme={webLightTheme}>
        <Container className="container" fluid>
          <Row className="header mb-3">
            <Col fluid>
              <Title1 className="title">NYC Pod Hackathon Project</Title1>
            </Col>
          </Row>
          <Row className="content mb-3">
            <Col xs={12} md={6}>
                <Row>
                  <Col lg={12}>
                    <Subtitle1 className="subtitle">
                      Know your customer!
                    </Subtitle1>
                    <div></div>
                    <Text className="description">
                      Grounded in news and financial reports, this AI-driven account
                      analysis tool provides fresh insights on your customer,
                      including their revenue growth, readiness for transformation,
                      and IT budget spending patterns
                    </Text>
                  </Col>
                </Row>
                <Row className="mb-3 mt-3">
                  <Col lg ={12}>
                    <Stack direction="horizontal" gap={3} className="controls">
                      <div>
                        <Multiselect
                          options={CUSTOMERS}
                          onOptionSelect={handleDropdownSelect}
                        />
                      </div>
                      <div>
                        <SubmitButton
                          selectedOptions={selectedOptions}
                          setResults={setResults}
                        />
                      </div>
                    </Stack>
                  </Col>
                </Row>
            </Col>
            <Col xs={12} md={6} className="resultsCol">
              <ResultsWindow results={results} />
            </Col>
          </Row>
        </Container>
    </FluentProvider>
  );
}

export default App;
