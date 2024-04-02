import * as React from "react";
import { Button } from "@fluentui/react-components";
import { WindowNewRegular } from "@fluentui/react-icons";
import '../stylesheets/ChatLinkButton.css';

export const ChatLinkButton = () => {

  return (
    <div className="chatLinkButtonWrapper">
      <Button icon={<WindowNewRegular />} className="chatLinkButton" iconPosition="after" as="a" href="http://172.212.97.29:8080/#/chat" target="_blank">
        Try Chat
      </Button>
    </div>
  );
};