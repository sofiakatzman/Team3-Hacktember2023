import React from "react";
import mic from "../../assets/LOGO_MIC.png";

const ChatIcon = ({ setIsListening, handleChatBoxTrigger }) => {
  const handleMouseDown = () => {
    setIsListening(true);
    console.log("starting to listen")
    handleChatBoxTrigger(true)
  };

  const handleMouseUp = () => {
    setIsListening(false); // Stop listening when the button is released
    console.log("no longer listening")
  };

  return (
    <div
      className="fixed z-50 w-36 h-36 bg-blue-500 rounded-full bottom-10 right-10"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img src={mic} alt="mic_logo" className="w-full h-full object-cover rounded-full" />
    </div>
  );
};

export default ChatIcon;