import React from "react";
class App extends React.Component {
  state = {
    tasks: ["make Coffie", "make Coffie", "make Coffie", "make Coffie"],
    currInput: "",
  };

  render = () => {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ currInput: e.target.value});
          }}
          onKeyDown={(btn) => {
            if (btn.key==="Enter") {
              this.setState({
                tasks: [...this.state.tasks,...this.state.currInput],
                currInput: "",
              });
            }
          }}
          value={this.state.currInput}
        />

        <ul>
          {this.state.tasks.map((el) => {
            return (
                <li>{el} <button >Delete</button></li>
            );
          })}
        </ul>
      </div>
    );
  };
}
export default App;
