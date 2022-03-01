import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import {
  GenerateReturn,
  GeneratorEntity,
} from "@interfaces/template.interface";

const addSeparator =
  (separator: string, blank: string) => (predicate: boolean) =>
    predicate ? "" : separator;

const addCommaSeparator = addSeparator(",", "");

export const mockGeneratorEntity =
  (Generator: GeneratorEntity) => (config: Config) => ({
    title: "Mock Data",
    fileName: `${MODULE.MOCK}/${config.name}mock.json`,
    template: `{ ${config.entities
      .map(
        (entity) =>
          `"${entity.variations.ref}": [${Generator.generate(config, entity)}]`
      )
      .join(",")}}
    }`,
  });

const MockGenerator = {
  generate: (_, entity: Schema) =>
    Array(10)
      .fill("")
      .map(() => {
        return (entity.fields || []).reduce(
          (acc, { name, type }, idx) =>
            `${acc} ${addCommaSeparator(idx === 0)} "${name}": "test"`,
          ``
        );
      }),
};

export const mockGenerators = (config: Config) => [
  //@ts-expect-error
  { func: mockGeneratorEntity(MockGenerator), params: { config } },
];
