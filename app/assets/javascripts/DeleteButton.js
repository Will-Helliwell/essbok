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
        "x-csrf-token": csrfToken,
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    return d("button", { onClick: () => this.deletePost() }, "Hello");
    // d("p", undefined, "Hello");
  }
}

const deleteContainer = document.getElementById("delete-button");
ReactDOM.render(d(DeleteButton), deleteContainer);
