import React from 'react';

class Condition1 extends React.Component {
  render() {
    return (
        <div>Condition 1</div>
    );
  }
}

class Condition2 extends React.Component {
  render() {
    return (
        <div>Condition 2</div>
    );
  }
}

class SwitchClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          condition: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(condition) {
      this.setState((state) => {
        return {condition: !condition}
      })
    }

  render() {
     const { condition } = this.state
     return (
         <div>
             <button onClick={() => this.handleClick(condition)}>Condition1</button>
             {condition === true ? <Condition1 /> : <Condition2 />}
         </div>
     )
  }
}

export default SwitchClass