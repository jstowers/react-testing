# React Testing

---

_Reference_
    Advanced React and Redux, Stephen Grider

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

### Component Design ###


Three React components:
    1.  App - displays the children components
    2.  CommentBox - form for entering and submitting a comment
    3.  CommentList - displays all the comments submitted

![App Structure](images/AppStructure.png?raw=true "AppStructure")



