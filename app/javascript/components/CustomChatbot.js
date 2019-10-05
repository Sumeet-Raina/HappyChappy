import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello.How Are You Feeling Today?",
      trigger: "GreetAnswer"
    }, {
      id: "End",
      message: "Remember that you feel what you feel and that is okay. Accept it",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatbot;