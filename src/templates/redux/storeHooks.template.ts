import { MODULE } from "@config/module.constants";
import { Config } from "@interfaces/buildBase.interface";
import { Generator } from "@interfaces/template.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";

const generate = (config: Config) => {
  const template = `
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
`
  return {
    template: translate(template, config),
    title: `Store hooks for app`,
    fileName: `${moduleLibLocation(MODULE.STATE)}store.hooks.ts`,
  };
};

const GeneratorStoreHooks: Generator = {
  generate,
};

export default GeneratorStoreHooks;