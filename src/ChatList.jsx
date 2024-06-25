import { useState } from 'react';
import MessageList from './MessageList'


const ChatList = ({ chatData,handleSelectedChat,activeId}) => {
  return <>
  {chatData && chatData.map((chat=>{
    return <div className={activeId===chat.id?"active":""} key={chat.id} onClick={()=>handleSelectedChat(chat.id)}>
       <MessageList  chat={chat}/>
       </div>
  }))}
  </>
};
export default ChatList;

