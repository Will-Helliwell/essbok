"use strict";

const p = React.createElement;

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    fetch("/posts/create", {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
      method: "POST",
      body: JSON.stringify({
        message: this.state.message,
      }),
    }).then(() => {
      this.props.onCreateSuccess();
    });
  }

  render() {
    return p(
      "form",
      {
        onSubmit: this.handleSubmit,
      },
      p(
        "label",
        null,
        p("textarea", {
          message: this.state.value,
          onChange: this.handleChange,
        })
      ),
      p("input", {
        type: "submit",
        value: "Submit",
      })
    );
  }
}

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.getData();
  }

  getData() {
    const url = "/index_API";
    let postsDiv = document.getElementById("display-posts");

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ list: result });
      });
  }

  render() {
    return [
      p(
        PostForm,
        {
          onCreateSuccess: () => {
            console.log("TRIGGER");
            this.getData();
          },
        },
        undefined
      ),
      p(
        "div",
        undefined,
        this.state.list.map((post_data) => {
          return p(
            "div",
            { className: "row mb-4" },
            p(
              "div",
              { className: "col-xs-4 col-xs-offset-4" },
              p(
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
              )
            )
          );
        })
      ),
    ];
  }
}

class Post extends React.Component {
  render() {
    return p(
      "div",
      { className: "p-3 border border-dark" },
      [
        p("p", undefined, this.props.message),
        p("p", undefined, `created at ${this.props.created_at}`),
        p("p", undefined, `created by ${this.props.username}`),
        p(DeleteButton, this.props, undefined),
        p(LikeButton, undefined, undefined),
      ]
    );
  }
}
const pageContainer = document.getElementById("posts-page");
ReactDOM.render(p(PostPage), pageContainer);

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
    return p("button", { onClick: () => this.deletePost() }, "Delete");
  }
}
