import * as fs from 'fs';
import JSZip from "jszip";
import { GenerateReturn } from "@interfaces/template.interface";

export const getZip = () => new JSZip();

export const zipPackageElement = (config, zip) => (element: GenerateReturn) => {
    zip.file(element.fileName, element.template);
    zip.generateAsync({ type: 'arraybuffer' }).then((content) => {
        fs.writeFileSync(`./${config.name}.zip`, Buffer.from(content))
    });
}

export const moduleLocation = (moduleName: string) => `libs/${moduleName}/src/lib/`;