import { Config } from "@interfaces/buildBase.interface";
import { translate } from "builders/buildBase";
import { moduleLibLocation } from "commands/core/package.helpers";
import { MODULE } from "@config/core/module.constants";
import { Generator } from "@interfaces/template.interface";

const generate = (config: Config) => {
  const template = `
export const colors = {
  brandSecondaryOpacity: (opacity: number) => \`rgba(223,241,252,\${opacity})\`,
  blackOpacity: (opacity: number) => \`rgba(0,0,0,\${opacity})\`,
  brand: '#0090FF',
  brandDark: '#2E4757',
  white: '#ffffff',
  primary100: '#002749',
  accent100: '#0098FF',
  secondaryAccent100: '#E94B5B',
  base: '#FFFFFF',
  red110: '#DE4545',
  green110: '#a1d159',
  black100: '#000000',
  grey100: '#F6F6F8',
  grey110: '#D8D8DA',
  grey120: '#BBBBBC',
  grey130: '#9E9E9F',
  grey140: '#878787',
  grey150: '#636363',
  grey155: '#434343',
  grey160: '#464646',
  grey170: '#232323',
  primary30: '#DFE4E8',
  primary40: '#DAE0E5',
  primary90: '#244563',
  primary110: '#00213E',
  primary120: '#001B34',
  primary130: '#001629',
  primary140: '#00101F',
  accent110: '#0082DA',
  accent120: '#006CB6',
  purple110: '#454ade',
  blue100: '#F5FBFF',
  secondaryAccent90: '#EC6472',
  secondaryAccent10: '#C7404E',
  secondaryAccent110: '#8E2D37',
  hover: '#F1F3F4',
  pressed: '#E2E5E8',
  success: '#0AD98E',
  warning: '#F2CB00',
  error: '#E3001B',
  info: '#1E63B2',
  textOnLight: '#2C2A29',
  textOnDark: '#E9E9E9',
  hintTextOnDark: '#AAAAAA',
};

export type ColorTypes = typeof colors;

export type ColorValues = typeof colors[keyof typeof colors];

export default colors;
`
  return {
    template: translate(template,config),
    title: `Colors template`,
    fileName: `${moduleLibLocation(MODULE.UI)}theme/colors.ts`,
  };
};

const ColorsGenerator: Generator = {
  generate,
};

export default ColorsGenerator;