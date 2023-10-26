import React, { useState, useContext, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { UserContext } from '../../contexts';
import UwasaLogo from '../../assets/uwasa.png';

import './Chatbot.css';

// Define chat messages

interface ChatMessageData {
  user: string;
  message: string;
}

export default function Chatbot() {
  const { user } = useContext(UserContext);

  // Define avatars

  const userAvatarSrc = user?.photos[0].value;
  const chatbotAvatarSrc = UwasaLogo;

  // State for user input and chat log

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState<ChatMessageData[]>([
    {
      user: "gpt",
      message: "Hello, I am UwasaBot. How can I help you?"
    }
  ]);

  // Clear chats
  function clearChat() {
    setChatLog([]);
  }



  const chatLogContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatLogContainerRef.current) {
      chatLogContainerRef.current.scrollTop = chatLogContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user) {
      console.log('User is not logged in');
      return;
    }

    const newUserMessage = { user: "me", message: input.toLowerCase() };

    // Update the chat log with the user's message

    setChatLog((prevChatLog) => [...prevChatLog, newUserMessage]);
    setInput('');

    // Server call

    const response = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newUserMessage
      })
    });
    const data = await response.json();

    setChatLog((prevChatLog) => [...prevChatLog, { user: "gpt", message: data.message }]);
    console.log(data.message);
  }

  return (
    <div className='Chatbot'>
      <aside className='chatbot__aside_left'>
        <div>
          <h1 className='chatbot__aside_left-button' onClick={clearChat}>
            <span>+</span>
            New Chat
          </h1>
        </div>
      </aside>
      <section className='chatbot__section'>
        <div
          className='chatbot__chat-log'
          ref={chatLogContainerRef}
        >
          {chatLog.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              message={chatMessage}
              avatarSrc={chatMessage.user === "gpt" ? chatbotAvatarSrc : userAvatarSrc}
            />
          ))}
        </div>
        <div className='chatbot__input'>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='chatbot__input-textarea'
              placeholder='Send a message'
            />
          </form>
        </div>
        <p className='chatbot__bottom-text'>
          Chatbot may display inaccurate or offensive information.
        </p>
      </section>
    </div>
  );
}
