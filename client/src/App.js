import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./functionality/UserContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Authentication from "./pages/Authentication";
import UserOnly from "./pages/UserOnly";
import Home from "./pages/Home";
import "./App.css";
import Root from "./pages/Root";
import Dictaphone from "./functionality/Dictaphone";
import NavbarCmp from "./components/Navbar/NavbarCmp";
import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

//The systemMessage will guide the model to provide explanations that are suitable for someone new to software programming.
//The model will aim to avoid jargon and provide clearer, simpler explanations on related topics.
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a beginner software developer.",
};

function App() {
  const { user } = useContext(UserContext) || { user: null };
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();

      console.log(data);

      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      } else {
        console.error("No choices available:", data);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarCmp />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
          {user && <Route path="/useronly" element={<UserOnly />} />}
        </Routes>
        <Dictaphone />
        <Header />
        <Footer />
      </BrowserRouter>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
