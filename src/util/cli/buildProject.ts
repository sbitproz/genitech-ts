import * as fs from 'fs';
import JSZip from "jszip";
import { MODULE } from "../../config/module.constants";
import { Config, Schema } from "../../interfaces/buildBase.interface";

var zip = new JSZip();

const slice = (config: Config, module: string) => {
  zip.file('newFile.txt', 'test');
  zip.generateAsync({type: 'blob'}).then((content) => {
    fs.writeFileSync('./package.zip', Buffer.from(new Uint8Array(content)))
    // fs.writeFileSync('test.wav', content)
  });
    // do we have a state module, if yes generate a slice command for 
}

export const commands = (schema: Schema, config: Config) => [
  // { func: workspace, params: { config } },
  // { func: packages, params: { config } },
  // { func: dependencies, params: { config } },
  // { func: libs, params: { config, suffix: suffixes.lib } },
  { func: slice, params: { config, module: MODULE.STATE } },
  // { func: componentLayer, params: { config, suffix: suffixes.component } },
  // {
  //   func: containerComponent,
  //   params: {
  //     entity: config.detached?.home,
  //     suffix: suffixes.component,
  //   },
  // },
  // { func: jsonServer, params: {} },
];