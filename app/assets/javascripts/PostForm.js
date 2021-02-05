"use strict";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write your post.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/posts/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        message: this.state.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("er", err);
      });
  }

  render() {
    return (
      /*#__PURE__*/
      React.createElement(
        "form",
        {
          onSubmit: this.handleSubmit,
        },
        /*#__PURE__*/ React.createElement(
          "label",
          null,
          "Post:",
          /*#__PURE__*/ React.createElement("textarea", {
            value: this.state.value,
            onChange: this.handleChange,
          })
        ),
        /*#__PURE__*/ React.createElement("input", {
          type: "submit",
          value: "Submit",
        })
      )
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(PostForm, null),
  document.getElementById("post-form")
);
