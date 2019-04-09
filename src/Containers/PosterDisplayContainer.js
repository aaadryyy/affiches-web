import React from "react";
import InputComponent from "../Components/InputComponent";
import OutputComponent from "../Components/OutputComponent";

class PosterDisplayContainer extends React.Component {
  state = {
    title: "",
    subtitle: "",
    submitted: false
  };

  onChange = e => {
    this.setState({ submitted: false });
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    console.log(this.state);
    this.setState({ submitted: true });
  };
  render() {
    const { title, subtitle, submitted } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <InputComponent
            label="Title"
            type="text"
            name="title"
            placeholder="My fantastic title"
            onChange={e => this.onChange(e)}
            value={title}
          />
          <InputComponent
            label="Subtitle"
            type="text"
            name="subtitle"
            placeholder="My descritive subtitle"
            onChange={e => this.onChange(e)}
            value={subtitle}
          />
          <button onClick={this.onSubmit}>Get posters!</button>
        </div>
        <OutputComponent
          submitted={submitted}
          title={title}
          subtitle={subtitle}
        />
      </div>
    );
  }
}

export default PosterDisplayContainer;
