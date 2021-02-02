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
  var postsDiv = document.getElementById('posts-page')
  let postDiv = document.createElement('div')

  fetch(url)
  .then(response => response.json())
  .then(result => {
    result.forEach(post =>
      postDiv.innerHTML = '',
      postDiv.innerHTML = '<p>IS THIS WOKRING?</p>',
      postsDiv.appendChild(postDiv)
    )}
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
