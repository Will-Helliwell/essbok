'use strict';

// console.log("hi")

const p = React.createElement;

class PostPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    list: []
  }
}


// call to API
getData() {
  const url = '/index_API'
  let postsDiv = document.getElementById('display-posts')

  fetch(url)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    result.forEach(post => {
      let postDiv = document.createElement('div')
      postDiv.innerHTML = `
        <p>${post.message}</p>
        <p>created at ${post.created_at}</p>
        <p>created by ${post.user_id}</p>
      `
      console.log(postDiv)
      postsDiv.appendChild(postDiv)
    })}
  )}

//     // grabs all data in the post array
//     console.log(result)
//     //grab data from 1st index in the array with the message
//     console.log(result[0].message)
//
//
//
//   })
// }

render() {
  return p(
    'button',
    { onClick: () => this.getData()},
    'getData'
  );
}

}

const pageContainer = document.getElementById('posts-page');
ReactDOM.render(p(PostPage), pageContainer);
