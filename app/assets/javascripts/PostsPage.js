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
      // this needs some attention
      let stylingOneDiv = document.createElement('div')
      stylingOneDiv.className = "row mb-4"
      let stylingTwoDiv = document.createElement('div')
      stylingTwoDiv.className = "col-xs-4 col-xs-offset-4"
      let postDiv = document.createElement('div')
      postDiv.className = "p-3 border border-dark"
      let html = `
        <p>${post.message}</p>
        <p>created at ${post.created_at}</p>
        <p>created by ${post.username}</p>
      `
      postDiv.innerHTML = html
      stylingOneDiv.appendChild(stylingTwoDiv)
      stylingTwoDiv.appendChild(postDiv)
      postsDiv.appendChild(stylingOneDiv)
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


// 'use strict';
// console.log("im in posts")
// var postsDiv = document.getElementById('posts-page')
// const url ='/index_API'

// fetch(url)
// .then(response => response.json())
// .then(data => {
 
//     console.log('data')
//     console.log(data)
//     data.forEach(post => {
//         let postDiv= document.createElement('div')
//         let html= `
//         <p>${post.message}</p>
//         <p>added at ${post.created_at}</p>
//         <p>added by ${post.username}</p>
//         `
//         postDiv.innerHTML = html
//         postsDiv.appendChild(postDiv)
//     })
// }
// )