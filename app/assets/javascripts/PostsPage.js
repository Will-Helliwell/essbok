"use strict";

const p = React.createElement;

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.getData();
  }
  // call to API
  getData() {
    const url = "/index_API";
    let postsDiv = document.getElementById("display-posts");

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log("result")
        console.log(result);
        this.setState({ list: result });
      });
  }

  render() {
    return p(
      "div",
      { id: "contains_all_posts" },
      this.state.list.map((post_data) => {
        return p(
          Post,
          {
            ...post_data,
            onDeleteSuccess: (id) => {
              const filterList = this.state.list.filter(
                (post) => post.id !== id
              );
              this.setState({ list: filterList });
            },
          },
          undefined
        );
      })
    );
  }
}

// Post Component
class Post extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return p(
      // React.createElement(
      //   type,
      //   [props],
      //   [...children]
      // )
      "div", //type of element.it can also be react component ----> call this script before PostPage
      { className: "p-3 border border-dark" }, //html tag --> attribute of the tag; react component --> props
      [
        p("p", undefined, this.props.message),
        p("p", undefined, `created at ${this.props.created_at}`),
        p("p", undefined, `created by ${this.props.username}`),
        p(DeleteButton, this.props, undefined),
        p(LikeButton, undefined, undefined)
      ]
    );
  }
}
const pageContainer = document.getElementById("posts-page");
ReactDOM.render(p(PostPage), pageContainer);

// Delete Button Component

const d = React.createElement;
class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  deletePost() {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    fetch(`/posts/delete/${this.props.id}`, {
      headers: {
        "X-CSRF-Token": csrf,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then(() => {
      this.props.onDeleteSuccess(this.props.id);
    });
  }

  render() {
    return d(
      "button",
      { onClick: () => this.deletePost() },
      "Delete"
    );
  }
}
