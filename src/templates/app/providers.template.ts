import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { Generator } from "@interfaces/template.interface";
import { appRootLocation } from "@commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
import React from 'react';
import { ThemeProvider } from '@{{name}}/core-ui';
import { Provider } from 'react-redux';
import { store } from '@{{name}}/core-state'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
  `;

  return {
    template: translate(template, config),
    title: `App Providers builder`,
    fileName: `${appRootLocation(config)}Providers.tsx`,
  };
};

const Generator: Generator = {
  generate,
};

export default Generator;
