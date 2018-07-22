import React, { Component } from 'react';
import refsHOC from './create';
import High from './high';

const game = props => {
      return <div>Hello {props.name}
                {props.children}
             </div> 
}

const Gg = React.createElement(game,{name:'wcnmb'},<span>ffff</span>)

const Wrap = refsHOC(High)

class Home extends Component{
      static defaultProps = {
          autoPlay: 'qwer',
          maxLoops: 10
      }
      
      render(){
         console.log(Gg); 
         return(
            <div> 
                {Gg}
                <Wrap name='Miracle'/>
                <div>Home {this.props.autoPlay}</div> 
            </div>

         )   
      }    
}

export default Home