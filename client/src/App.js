import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { UserContext } from "./functionality/UserContext";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Dictaphone from "./functionality/Dictaphone";
import NavbarCmp from "./components/Navbar/NavbarCmp";
import ChatIcon from "./components/Chatbot/ChatIcon";
import Chatbot from "./components/Chatbot/Chatbot";
import Videos from "./pages/Videos";
import VideoPage from "./pages/VideoPage";
import "./App.css";

function App() {
  // const { user } = useContext(UserContext) || { user: null };
  const [isListening, setIsListening] = useState(false); // State for listening
  const [spokenText, setSpokenText] = useState(""); // State to store spoken text
  const [openChatBox, setOpenChatbox] = useState(false)

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

  const handleChatBoxTrigger = (state) => {
    setOpenChatbox(state)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarCmp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:subject" element={<Videos />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>

        <Dictaphone
          isListening={isListening}
          setIsListening={handleListeningChange}
          onTranscribe={handleDictaphoneSubmit}
        />
        <ChatIcon
          isListening={isListening}
          setIsListening={handleListeningChange}
          handleChatBoxTrigger={handleChatBoxTrigger}
        />
        {openChatBox && <Chatbot spokenText={spokenText} handleChatBoxTrigger={handleChatBoxTrigger} openChatBox={openChatBox}/>}
      </BrowserRouter>
    </div>
  );
}

export default App;