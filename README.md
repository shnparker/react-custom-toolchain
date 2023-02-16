# React Custom Toolchain Demo

This is a demo of a custom toolchain for React projects.

## What is this?

The aim of this spike is to create a React SPA from scratch that mimics the core functionality of [Create React App](https://create-react-app.dev/).
The goal is to create a toolchain that is as easy to use as CRA, but with the flexibility to add and remove tools as needed.
CRA supports many features, I will not be implementing all of them, but rather a subset of them that are most commonly used.

For any React project to function, there are a few things required in the toolchain to get started:

1. A package manager (yarn, npm, etc)
2. A bundler (webpack, rollup, etc)
3. A compiler (babel, typescript, etc)

_Note: Technically speaking it is a transpiler in the case of TypeScript and TSX/JSX, but I'll use the term compiler for simplicity._

## What is in this demo project?

The toolchain is a set of tools that are used to build the project. The toolchain is responsible for compiling the code, bundling the code, and running the code. The toolchain is also responsible for running tests, linting, and formatting the code.
Further configuration is required to get the project to a point where it can be deployed to production and provide a good developer experience. This includes:

- ✅ A package manager (yarn)
- ✅ A compiler (babel)
- ✅ A code bundler (webpack)
- ✅ A development server (webpack-dev-server)
- ✅ A production build, optimized for performance and size (webpack production config)
- ✅ A test runner (jest)
- ✅ A code formatter, linter and quality checker (eslint/prettier)
- ✅ A CSS preprocessor (postcss)
- ✅ Hot reloading (webpack-dev-server)
- ✅ Code splitting (webpack + dynamic imports)
- ✅ Various types of asset handling (webpack plugins for images, fonts, etc)
- ✅ TypeScript support (babel + typescript)
- ✅ Environment variables (dotenv)
- ✅ Custom path aliases (webpack)
- ✅ Build time image optimization (s)
- ✅ A public folder for static assets (copy-webpack-plugin)

## What is excluded?

The following features are not included in this demo project since few people require it:

- ❌ Progressive Web App (PWA) Support
- ❌ Offline Support with a Service Worker
- ❌ CSS Modules
- ❌ Sass / Less / Stylus
- ❌ CSS-in-JS
- ❌ Web Workers

## General project scaffolding

To keep the project simple and clean, I've used the following general tools that do not influence the
toolchain, but the project as a whole. TailwindCSS is just here to test if PostCSS works since it depends on it.

- [ESLint](https://eslint.org/) - Enforcement of coding rules
- [Prettier](https://prettier.io/) - Autoformatting code
- [Husky + Lint Staged](https://prettier.io/docs/en/precommit.html) - Precommit hooks for ESLint & Prettier
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
