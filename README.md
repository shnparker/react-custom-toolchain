# React Toolchain Demo

This repository is a showcase of a React toolchain that can be used to create a React SPA from scratch.
Ejecting from [Create React App](https://create-react-app.dev/) ends up being more work than starting from scratch,
so this project aims to provide a toolchain that is as easy to use as CRA, but with the flexibility to add and remove tools as needed.

## Table of Contents

- [Introduction](#introduction)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Running the project](#running-the-project)
- [Building for production](#building-for-production)
- [Testing](#testing)
- [Code quality](#code-quality)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Exclusions](#exclusions)

## Introduction

In a modern React project, there are three main tools that are required to build a project:

1. A package manager - to install dependencies from npm
2. A bundler - to bundle the code into a single file for the browser
3. A compiler - to compile the code into a format that the browser can understand

_Note: Technically speaking it is a transpiler in the case of TypeScript and TSX/JSX, but I'll use the term compiler for simplicity._

These are the basics of what is required to build a React project. However, there are many other tools that are required to build a project that is ready for production.

## Built With

These tools allowed for a great developer experience, and a production-ready project.

- A package manager - [Yarn](https://yarnpkg.com/)
- A compiler - [Babel](https://babeljs.io/)
- A code bundler - [Webpack](https://webpack.js.org/)
- A development server - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
- A test runner [Jest](https://jestjs.io/)
- A linter and quality checker - [ESLint](https://eslint.org/)
- A code formatter - [Prettier](https://prettier.io/)
- A CSS preprocessor - [PostCSS](https://postcss.org/)
- A CSS framework - [TailwindCSS](https://tailwindcss.com/)
- Type checking - [TypeScript](https://www.typescriptlang.org/)
- Environment variables - [dotenv](https://github.com/motdotla/dotenv)
- Pre-commit hooks - [Husky + lint-staged](https://prettier.io/docs/en/precommit.html)
- Dependency updates - [Renovate](https://renovatebot.com/)
- A CI/CD pipeline - [GitHub Actions](https://github.com/features/actions)

## Features

Some other features that are included in this project thanks to above tools are:

- Hot module reloading
- Code splitting & tree shaking
- Path aliases for imports (`@/utils`)
- Source maps and bundle analyzer
- Minification and optimization of assets (JS, CSS, images, fonts)
- Public folder that is copied to the build folder, unprocessed by webpack.
- Template parameters for index.html (`<%= env.TEST_VARIABLE %>`)
- Inlining of small assets (images, fonts) under 10kb
- Image conversion to webp (add `?as=webp` to the end of the image path processed by webpack)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installing

Clone the repository and install the dependencies:

```bash
git clone
cd react-toolchain-demo
yarn install
```

## Running the project

```bash
yarn dev
```

This will start the development server on port 3000.

## Building for production

```bash
yarn build
```

### Testing

To run the tests, run the following command:

```bash
yarn test
```

To learn more about testing, see the [Testing](#testing) section.

You can also run the tests in watch mode:

```bash
yarn test:watch
```

For a coverage report, run the following command:

```bash
yarn test:coverage
```

## Code quality

### Linting

To lint the code, run the following command to automatically fix most linting errors:

```bash
yarn lint
```

### Formatting

To format the code with prettier:

```bash
yarn format
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Shane Parker** - [shnparker](https://github.com/shnparker)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Create React App](https://create-react-app.dev/)

## Exclusions

The following features are not included in this demo project since they are not required for a basic React project:

- Progressive Web App (PWA) Support
- Offline Support with a Service Worker
- CSS Modules
- Sass / Less / Stylus
- CSS-in-JS
- Web Workers
- Server-side rendering
- i18n
