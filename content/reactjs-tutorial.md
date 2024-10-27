---
title: React js Tutorial
description: This is Reactjs tutorial and this is for learning Reactjs
slug: reactjs-tutorial
date: 10/27/2024
author: Dheeraj
image: /reactjs.png
---

# What is Front-End Development?
**Front-end development** refers to what the end user (also commonly referred to as the "client") can see. In the most basic forms, front-end development consists of HTML, CSS, and JavaScript.

As a developer, you will find that it is very easy for your front-end (website, web application, etc.) to become very complex and have a lot of different moving parts. It makes solving problems much more difficult when you have to go through a maze of code to find the issue.

Eventually, developers decided that there must be a better way to manage all of that code, so they created libraries that could make life easier. React was one of those libraries.

*React was created by Facebook and released to the public in May of 2013 and has been consistently maintained since then.*

## Why React?
**React** is one of the most popular JavaScript libraries for front-end web applications.

**Here are some of the advantages of React:**

**1.Speed :**
Interactive websites need to update the DOM (Document Object Model) each time a change happens. This process is generally resourceful and slow.
Compared to other libraries that manipulate the DOM, React uses a **Virtual DOM**, allowing to update only the parts of the website that have changed. This increases the speed of updates dramatically, as modern web applications may contain thousands of elements.

**2.Ease of Use :**
React allows developers to group related code together, thereby making building and maintaining large scale applications much less complex.

**3.Support :**
React has an amazingly large community and is open source. It is maintained by Facebook and the community.

## Adding React

React can be added to a website without any special tools and installations.

First, we need to add the React library as two **script** tags to the **head** of our HTML document:


```html

<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

Next, we need to add another script, to enable the use of **JSX**.
JSX is a syntax extension to JavaScript, and it is recommended to be used with React.

```html

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

```

*This approach of adding React to a website is only suitable for creating small demos.*

After adding the required script tags, we can start building our React app!
We add a container, that will be used to display something using React.

```html

<div id="container"></div>

```

*You can use any **id** for your container. It will be used by React to find the container and add content to it.*

```html

<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin>
        </script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
    </head>
    <body>
        
        <div id="container"></div>
        
        <script type="text/babel">
        ReactDOM.render(
          <h1>Hello, React!</h1>,
          document.getElementById('container')
        )
        </script>
    </body>
</html>
```

The code finds the **container** div, and adds the **h1** heading to it.

## Create React App

In the previous lesson we learned how to add React to a simple HTML document using the script tags.
However, real web apps have a different scale, contain multiple files, use 3rd party libraries, etc.

Facebook has created a handy tool called [Create React App](https://create-react-app.dev/)  that makes it easy to setup a React project with just a simple command!

To get started, make sure you have a recent version of [Node](https://nodejs.org/en/) installed on your machine.
Run the following commands in the Terminal to create and start a React app called **"my-app":**

```bash
npx create-react-app my-app
cd my-app
npm start
```

This will install all the required dependencies, configure and start the project on **localhost:3000**.

This is the default output of our project in the browser:

![Create React app](/create-react-app.png)

*Create React App allows us to focus on the code, rather than installing and configuring different tools.*

## Project Structure

Let's explore the structure of our project by opening it using a code editor.
We will be using **Visual Studio Code** in our example, but you are free to use any code editor.

![Project-structure1](/project-structure1.png)

The **public** folder contains files related to how the application will display on the client, the most important of those being **index.html**, which is the HTML template of our page:

![Project-structure2](/project-structure2.png)

The **src** folder contains all of the JavaScript, CSS, and image files that will be compiled into a bundle file and injected into **index.html**:

![Project-structure3](/project-structure3.png)

How is React compiled into a bundle file? It uses what is called a "file loader". In the case of Create React App, **Webpack** is used.
Webpack creates a "bundle" file containing the content of multiple files that need to be "bundled" together and it is all added together into a single file. Instead of making the HTML file go and find multiple files, which can slow down load times tremendously, it only has to find one file.

*Remember, all CSS and JS files need to be added to the src folder, otherwise webpack won't see them.*

While there are other files in the **src** folder that come with **Create React App** when it is generated, the two files below are the only critical files:

- **index.js :** This file is the entry point into our application. In our code, a method called **ReactDOM.render()** is used to find an element with **id="root"** in the HTML and add our React application inside of that element (similar to the previous lesson).

- **App.js :** This file is the main **component** that will be rendered to the DOM, which currently includes the React logo image and the default text, that we see in the output.

### Changing the Output

Now, when we know how to create and run a React project, let's change the default output to a simple Hello message.

To do that, we need to open **src/index.js** and change the code to the following:

```js

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);

```

This will output the message as a heading:

![Changing-output](/changing-output.png)

*A really cool feature of Create React App is **Fast Refresh**, which automatically reflects the changes made to the code in the browser.*

### StackBlitz

To make it easier to play around with React, we will be using **StackBlitz** as our online playground to enable changing and running real React code.

Here is the the same project on StackBlitz:

![StackBlitz](/stack-blitz.png)

[Try it on StackBlitz](https://stackblitz.com/edit/hello-react-example?file=index.js)

We have removed all the extra files, such as the logo images, to make the project structure simpler.
Now we have the following files:  
**index.html**: The HTML page template.  
**index.js**: The entry point of our app.  
**style.css**: the stylesheet for our project.  
**package.json**: holds various metadata relevant to the project, like dependencies.

*Tap Try It on StackBlitz and play around with the code!*