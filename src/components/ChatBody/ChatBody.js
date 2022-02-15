import React, { Component } from "react";
import "./chatBody.css";
  import ChatList from "../ChatList/ChatList";
  import ChatContent from "../ChatContent/ChatContent";
  import UserProfile from "../UserProfile/UserProfile"

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
         <>
           <ChatList />
        <ChatContent />
      <UserProfile /> 
              </> 
      </div>
    );
  }
}