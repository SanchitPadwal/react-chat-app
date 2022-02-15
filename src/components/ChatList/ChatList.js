import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "",
      id: 1,
      name: "Virat Kohli",
      active: true,
      isOnline: true,
    },
    {
      image:
        "",
      id: 2,
      name: "Rohit Sharma",
      active: false,
      isOnline: false,
    },
    {
      image:
        "",
      id: 3,
      name: "Ajinkya Rahane",
      active: false,
      isOnline: false,
    },
    {
      image:
        "",
      id: 4,
      name: "Rishabh Pant",
      active: false,
      isOnline: true,
    },
    {
      image:
        "",
      id: 5,
      name: "KL Rahul",
      active: false,
      isOnline: false,
    },
    {
      image:
        "",
      id: 6,
      name: "Ishan Kishan",
      active: false,
      isOnline: true,
    },
    {
      image:
        "",
      id: 7,
      name: "Surya Yadav",
      active: false,
      isOnline: true,
    },
    {
      image:
        "",
      id: 8,
      name: "Bhuvi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "",
      id: 9,
      name: "Kuldip Yadav",
      active: false,
      isOnline: true,
    },
    {
      image: "",
      id: 10,
      name: "Yuzi Chahal",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}