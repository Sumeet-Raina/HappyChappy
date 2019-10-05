import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#3297ED",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#3297ED",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };
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
      id: 'GreetAnswer',
      user: true,
      trigger: 'Reason'
    },
    {
      id: "Reason",
      message: "Did Something Bad Actually Happen?",
      trigger: "ReasonAnswer"
    }, {
      id: 'ReasonAnswer',
      user: true,
      trigger: 'Now'
    },
    {
      id: "Now",
      message: "Is It Happening Right Now?",
      trigger: "PresentAnswer"
    },
    {
      id: 'PresentAnswer',
      user: true,
      trigger: 'Control'
    },
    {
      id: "Control",
      message: "Can You Control It?",
      trigger: 'ControlAnswer'
    }
    , {
      id: 'ControlAnswer',
      user: true,
      trigger: 'End'
    }, {
      id: 'End',
      message: 'Remember that you feel what you feel and that is okay. Accept it',
      end: true
    }

  ]
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>)
}
export default CustomChatbot;