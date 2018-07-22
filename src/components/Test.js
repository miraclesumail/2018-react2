import React, { Component } from 'react';

class Test extends Component{

      deal(child, index){
        return index>1 && child;  //第一个li会被过滤掉，因为其索引为0
      }

      render(){
          return(
              <ul>
                      {React.Children.map(this.props.children, this.deal)}
               </ul>
          )
      }
}

export default Test