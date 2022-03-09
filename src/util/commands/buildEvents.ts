import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "../buildBase/buildBase";
import { getZip, zipPackageElement } from "./package.helpers";
import { reduxEventsGenerators } from "./reduxEvents.helpers";

export const commands = (sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...reduxEventsGenerators(config),
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(`${config.name}-events`, zip))
}
