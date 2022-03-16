import { MODULE } from "@config/module.constants";
import { Config, FieldTypes, Schema } from "@interfaces/buildBase.interface";
import { GeneratorEntity } from "@interfaces/template.interface";
import { faker } from '@faker-js/faker';

const UNSET = '"unset"';

const addSeparator =
  (separator: string, blank: string) => (predicate: boolean) => 
    predicate ? "" : separator;

const generateFieldValue = (type: FieldTypes) => ({
  uuid: `"${faker.datatype.uuid()}"`,
  forename: `"${faker.name.firstName()}"`,
  lastname: `"${faker.name.lastName()}"`,
  title: `"${faker.name.title()}"`,
  email: `"${faker.internet.email()}"`,
  fullname: `"${faker.name.firstName()} ${faker.name.lastName()}"`,
  lorem: `"${faker.lorem.sentence()}"`,
  string: `"${faker.lorem.sentence()}"`,
  password: `"${faker.internet.password()}"`,
  boolean: `"${faker.datatype.boolean()}"`,
  date: `"${faker.datatype.datetime().getDate()}"`
})[type];

const addCommaSeparator = addSeparator(",", "");

const filterEntityWithFields = (entity: Schema) => entity.fields?.length;

const createEntityArrayOfRecords = (Generator: GeneratorEntity, config: Config) =>
  (entity: Schema) => `"${entity.variations.refs}": [${Generator.generate(config, entity)}]`;

export const mockGeneratorEntity =
  (Generator: GeneratorEntity) => (config: Config) => ({
    title: "Mock Data",
    fileName: `${MODULE.MOCK}/${config.name}-mock.json`,
    template: `{ ${config.entities
      .filter(filterEntityWithFields)
      .map(createEntityArrayOfRecords(Generator, config))
      .join(",")}}`,
  });

const MAX_SEED_COUNT = 30;

const MockGenerator = {
  generate: (_, entity: Schema) => {
    // create placeholder ids
    const ids = Array(MAX_SEED_COUNT).fill("").map(_ => faker.datatype.uuid());

    // choos between real fake data and id fields from pool of placeholder ids
    const getData = (fieldname: string, idx: number, type: FieldTypes) => {
      if (fieldname === 'id' && type === 'uuid' ) {
        return `"${ids[idx]}"`
      }
      if (fieldname.includes('Id') && type === 'uuid') {
        return `"${ids[Math.round(Math.random() * MAX_SEED_COUNT)]}"`
      }

      return generateFieldValue(type) || UNSET;
    }

    // generate data
    return Array(MAX_SEED_COUNT).fill("")
      .map(() => {
        return `{${(entity.fields || []).map(
          ({ fieldname: name, type }, idx) => `"${name}": ${getData(name, idx, type)}`
        ).join(',')}}`;
      })
    }
};

export const mockGenerators = (config: Config) => [
  //@ts-expect-error
  { func: mockGeneratorEntity(MockGenerator), params: { config } },
];

// PPL