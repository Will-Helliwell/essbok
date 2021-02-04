// 'use strict';

// console.log("bye")

const d = React.createElement;

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  deletePost() {
    const url = "/posts/delete/:id";
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    return d("p", undefined, "Hello");
    // d("button", { onClick: () => this.deletePost() }, "Hello");
  }
}

const deleteContainer = document.getElementById("delete-button");
ReactDOM.render(d(DeleteButton), deleteContainer);
