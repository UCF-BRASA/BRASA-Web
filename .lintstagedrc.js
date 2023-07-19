module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "tsc --noEmit",

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": (filenames) => [
    `eslint ${filenames.join(" ")} --fix`,
    `prettier --write ${filenames.join(" ")}`,
  ],

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
