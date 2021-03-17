[![Build Status](https://travis-ci.com/Will-Helliwell/acebook-on-the-rails.svg?branch=master)](https://github.com/Will-Helliwell/acebook-on-the-rails)

# Essbok

A Scandinavian-Minimalist clone of Facebook allowing signed-up users to make and delete posts.

Build as part of a 5-member development team following Agile processes.

[Visit live deployment](https://acebook-on-the-rails.herokuapp.com/)

## Some Key Learnings
- This was my first introduction to Ruby-on-Rails. It showed how powerful web application frameworks can dramtically speed up the development process, yet at the same time contrict the developer into working a certain way (it is interesting to compare Rail's 'convention over configuration mantra to Node.js/Express's more freestyle approach).
- It was also my first introduction to React, and showed the benefits to user experience of having a dynamic single-page app, and the importance of planning to use such a technoloy from the start of a project if it's capability is beneficial. 
- I also subsequently learned that this way of using React (using class components) is more 'old-fashioned (vs using functional components and hooks). Using JSX in a subsequent project also highlighted how much easier it would have been to use JSX here.


## **Tech Summary**

| Technology    | Use                           |
| ------------- | ----------------------------- |
| Ruby-on-Rails          | Web application framework |
| React         | Frontend Framework            |
| Capybara       | Feature testing               |
| Rspec       | Unit testing                  |
| PostgreSQL       | Database                      |
| CSS/Bootstrap          | Styling                       |
| Travis        | CI/CD                         |
| Heroku        | Live deployment (work in progress)        |
| Rubocop        | Linting                       |
| Simplecov     | Test Coverage     |

## Specification

Completed:
- Users can sign-up
- Users can sign-in
- Users can post
- Posts show the user that posted them and they date they were posted
- Posts are displayed in reverse chronological order
- Users can delete posts

To continue:
- Users can like posts
- Users can only delete their own posts
- Each post will only show a preview of 50 words. When clicked, a pop-up will appear showing the full post

## Initial Mock-up

![mockup](https://github.com/Will-Helliwell/essbok/blob/master/acebook-mockup.png)

## Screenshots of App in Use

### Homepage
![homepage](https://github.com/Will-Helliwell/essbok/blob/master/essbok%20homepage.png)

### Posts Page
![homepage](https://github.com/Will-Helliwell/essbok/blob/master/essbok%20posts%20page.png)

## Links

- [Trello Board](https://trello.com/b/XiB46v42/acebook-on-the-rails)
- [Original project spec](https://github.com/makersacademy/course/tree/master/engineering_projects/rails)

## To Use

### From Heroku

[Visit live deployment](https://acebook-on-the-rails.herokuapp.com/)

### From your local machine

First, clone this repository. Then:

```bash
> bundle install
> bin/rails db:create
> bin/rails db:migrate

> bin/rails server # Start the server at localhost:3000
```

To run tests:
```bash
> rspec
```
