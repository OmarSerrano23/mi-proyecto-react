import React from "react";

class Info extends React.Component {
  ClickMe() {
    console.log("Ciudad:", this.props.city, "Año:", this.props.age);
  }

  render() {
    return (
      <h3 onClick={() => this.ClickMe()}>
        Lorem ipsum {this.props.city} dolor sit amet consectetur adipisicing
        elit. Voluptatem, deleniti consequatur? Facere dignissimos
        necessitatibus, recusandae rem voluptas eos! Obcaecati quas officiis
        exercitationem nisi accusamus saepe laborum excepturi cumque fugiat modi{" "}
        {this.props.age}.
      </h3>
    );
  }
}

export default Info;
