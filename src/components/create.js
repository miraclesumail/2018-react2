import React from 'react';


let refsHOC = (WrappedComponent) => {
  return class RefsHOC extends React.Component {
    // proc(wrappedComponentInstance) {
    //   console.log(wrappedComponentInstance)
    // }
    componentDidMount(){
        console.log(this.refs.componentClass.props)
        console.log(this.refs.componentClass.say())
        this.refs.componentClass.change()
    }    

    render() {
      const props = Object.assign({}, this.props)
      return <WrappedComponent {...props} ref="componentClass"/>
    }
  }
}

export default refsHOC

