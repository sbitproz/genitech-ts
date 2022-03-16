import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "./buildBase";
import { getZip, zipPackageElement } from "../commands/package.helpers";
import { mockGenerators } from "@commands/mock.helpers";

export const commands = (sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...mockGenerators(config),    
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(`${config.name}-events`, zip))
}
