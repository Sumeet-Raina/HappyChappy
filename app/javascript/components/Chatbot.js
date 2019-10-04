import React from "react";
import ChatBot from "react-simple-chatbot";

function Chatbot(props) {

  const config = {
    width: "500px",
    height: "600px",
    floating: true
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello!",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "What's your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to eat"
    },
    {
      id: "Asking options to eat",
      message: "Hi {previousValue}, Glad to know you !!",
      trigger: "Done"
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
 ];
  return <ChatBot steps={steps} />;
}

export default Chatbot;