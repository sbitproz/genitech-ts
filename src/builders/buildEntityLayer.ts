import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "./buildBase";
import { reduxGenerators } from '../commands/redux/redux.helpers';
import { workspaceGenerators } from "../commands/core/workspace.helpers";
import { getZip, zipPackageElement } from "../commands/core/package.helpers";
import { dataGenerators } from "../commands/data/data.helpers";
import { typeGenerators } from "../commands/core/type.helpers";

export const commands = (sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...reduxGenerators(config),
    ...workspaceGenerators(config),
    ...dataGenerators(config),
    ...typeGenerators(config),
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(`${config.name}-entities`, zip))
}
