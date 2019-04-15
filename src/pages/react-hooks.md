---
title: "React Hooks Explained"
date: "2019-01-01"
---

React Hooks is a new feature which is coming with React 16.7 and is adding missing pieces of functionality to React’s functional components:

* By using State Hooks it’s possible to add state to functional components
* By using Effect Hooks you can add code to functional components which is executed in response to component’s lifecycle events

In this tutorial we’ll explore both, State Hooks and Effect Hooks in a very practical way. By building real-world sample application from scratch you’ll be able to understand the concept and learn how you can apply React Hook in your application.

Here is the tutorial:

Getting Started
To get started first let’s set up a new React project from scratch using the create-react-app script. You do not need to install create-react-app on your system, you can directly execute the script by using the npx command:

`$ npx create-react-app my-react-hooks-app`

Executing the command in this way is creating a new project folder my-react-hooks-app and in this folder you’ll find the initial React project setup. Change into the newly created folder:

`$ cd my-react-hooks-app`

Because the React Hooks feature is not released yet, we need to make sure to at least install the version 16.7.0-alpha.2 of the packages react and react-dom.

`$ npm i react@next react-dom@next`

After having executed this command please check in the project’s package.json file that the correct version of both package is listed in the dependencies section. Once React version 16.7 is released this addtional installation step is no longer needed.

Because we’ll also be making using a libraray named Material-UI a last installation step needs to be completed:

`$ npm install @material-ui/core`

This libraray is containing React components that implement Google’s Material Design. We’ll be making use of those components to implement the user interface of the sample application of this tutorial.

Finally let’s check if the default project setup is working as expected by starting the development web server:

`$ npm start`

Once the server is started up successfully you should be able to see the following result in the browser when accessing URL http://localhost:3000:

With this default React application in place we’re now ready to add the State Hook.

Using State Hooks
Delete the default code which is available in App.js and start with adding the following import statement on top:

import React, { useState } from 'react';
In order to be able to make use of the new State Hook feature we need to import useState from the react package. Next add the following import statements as well:

```
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
```

Those import statement will give us access to material design components of the Material-UI library.

Next let’s add App compoment as a functional component by using the following lines of code: