import React from "react";

class Item extends React.Component {

  ClickMe() {
    console.log("I clicked:", this.props.name)
  }

  render() {
    return <h1 onClick={() => this.ClickMe()}>Hello {this.props.name}</h1>
  }
}


export default Item;


