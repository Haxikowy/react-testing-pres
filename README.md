# Testing in react featuring: Vite, Vitest, React Testing Library

This project is a simple `todo-app` made to practice testing. Project utilizes `vite`, `vitest` and `react-testing-library`.

## Table of contents
- [Project startup](#project-startup)
    - [Prerequisites](#prerequisites)
    - [Scripts to run](#scripts-to-run)
    - [Other scripts](#other-scripts)
- [Future goals](#future-goals)

## Project startup

### Prerequisites
We assume that you have installed:

- `node` v14+
- `npm` or `yarn`

### Scripts to run
If you want to start application simply run those commands in your terminal.

- install dependencies
```zsh
npm install
```

- run dev server
```zsh
npm run dev
```

### Other scripts

- build
```zsh
npm run build
```

- test
```zsh
npm run test
```

- preview (no config provided yet)
```zsh
npm run preview
```

## Future goals
1. Mutation tests using [stryker](https://stryker-mutator.io/)
2. Fake server using [nock](https://github.com/nock/nock#readme) or [MSW](https://mswjs.io/)
3. CI/CD using github actions