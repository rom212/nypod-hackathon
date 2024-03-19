// App.js
import React from 'react';
import Chatbox from './components/Chatbox';
import { Avatar, MessageInput} from '@chatscope/chat-ui-kit-react';

import './App.css'; // Ensure you have a CSS file linked

const azureAILogo = "https://eu.ui-avatars.com/api/?name=Azure+Intel&size=250";
const otherAILogo = "https://eu.ui-avatars.com/api/?name=Other+Intel&size=250";

function App() {
  const [aoaiMessages, setAoaiMessages] = React.useState([
    {
      props: {
        model: { message: "Hello!" , sender: "Azure AI", direction: "incoming", position: "last" },
        children: <Avatar src={azureAILogo} name="Azure AI" />
      }
    }
  ]);
  const [otherMessages, setOtherMessages] = React.useState([
    {
      props: {
        model: { message: "Hi!" , sender: "Other AI", direction: "incoming", position: "last" },
        children: <Avatar src={otherAILogo} name="Other AI" />
      }
    }
  ]);


  const handleSend = async (prompt) => {
    console.log('sending message: ', prompt);
    const newMessage = {
      props: {
        model: { message: prompt , sender: "User", direction: "outgoing", position: "normal" }
      }
    };
    
    const newAoaiMessages = [...aoaiMessages, newMessage];
    const newOtherMessages = [...otherMessages, newMessage];

    setAoaiMessages(newAoaiMessages);
    setOtherMessages(newOtherMessages);

  };

return (
  <div className="App">
    <div className="dual-chat">
      <Chatbox name={"Azure AI"} profileImage={azureAILogo} listOfMessages={aoaiMessages} />
      <Chatbox name={"Other AI"} profileImage={otherAILogo} listOfMessages={otherMessages} />
    </div>
    <div style={{ margin: "5px" }}>
      <MessageInput attachButton={false} placeholder="Type message here" onSend={handleSend} />
    </div>
  </div>
);
}

export default App;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/