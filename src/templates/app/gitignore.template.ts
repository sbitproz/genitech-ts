import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
# compiled output
/dist
/tmp
/out-tsc

# dependencies
/node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

*.zip
*.txt
  `

  return {
    template: translate(template,config),
    title: `Git Ignore builder`,
    fileName: `.gitignore`,
  };
};

const GeneratorIgnore: Generator = {
  generate,
};

export default GeneratorIgnore;
