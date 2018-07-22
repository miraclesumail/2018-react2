import React, { Component } from 'react';
let timer;
class Button extends Component{
  constructor () {
    super()
    this.state = { isLiked: 'wcnm',count:0}
  }

  tick(){
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  componentDidMount(){
     console.log('wwww');
     timer = setInterval(() => {
         console.log(this.state.count);
         if(this.state.count >= 10){
             clearInterval(timer)
             return
         }
         this.tick()
     },1000)
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log(nextState)
      //return nextState.isLiked !== this.state.isLiked
      return true
  }

  componentWillReceiveProps(nextProps){
      //console.log(nextProps)
  }

  componentWillUnmount(){
      clearInterval(timer)
  }   

    render(){
        return(
            <button>{this.props.color}---{this.state.count}</button>  
        )
    }
}

export default Button;
