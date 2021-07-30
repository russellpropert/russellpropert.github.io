"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }

  handleClick(event) {
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    // TODO: Your task is to add onClick listeners to each of the elements within the container-div <div>
    // This is the only place you need to edit for this activity.
    return (
      <div className="container-div">
        <div id="div-element" onClick={(e) => this.handleClick(e)}>
          I am DIV
        </div>

        <span id="span-element" onClick={(e) => this.handleClick(e)}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" onClick={(e) => this.handleClick(e)}>
          I am Button
        </button>
        <br></br>

        <a id="link-element" href="" onClick={(e) => this.handleClick(e)}>
          I am LINK
        </a>

        <div
          id="div-element-2"
          className="button"
          onClick={(e) => this.handleClick(e)}
        >
          I am DIV
        </div>

        <span
          id="span-element-2"
          className="button"
          onClick={(e) => this.handleClick(e)}
        >
          I am SPAN
        </span>
        <br></br>

        <button
          id="button-element-2"
          className="button"
          onClick={(e) => this.handleClick(e)}
        >
          I am Button
        </button>
        <br></br>

        <a
          id="link-element-2"
          className="button"
          href=""
          onClick={(e) => this.handleClick(e)}
        >
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
