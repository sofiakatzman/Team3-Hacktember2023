import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./functionality/UserContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Authentication from "./pages/Authentication";
import UserOnly from "./pages/UserOnly";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Dictaphone from "./functionality/Dictaphone";
import NavbarCmp from "./components/Navbar/NavbarCmp";
import ChatIcon from "./components/Chatbot/ChatIcon";
import Chatbot from "./components/Chatbot/Chatbot";
import "./App.css";

function App() {
  const { user } = useContext(UserContext) || { user: null };
  const [isListening, setIsListening] = useState(false); // State for listening
  const [spokenText, setSpokenText] = useState(""); // State to store spoken text

  // Callback function to update isListening state
  const handleListeningChange = (newIsListening) => {
    setIsListening(newIsListening);
  };

  // Callback function to handle the spoken text
  const handleDictaphoneSubmit = (text) => {
    // Set the spoken text in state
    setSpokenText(text);
    console.log(text)
  };

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

        <Dictaphone
          isListening={isListening}
          setIsListening={handleListeningChange}
          onTranscribe={handleDictaphoneSubmit}
        />
        <ChatIcon
          isListening={isListening}
          setIsListening={handleListeningChange}
        />
        <Chatbot spokenText={spokenText} />
      </BrowserRouter>
    </div>
  );
}

export default App;