import React, { Component } from 'react';
import './css/user.css'
import jquery from 'jquery';

class User extends Component {
      constructor() {
        super()
        this.state = { style: {width:'200px',height:'200px',position:'relative', 
        backgroundColor: 'green'} }
      }

      componentDidMount(){
          jquery(this.refs.animate).animate({
              left:'200px'
          },1000)
      }

      handlerClick(e){
          console.log(e.target);
          jquery(e.target).toggleClass('qwe');
      }      

      render(){
         const usersElements = [];
         for(let user of this.props.users){
             usersElements.push(
                 <li key={user.username} onClick={this.handlerClick.bind(this)}>
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                </li>
             )
         }
         return (
             <div>
                <ul>{usersElements}</ul>
                <div ref="animate" style={this.state.style}></div>
             </div>
         )
     }
}  

export default User;
