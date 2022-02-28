import { Config, Schema } from "@interfaces/buildBase.interface";
import { prepareConfig } from "../buildBase/buildBase";
import { reduxGenerators } from './redux.helpers';
import { workspaceGenerators } from "./workspace.helpers";
import { getZip, zipPackageElement } from "./package.helpers";
import { dataGenerators } from "./data.helpers";

export const commands = (schema: Schema, sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...reduxGenerators(config),
    ...workspaceGenerators(config),
    ...dataGenerators(config),
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(config, zip))
}
