# React Custom Toolchain Demo

This is a demo of a custom toolchain for React projects.

## What is this?

The aim of this spike is to create a React SPA from scratch that mimics the functionality of [Create React App](https://create-react-app.dev/). The goal is to create a toolchain that is as easy to use as CRA, but with the flexibility to add and remove tools as needed.

For any React project, there are a few things that are required:

1. A package manager (yarn, npm, etc)
2. A bundler (webpack, rollup, etc)
3. A compiler (babel, typescript, etc) - technically this is a transpiler in the case of typescript and JSX

The rest is optional, but the configuration of this toolchain must support the following:

* A web server
* Separate development and production builds
* Hot reloading
* Code splitting
* Minification
* CSS and other assets such as images
* TypeScript
* Jest as a test runner
* Environment variables
* PostCSS
* Custom path aliases
* A public folder

## General project scaffolding

To keep the project simple and clean, I've used the following general tools that do not influence the 
toolchain, but the project as a whole. Tailwind is just here to test if PostCSS works.

**Project Scaffolding**
- [ESLint](https://eslint.org/) - Enforcement of coding rules
- [Prettier](https://prettier.io/) - Autoformatting code
- [Husky + Lint Staged](https://prettier.io/docs/en/precommit.html) - Precommit hooks for ESLint & Prettier
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework