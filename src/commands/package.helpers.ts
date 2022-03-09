import * as fs from 'fs';
import JSZip from "jszip";
import { GenerateReturn } from "@interfaces/template.interface";

export const getZip = () => new JSZip();

export const zipPackageElement = (fileName: string, zip) => (element: GenerateReturn) => {
    zip.file(element.fileName, element.template);
    zip.generateAsync({ type: 'arraybuffer' }).then((content) => {
        fs.writeFileSync(`./${fileName}.zip`, Buffer.from(content))
    });
}

export const moduleLibLocation = (moduleName: string) => `${moduleRootLocation(moduleName)}lib/`;

export const moduleRootLocation = (moduleName: string) => `libs/${moduleName}/src/`;