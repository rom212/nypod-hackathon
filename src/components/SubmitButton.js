import React, { useEffect } from "react";
import { Button } from "@fluentui/react-components";
import { CheckmarkFilled } from "@fluentui/react-icons";
import * as summaryService from "../services/Summary.js";
import '../stylesheets/SubmitButton.css';

export const SubmitButton = ({ selectedOptions, setResults }) => {
  const [loadingState, setLoadingState] = React.useState("initial");

  useEffect(() => {
    setLoadingState("initial");
  }, [selectedOptions]);

  const onButtonClick = async () => {
    setLoadingState("loading");
    setResults(false)
    try {
      const response = await summaryService.getSummary(selectedOptions, "no");
      setResults(response);
      setLoadingState("done");
    } catch (error) {
      console.log(error)
    }
  };

  const buttonContent =
    loadingState === "loading"
      ? "Loading"
      : loadingState === "done"
        ? "Done"
        : "Submit";

  const buttonIcon =
    loadingState === "loading" ? (
      null
    ) : loadingState === "done" ? (
      <CheckmarkFilled />
    ) : null;

  const buttonClassName =
    loadingState === "initial" ? "submitButton" : "submitButtonNonInteractive";

  return (
    <div className="submitButtonWrapper">
    <Button
      appearance="primary"
      className={buttonClassName}
      icon={buttonIcon}
      onClick={onButtonClick}
    >
      {buttonContent}
    </Button>
    </div>
  );
};