import React, { Component } from "react";

class TestAPI extends Component {
    constructor(props) {
         super(props);
         this.state = { apiResponse: "Have not clicked submit." };
     }

    callAPI() {
         fetch("http://localhost:9000/testAPI")
             .then(res => res.text())
             .then(res => this.setState({ apiResponse: res }));
     }

     componentWillMount() {
         // this.callAPI();
     }

     render() {
       return (
         <p>{"Testing API from api/testAPI.js Call: "}{this.state.apiResponse}</p>
       )
     }
}

export default TestAPI;
