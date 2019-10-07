import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import Mood from './Mood'
function CustomChatbot(props) {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',

  };



  const steps = [
    {
      id: "Greet",
      message: "Hello, How are you feeling today?",
      trigger: "Today"
    },
    {
      id: "Today",
      options: [
        { value: 'silly', label: 'silly', trigger: '3' },
        { value: 'happy', label: 'happy', trigger: '4' },
        { value: 'silly', label: 'okay', trigger: '3' },
        { value: 'sad', label: 'sad', trigger: '3' }
      ],
    }, {
      id: '3',
      message: 'Wrong answer, try again.',
      trigger: '2',
    }, {
      id: '2',
      message: 'Wrong answer, try again.',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ];

  const config = {
    width: "70vw",
    height: "80vh",

  };
  return (<ThemeProvider theme={theme}>
    <ChatBot steps={steps}  {...config} />
  </ThemeProvider >
  )
}
export default CustomChatbot;