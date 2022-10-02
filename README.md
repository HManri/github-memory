# GitHub Memory

## 🧭 Description

Memory game using random GitHub user's images as card images.

## 📜 Required software

- node v16.17.0
- npm v8.15.0

## 💻 Installation and useful scripts

> ## Install
>
> ```
> npm install
> ```
>
> &nbsp;

> ## Create _.env_ file with your GitHub personal access token
>
> **(inside root of the project)**
>
> ```
> touch .env
> ```
>
> Edit new file _.env_ and add your GitHub personal access token
> The variable will be loaded using Webpack as a local environment variable inside the project with the key **GITHUB_TOKEN** > &nbsp;
>
> See _https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token_ to get more information
> &nbsp;

> ## Start
>
> ```
> npm start
> ```
>
> &nbsp;

> ## Lint
>
> ```
> npm run lint
> ```
>
> &nbsp;

## 🔘 Next features to do

- Thanks to have a basic **Board** in a different component of **Match**, we can do different _Boards_ with different rules, allowing the player to play in differents modes.

## 💡 Relevant things

- As written in _Installation and useful scripts_, we need to create a GitHub personal access token in order to get the App running correctly.
- **Prettier** and **ESLint** is used into the project. With these packages, we can obtain automatically some coding rule styles and tips:
  - Automatic linter check on save and before commiting anything (using **pre-commit**).
  - Automatic code styling when using curly braces, semicolons, etc.
  - Defined tab width to use across the project.
- There is a **jsconfig.json** file to setup some JS configuration, like the base path and includes / excluded directories. Thanks to this file and some **ESLint** configuration we can use absolute imports, autocomplete imports and more.
- There is also a **jest.config.js** which configure the basics for the testing library Jest.

&nbsp;

- There is a _reset.css_ file with one of the most used reset.css used throught the Internet. With this file, we can assure that all the browser will display in the same way our app. The CSS is obtained from _http://meyerweb.com/eric/tools/css/reset/_
- As working with Styled Components, we have a GlobalStyles file in order to get the same **font-family**, **color for anchors**, and more throught all the application. Furthermore, there is also a specific theme which allow us to use some default values when styling our components and app, like the colors or the spacings.
- I'm only creating 2 breakpoints, **mobile** and **desktop**, in order to make it responsive. We can add more, it's only adding them into _device.js_ file and use them.

&nbsp;

- Regarding the tests:
  - It's true they are not the very first tests I'm doing, it's not something I got the opportunity to work in any professional environment.
  - I added as _data-testid_ I can. When testing end to end with **Cypress** we are going to need them to get the desired elements when moving around the DOM.
