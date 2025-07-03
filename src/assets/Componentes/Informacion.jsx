import React from "react";

class Info extends React.Component {
  ClickMe() {
    console.log("Ciudad:", this.props.city, "Año:", this.props.age);
  }

  render() {
    return (
      <di>
        <h3 onClick={() => this.ClickMe()}>
          Lorem ipsum {this.props.city} dolor sit amet consectetur adipisicing
          elit. Voluptatem, deleniti consequatur? Facere dignissimos
          necessitatibus, recusandae rem voluptas eos! Obcaecati quas officiis
          exercitationem nisi accusamus saepe laborum excepturi cumque fugiat
          modi {this.props.age}.
        </h3>

        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          voluptas dicta ratione quia distinctio quidem perferendis aspernatur,
          odio blanditiis sequi consectetur modi. Harum adipisci voluptate
          praesentium blanditiis suscipit illum labore?
        </h4>
      </di>
    );
  }
}

export default Info;
