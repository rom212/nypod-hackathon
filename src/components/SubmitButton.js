import React, { useState, useEffect } from "react";
import {
  buttonClassNames,
  makeStyles,
  shorthands,
  tokens,
  Button,
  Spinner,
} from "@fluentui/react-components";
import { CheckmarkFilled } from "@fluentui/react-icons";
import * as summaryService from "../services/Summary.js";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    alignSelf: "center",
  },
  buttonNonInteractive: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke1
    ),
    color: tokens.colorNeutralForeground1,
    cursor: "default",
    pointerEvents: "none",

    [`& .${buttonClassNames.icon}`]: {
      color: tokens.colorNeutralStroke1,
    },
  },
});

export const SubmitButton = ({ selectedOptions, setResults }) => {
  const styles = useStyles();

  const [loadingState, setLoadingState] = React.useState("initial");
  const [error, setError] = useState(null);

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
      setError(error);
      setLoadingState("error");
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
    loadingState === "initial" ? undefined : styles.buttonNonInteractive;

  return (
    <div className={styles.wrapper}>
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
