import * as React from "react";
import {
  buttonClassNames,
  makeStyles,
  shorthands,
  tokens,
  Button,
  Spinner,
} from "@fluentui/react-components";
import { CheckmarkFilled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
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
      color: tokens.colorStatusSuccessForeground1,
    },
  },
});


export const SubmitButton = () => {
  const styles = useStyles();

  const [loadingState, setLoadingState] =
    React.useState("initial");

//   const [setTimeout, cancelTimeout] = useTimeout();

  const onButtonClick = () => {
    setLoadingState("loading");
    // setTimeout(() => setLoadingState("loaded"), 5000);
  };

  const buttonContent =
    loadingState === "loading"
      ? "Loading"
      : loadingState === "loaded"
      ? "Loaded"
      : "Submit";

  const buttonIcon =
    loadingState === "loading" ? (
      <Spinner size="tiny" />
    ) : loadingState === "loaded" ? (
      <CheckmarkFilled />
    ) : null;

  const buttonClassName =
    loadingState === "initial" ? undefined : styles.buttonNonInteractive;

  return (
    <div className={styles.wrapper}>
      <Button
        appearance="primary"
        className={buttonClassName}
        disabledFocusable={loadingState !== "initial"}
        icon={buttonIcon}
        onClick={onButtonClick}
      >
        {buttonContent}
      </Button>
    </div>
  );
};