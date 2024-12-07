<div align="center">
  <br>
  <img alt="UCF BRASA Logo" src="/public/static/brasa-logo.png">
  <h1> 🇧🇷 BRASA Web 🇧🇷</h1>
  <strong>🧑‍💻 UCF BRASA's student-created Website 🧑‍💻 </strong>
</div>

## 📖 Prerequisites

### 1. Environment Variables file

Before running the app, you need to fill out the `.env` file. Please reach out to:

- [Matheus Seabra](https://discordapp.com/users/335558950948831233)

### 2. Install `pnpm`

You might be used to using `npm` to manage your Node dependencies, but we decided to use `pnpm` instead. [For many reasons](https://pnpm.io/benchmarks), it's a much better tool that is being chosen all over the industry. For more context about why it's better, we recommend you [check their docs](https://pnpm.io/motivation).

Don't worry, all the [`pnpm` commands are the exact same as `npm`'s](https://pnpm.io/pnpm-cli) 

Assuming you already have `npm` on your system, to get started run the following command:

```shell
npm install -g pnpm
```

### [Optional] VSC Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🖥️ Local development

### Installing

Run the following command to install all the project dependencies.

```shell
pnpm install
```

### Running

```shell
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🧰 Built With

- [TypeScript](https://www.typescriptlang.org) - JavaScript superset
- [React](https://react.dev) - Macro framework
- [Next.js](https://nextjs.org) - React meta-framework
- [TailwindCSS](https://tailwindcss.com) - CSS framework
- [NPM](https://www.npmjs.com) - Dependency and virtual environment manager
- [typescript-eslint](https://typescript-eslint.io) - Code Linter
- [Prettier](https://prettier.io) - Code Formatter

## Deployment

We are using [Vercel 🔺](https://vercel.com) to deploy our website.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
