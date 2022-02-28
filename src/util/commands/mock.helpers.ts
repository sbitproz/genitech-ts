import { MODULE } from "@config/module.constants";
import { Config, Schema } from "@interfaces/buildBase.interface";
import { GenerateReturn, GeneratorEntity } from "@interfaces/template.interface";

export const mockGeneratorEntity = (Generator: GeneratorEntity) => (config: Config) => ({
  title: 'Mock Data',
  fileName: `${MODULE.MOCK}/${config.name}mock.json`,
  template: config.entities
    .map((entity) => ({ entityName: entity.variations.ref, template: Generator.generate(config, entity) }))
    .reduce((templateOutput: string, { entityName, template }, idx) => {
      return `${templateOutput} ${idx === 0 ? '' : ','} ${entityName}: { ${JSON.stringify(template)} }`
    }, '')
  });

const MockGenerator: GeneratorEntity = {
  generate: (_, entity: Schema) => ({
    fileName: `${MODULE.MOCK}/${entity.variations.models}mock.json`,
    template: (() => {
      const template = Array(10).fill('').map(() => {
        return (entity.fields || []).reduce((acc, { name, type }) => ({ ...acc, [name]: 'test' }), {});
      })
      return JSON.stringify(template)
    })(),
    title: 'Mock Data'
  })
};

export const mockGenerators = (config: Config) => [
  { func: mockGeneratorEntity(MockGenerator), params: { config } },
]