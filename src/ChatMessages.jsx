import { useEffect, useState } from 'react';
import './App.css'; // Ensure this file is included to apply the CSS
import dateUtility from './utilityFunction';

const ChatMessages = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    setMessages(selectedChat.messageList);
  }, [selectedChat]);

  const handleInputChange = (e) => {
    setNewMsg(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMsg.trim() === '') return;

    const newMessage = {
      messageId: `msg${messages.length + 1}`,
      message: newMsg,
      timestamp: Date.now(),
      sender: 'USER',
      messageType: 'text',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMsg('');
  };
  
  return (
    <div className="messageBox">
      <div className="messageTitle">{selectedChat.title}</div>
      <div className="messages">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.sender === 'BOT' ? 'flex-start' : 'flex-end',
              }}
              className="message"
            >
              {msg.message}
            </div>
          ))
        ) : (
          <div className="initialMsg">Send a message to start chatting</div>
        )}
      </div>
      <div className="msgInput">
        <input
          className="inputField"
          type="text"
          value={newMsg}
          onChange={handleInputChange}
          placeholder="Type a Message..."
        />
        <button
          className="sendButton"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
