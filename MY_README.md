# React Testing

_Reference_

    Udemy course, Advanced React and Redux, Stephen Grider

_June 23, 2018_

Contents of create-react-app:

    1.  React
    2.  Webpack - links together JS files
    3.  Babel - turns ES2016/7 and JSX into ES5 compatible code
    4.  Jest - automated test runner

### Dependencies ###
Sec. 2, Lec. 7

Install the following redux dependencies:

    1.  redux (v. 4.0.0)
    2.  react-redux (v. 5.0.7)

```    
    $ npm install --save redux react-redux
```

### React and Redux Design ###
Sec. 2, Lec. 8

The app will contain three React components:

    1.  App - displays the children components
    2.  CommentBox - form for entering and submitting a comment
    3.  CommentList - displays all the comments submitted

![App Structure](images/AppStructure.png?raw=true "AppStructure")

The redux store will contain one property of state:

    1.  comments - an array of saved comments

One action will be used:

    2.  saveComment - adds a comment via the 'comments' reducer

![Redux Structure](images/ReduxStructure.png?raw=true "ReduxStructure")

### What Do We Test? ###
Sec. 2, Lec. 9

Consider this process when writing tests:

    1.  Look at each individual part of the application:
            - component
            - actions
            - reducers
    2.  Imagine telling friends, "Here's what this code does"
    3.  Write a test to verify that each part does what you expect

Example:
    1.  CommentList Component
        function - displays a list of comments on the screen

        test1 - verify that for every comment, we create exactly
        one element on the screen

    2.  CommentBox Component
        function - comment box displays a text area and submit button

        test1 - verify that component produces a comment box and button
        test2 - verify that when a user clicks the button, the text area is cleared

![Testing Design](images/ReduxStructure.png?raw=true "TestingDesign")
