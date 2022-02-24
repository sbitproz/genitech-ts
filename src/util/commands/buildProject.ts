import { Config, Schema } from "@interfaces/buildBase.interface";
import { prepareConfig } from "../buildBase/buildBase";
import { reduxStore, reduxSelectors, reduxSlice } from './redux.helpers';
import { workspace } from "./workspace.helpers";
import { getZip, zipPackageElement } from "./package.helpers";
import { dataCore, dataEntity } from "./data.helpers";

export const commands = (schema: Schema, sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    { func: workspace, params: { config } },
    // { func: packages, params: { config } },
    // { func: dependencies, params: { config } },
    // { func: libs, params: { config, suffix: suffixes.lib } },
    { func: reduxSlice, params: { config } },
    { func: reduxStore, params: { config } },
    { func: reduxSelectors, params: { config } },
    { func: dataCore, params: { config } },
    { func: dataEntity, params: { config } },
    // { func: (config: Config) => , params: { config } },
    // { func: componentLayer, params: { config, suffix: suffixes.component } },
    // {
    //   func: containerComponent,
    //   params: {
    //     entity: config.detached?.home,
    //     suffix: suffixes.component,
    //   },
    // },
    // { func: jsonServer, params: {} },
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(config, zip))
}
