import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "../buildBase/buildBase";
import { reduxGenerators } from './redux.helpers';
import { workspaceGenerators } from "./workspace.helpers";
import { getZip, zipPackageElement } from "./package.helpers";
import { dataGenerators } from "./data.helpers";
import { mockGenerators } from "./mock.helpers";
import { typeGenerators } from "./type.helpers";

export const commands = (sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...reduxGenerators(config),
    ...workspaceGenerators(config),
    ...dataGenerators(config),
    ...mockGenerators(config),
    ...typeGenerators(config),
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(config.name, zip))
}
