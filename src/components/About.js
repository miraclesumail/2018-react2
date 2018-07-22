import React, { Component } from 'react';

class About extends Component{
      static defaultProps = {
          autoPlay: 'wcnm',
          maxLoops: 10
      }

      render(){
         return(
            <div> About {this.props.autoPlay} </div>

         )   
      }    
}

export default About