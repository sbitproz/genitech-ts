import { Config, Schema } from "../../interfaces/buildBase.interface";
import { prepareConfig } from "../buildBase/buildBase";
import { slice } from './buildRedux';
import { workspace } from "./buildWorkspace";
import { getZip, zipPackageElement } from "./packageUtil";

export const commands = (schema: Schema, sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);
  console.log('config', config.entities);

  return [
    { func: workspace, params: { config } },
    // { func: packages, params: { config } },
    // { func: dependencies, params: { config } },
    // { func: libs, params: { config, suffix: suffixes.lib } },
    { func: slice, params: { config } },
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
