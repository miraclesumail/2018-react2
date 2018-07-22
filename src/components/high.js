import React, { Component } from 'react';

class High extends Component{
      constructor(){
          super()
          this.state = null;
      }

      say(){
          console.log('wcnmb')
      }    

      change(){
          setTimeout(() => this.setState({detail:'detail'}),3000)
      }



      render(){
         return(
            <div> 
                {this.state ? this.state.detail : 'axiba'}
                About HIGH ORDER {this.props.name}
            </div>

         )   
      }    
}

export default High