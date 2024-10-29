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

## React ES6?
ES6 stands for ECMAScript 6.  
ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

### Why Should I Learn ES6?
React uses ES6, and you should be familiar with some of the new features like:  
- **Classes**  
- **Arrow Functions**  
- **Variables (let, const, var)** 
- **Array Methods like .map()**  
- **Destructuring**  
- **Modules**  
- **Ternary Operator**  
- **Spread Operator**  

### 1.Classes
A class is a type of function, but instead of using the keyword **function** to initiate it, we use the keyword **class**, and the properties are assigned inside a **constructor()** method.  
**Example** - A simple class constructor:
```js
class Car {
  constructor(name) {
    this.brand = name;
  }
}
```
*Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.*

Now you can create objects using the Car class:  

**Example** - Create an object called "mycar" based on the Car class:
```js
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");
```
**Note:** *The constructor function is called automatically when the object is initialized.*

#### Method in Classes
You can add your own methods in a class:  

**Example** - Create a method named "present":
```js
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

const mycar = new Car("Ford");
mycar.present();
```
As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).

#### Class Inheritance
To create a class inheritance, use the **extends** keyword.  
A class created with a class inheritance inherits all the methods from another class:  

**Example** - Create a class named "Model" which will inherit the methods from the "Car" class:
```js
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();
```
The **super()** method refers to the parent class.  
By calling the **super()** method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

### 2.Arrow Functions
Arrow functions allow us to write shorter function syntax:  

**Example** - Before arrow functions
```js
hello = function() {
  return "Hello World!";
}
```
**Example** - With arrow functions
```js
hello = () => {
  return "Hello World!";
}
```
It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the **return** keyword:

**Example** - Arrow Functions Return Value by Default:
```js
hello = () => "Hello World!";
```
**Note:** *This works only if the function has only one statement.*

If you have parameters, you pass them inside the parentheses:  

**Example** - Arrow Function With Parameters:
```js
hello = (val) => "Hello " + val;
```
In fact, if you have only one parameter, you can skip the parentheses as well:

**Example** - Arrow Function Without Parentheses:
```js 
hello = val => "Hello " + val;
```

#### What About this?
The handling of **this** is also different in arrow functions compared to regular functions.

In short, with arrow functions there is no binding of **this**. 

In regular functions the **this** keyword represented the object that called the function, which could be the window, the document, a button or whatever.  

With arrow functions, the **this** keyword always represents the object that defined the arrow function.  
Let us take a look at two examples to understand the difference.  

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.  

The first example uses a regular function, and the second example uses an arrow function.  

The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.  

**Example** - With a regular function, **this** represents the object that called the function:
```js
class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
``` 
**Example** - With an arrow function, **this** represents the Header object no matter who called the function:
```js
class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
``` 
Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.

### 3.Variables
Before ES6 there was only one way of defining your variables: with the **var** keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: **var**, **let**, and **const**.  

**Example var :**
```js
var x = 5.6;
```
If you use **var** outside of a function, it belongs to the global scope.

If you use **var** inside of a function, it belongs to that function.

If you use **var** inside of a block, i.e. a for loop, the variable is still available outside of that block.

**var** *has a function scope, not a block scope.*  

**Example let :**
```js
let x = 5.6;
```
**let** is the block scoped version of **var**, and is limited to the block (or expression) where it is defined.

If you use **let** inside of a block, i.e. a for loop, the variable is only available inside of that loop.

**let** has a block scope.  

**Example const :**
```js
const x = 5.6;
```
**const** is a variable that once it has been created, its value can never change.

**const** *has a block scope.*

The keyword **const** is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:  
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:  
- Change the elements of constant array
- Change the properties of constant object

### 4.Array Methods
There are many JavaScript array methods.

One of the most useful in React is the **.map()** array method.

The **.map()** method allows you to run a function on each item in the array, returning a new array as the result.

In React, **map()** can be used to generate lists.  

**Example** - Generate a list of items from an array:
```js
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
```
**Output :**
![Array methods](/array-methods.png)

### 5.Destructuring
To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.

#### Destructuring Arrays
Here is the old way of assigning array items to a variable and also using destructuring:
```js
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// with destructuring
//Here is the new way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

```
*When destructuring arrays, the order that variables are declared is important.*

If we only want the car and suv we can simply leave out the truck but keep the comma:
```js
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
```
**Example** - Destructuring comes in handy when a function returns an array:
```js
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

document.write("<p>Sum: " + add + "</p>");
document.write("<p>Difference " + subtract + "</p>");
document.write("<p>Product: " + multiply + "</p>");
document.write("<p>Quotient " + divide + "</p>");
```
**Output :**
![Destructuring-arrays1](/destructuring-arrays1.png)
#### Destructuring Objects
Here is the old way of using an object inside a function:  

**Example** - Before:
```js
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
```
Here is the new way of using an object inside a function:  

**Example** - With destructuring:
```js
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
```
**Output :**
![Destructuring-arrays2](/destructuring-arrays2.png)
*Notice that the object properties do not have to be declared in a specific order.*

We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

**Example**
```js
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
```
**Output :**
![Destructuring-arrays3](/destructuring-arrays3.png)

### 6.Spread Operator
The JavaScript spread operator **(...)** allows us to quickly copy all or part of an existing array or object into another array or object.
```js
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);
```
**Output :**  
1,2,3,4,5,6

The spread operator is often used in combination with destructuring.

**Example** - Assign the first and second items from **numbers** to variables and put the rest in an array:
```js
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

document.write("<p>" + one + "</p>");
document.write("<p>" + two + "</p>");
document.write("<p>" + rest + "</p>");
```
**Output :**  
1  
2  
3,4,5,6  

We can use the spread operator with objects too:  

**Example** - Combine these two objects:
```js
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
//Check the result object in the console:
console.log(myUpdatedVehicle);
```
**Output :**  
![Spread operator](/spread-operator.png)

*Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.*

### 7.Modules
JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the **import** and **export** statements.

#### Export
You can export a function or variable from any file.

Let us create a file named **person.js**, and fill it with the things we want to export.

There are two types of exports: Named and Default.

#### Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.

**Example** - In-line individually:  
🔴person.js
```js
export const name = "Jesse"
export const age = 40
```

All at once at the bottom:  
🔴person.js
```js
const name = "Jesse"
const age = 40

export { name, age }
```

#### Default Exports
Let us create another file, named **message.js**, and use it for demonstrating default export.

You can only have one default export in a file.

**Example**  
🔴message.js
```js
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
```

#### Import
You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.

**Example** - Import named exports from the file person.js:
```js
import { name, age } from "./person.js";
```

**Example** - Import a default export from the file message.js:
```js
import message from "./message.js";
```

### 8.Ternary Operator
The ternary operator is a simplified conditional operator like **if / else**.

Syntax: **condition ? <expression if true> : <expression if false>**

Here is an example using **if / else :**
```js
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}
```
Here is the same example using a **ternary operator**:
```js
authenticated ? renderApp() : renderLogin();
```