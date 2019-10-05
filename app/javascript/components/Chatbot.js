import React from "react";
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
      message: "Hello, Welcome to our Happy Chappy app.We make tracking your mood daily easy and fun.",
      trigger: "Done"
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];
  return <ChatBot steps={steps} {...config} />;
}
export default CustomChatbot;