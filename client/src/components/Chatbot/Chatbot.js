import { useState, useEffect } from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const systemMessage = {
    "role": "system", "content": "Please explain things like you're talking to a young person, in just one or two sentences."
};

const Chatbot = ({ spokenText, handleChatBoxTrigger, openChatBox }) => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm Edu, EduGuide's resident guide! What can I clarify for you?",
            sentTime: "just now",
            sender: "Edu"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (spokenText) {
            handleSend(spokenText);
        }
    },);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
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
            return { role: role, content: messageObject.message }
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        };

        try {
            const response = await fetch("http://localhost:5000/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(apiRequestBody)
                });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();

            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "Edu"
                }]);
                startCountdown();
                setIsTyping(false);
            } else {
                console.error('No choices available:', data);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    const startCountdown = () => {
        setTimeout(() => {
            setIsTyping(false);
            handleChatBoxTrigger(false);
        }, 20000);
    };

    return (
        <div className="bg-white rounded-full p-5 m-5 text-2xl font-bold 0"
            style={{
            position: "fixed",
            bottom: "0",
            left: "50%",
            // transform: "translate(- 50%)",
            zIndex: "9999", // Ensure it's displayed above other elements
            height: "400px", // Set the desired height
            width: "600px", // Set the desired width
            borderRadius: "45px"
        }}
>   
            {/* <MainContainer> */}
                <ChatContainer >
                    <MessageList
                        scrollBehavior="smooth"
                        typingIndicator={isTyping ? <TypingIndicator content="EduGuide is typing" /> : null}
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message} />
                        })}
                    </MessageList>
                    <MessageInput placeholder="Type message here" onSend={handleSend} style={{ display: "none" }}/>
                </ChatContainer>
            {/* </MainContainer> */}
        </div>
    )
}

export default Chatbot;
