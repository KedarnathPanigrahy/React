import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allWeights: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/getemployees")
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        this.setState({
          allWeights: response,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.allWeights.map((emp) => (
          <div key={emp.empName}>
            {emp.empName}
            {emp.employeeWeights.map((weight) => {
              return (
                <div className='indentWeight'>
                  Date: {new Date(weight.weighedDate).toLocaleDateString()}{" "}
                  Weight: {weight.empWeight}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
