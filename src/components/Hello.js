import React, { Component } from 'react';

let Student = props => {
              return <div>Hello {props.name}</div> 
          }

Student.defaultProps = {
  name: 'world'
}          

class Hello extends Component{
      
      sayHello(){
          console.log(this.refs.name)
      }
      
      render(){
          return (
              <div ref='name'>
                  {/*<input ref={input => {if(input.value === '') console.log('axiba')}}/>*/}
                  <Student name='miracle'/>
              </div>    
          )
      }
}

export default Hello