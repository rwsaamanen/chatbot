import React from 'react';
import './Chatbot.css'

interface ChatMessageData {
  user: string;
  message: string;
}  

interface ChatMessageProps {
  message: ChatMessageData;
  avatarSrc: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, avatarSrc }) => {
    return (
      <div className={`${message.user === "gpt" ? "chatbot chatbot__chat-log-message-chatbot" : "chatbot"}`}>
        <div className='chatbot__chat-message-center'>
          <div className='chatbot__avatar'>
            <img src={avatarSrc} alt={`${message.user === "gpt" ? "Chatbot" : "User"} avatar`} className='chatbot__avatar-image' />
          </div>
          <div className='chatbot__chat-message'>
            {message.message}
          </div>
        </div>
      </div>
    );
  }

export default ChatMessage;
