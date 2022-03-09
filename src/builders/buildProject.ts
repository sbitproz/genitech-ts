import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "./buildBase";
import { reduxGenerators } from '../commands/redux.helpers';
import { workspaceGenerators } from "../commands/workspace.helpers";
import { getZip, zipPackageElement } from "../commands/package.helpers";
import { dataGenerators } from "../commands/data.helpers";
import { mockGenerators } from "../commands/mock.helpers";
import { typeGenerators } from "../commands/type.helpers";

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
