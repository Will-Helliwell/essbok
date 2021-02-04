// 'use strict';

// console.log("bye")

const d = React.createElement;

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  deletePost(event) {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    event.preventDefault();
    fetch(`/posts/delete/1`, {
      headers: {
        "X-CSRF-Token": csrf,
        "Content-Type": "application/json",
      },
      method: "DELETE",
      // body: JSON.stringify({ id: this.props.id }),
    });
  }

  render() {
    return d("button", { onClick: (event) => this.deletePost(event) }, "Hello");
    // d("p", undefined, "Hello");
  }
}

const deleteContainer = document.getElementById("delete-button");
ReactDOM.render(d(DeleteButton), deleteContainer);
