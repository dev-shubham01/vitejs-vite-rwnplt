import { useState } from 'react';
import dateUtility from './utilityFunction';
const MessageList = ({ chat }) => {
  const date = dateUtility(chat.latestMessageTimestamp);
  return (
    <div className="messageList">
     <div className='messageListHeading'> <img className="messageListImg" src={chat.imageURL} alt={chat.title} />
      <div className="messageListContent">
        {' '}
        <span className="messageListTitle">{chat.title}</span>
        <span className="messageListOrderId"> {chat.orderId}</span>
      </div>
      </div>
      
      <span>{date} </span>
    </div>
  );
};
export default MessageList;
