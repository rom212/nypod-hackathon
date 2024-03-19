import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, ConversationHeader, Avatar, MessageList, Message, TypingIndicator, MessageSeparator  } from '@chatscope/chat-ui-kit-react';

function Chatbox({name, profileImage, listOfMessages}) {
  const [isTyping, setIsTyping] = useState(false);
  // const [messages, setMessages] = useState(listOfMessages);
  const messages = listOfMessages;
 
  
  return (
    <div style={{ margin: "10px", height: "800px", width: "700px"  }}>
        <ChatContainer>
          <ConversationHeader>
          <Avatar
            name
            src={profileImage}
          />
          <ConversationHeader.Content
            // info="running"
            userName={name}
          />
        </ConversationHeader>
            <MessageList typingIndicator={isTyping ? <TypingIndicator content={`${name} is typing`} /> : null} >
            {messages.map((m,i) => m.type === "separator" ? <MessageSeparator key={i} {...m.props} /> : <Message key={i} {...m.props} />)}
            </MessageList>
        </ChatContainer>
    </div>
  );
}

export default Chatbox