import { useState, useEffect } from 'react';
import ChatList from './ChatList';
import ChatMessages from './ChatMessages';
import './App.css';

function App() {
  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://my-json-server.typicode.com/codebuds-fk/chat/chats'
      );
      const resData = await res.json();
      if (resData) setData(resData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [data, setData] = useState([]);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [searchedChat, setSearchedChat] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const handleSearchChat = (e) => {
    const val = e.target.value;
    const chat = data.filter(
      (chat) => chat.title == val || chat.orderId === val
    );
    setSearchedChat(chat);
  };
  const handleSelectedChat = (id) => {
    setIsChatSelected(true);
    const selectedchat = data.find((data) => data.id === id);
    setSelectedChat(selectedchat);
  };
  return (
    <div className="chatApp" style={{overflow:"hidden"}}>
      <div
        style={{
          width: isChatSelected ? '35%' : '100%',
          
        }}
        className="chatList"
      >
        {' '}
        <div className="topbar">
          <span>Filter by Title/Order ID</span>
          <input
            className="searchInput"
            type="text"
            placeholder="start typing to search"
            onChange={(e) => handleSearchChat(e)}
          />{' '}
        </div>
        <ChatList
          chatData={searchedChat.length > 0 ? searchedChat : data}
          handleSelectedChat={handleSelectedChat}
          activeId={isChatSelected?selectedChat?.id:""}
        />
      </div>
      {isChatSelected && <ChatMessages selectedChat={selectedChat} />}
    </div>
  );
}

export default App;
