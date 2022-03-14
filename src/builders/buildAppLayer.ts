import { Config } from "@interfaces/buildBase.interface";
import { prepareConfig } from "./buildBase";
import { getZip, zipPackageElement } from "../commands/package.helpers";
import { uiGenerators } from "@commands/ui.helpers";
import { appGenerators } from "@commands/app.helpers";
import { authGenerators } from "@commands/auth.helpers";
import { mockGenerators } from "@commands/mock.helpers";

export const commands = (sourceConfig: Config) => {
  const zip = getZip();
  const config = prepareConfig(sourceConfig);

  return [
    ...uiGenerators(config),
    ...appGenerators(config),
    ...mockGenerators(config),
    ...authGenerators(config)
  ].reduce(
    (acc, command) => {
      const result = command.func(command.params.config)
      return Array.isArray(result) ? [...acc, ...result] : [...acc, result]
    }, []
  ).forEach(zipPackageElement(`${config.name}-ui`, zip))
}
