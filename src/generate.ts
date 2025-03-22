import * as ui from "antd"
import lodash from "lodash"
// @ts-ignore
import { Glob } from "bun";

function PascalCase(s: string) {
    const val = lodash.camelCase(s);
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const uiKeys: string[] = [];
Object.keys(ui).forEach(key => {
    if (
        ![
            "default",
            "theme",
            "unstableSetRender",
            "version",
            "Row",
            "message",
            "notification",
            "Col"
        ].includes(key)
    ) {
        uiKeys.push(key);
    }
})

// @ts-ignore
const dirPath = `${__dirname}/stories`
// @ts-ignore
const glob = new Glob("*.tsx");

for (const ui of uiKeys) {
    const folderAtnd = `/Users/vinensius.wibowo/Code/ant-design/${lodash.kebabCase(ui)}/demo`;

    try {
        const demos: string[] = []
        for (const file of glob.scanSync(folderAtnd, { onlyFiles: true })) {
            if (
                `${file}`.startsWith("_") ||
                file.includes("component-token") ||
                file.includes("debug") ||
                file.includes("drag-") ||
                file.includes("draggable")
            ) {
                continue
            }
            demos.push(file.replace(".tsx", ""))
            // @ts-ignore
            const fileContent = Bun.file(folderAtnd + "/" + file);
            // @ts-ignore
            await Bun.write(`/Users/vinensius.wibowo/Code/ui/src/stories/${ui}/${file}`, fileContent);
        }

        const template = `
import type { Meta, StoryObj } from '@storybook/react';
import { ${ui} } from 'antd';
import WrapperPreview from "../WrapperPreview";
${demos.map(d => {
            return `
import Demo${PascalCase(d)}Comp from "./${d}";
import sourceDemo${PascalCase(d)} from "./${d}?raw";
            `
        }).join("\n")}

const meta = {
  title: 'Base/${ui}',
  component: ${ui},
} satisfies Meta<typeof ${ui}>;

export default meta;
type Story = StoryObj<any>;

${demos.map(d => {
            return `
export const Demo_${lodash.camelCase(d)}: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemo${PascalCase(d)}}><Demo${PascalCase(d)}Comp {...p} /></WrapperPreview>
};`
        }).join("\n")}
`
        // @ts-ignore
        await Bun.write(`${dirPath}/${ui}/${ui}.stories.tsx`, template);

        //         // index.en-US.md
        //         // @ts-ignore
        //         const mdContent = await Bun.file(`/Users/vinensius.wibowo/Code/ant-design/${lodash.kebabCase(ui)}/index.en-US.md`).text();
        //         let newTxt = `
        // import { Canvas, Meta,Source } from '@storybook/blocks';
        // import * as ${ui}Stories from './${ui}.stories';

        // <Meta of={${ui}Stories} />

        //         `;
        //         let header = false;
        //         mdContent.split("\n").forEach((d: any) => {
        //             if (!header && d.trim() === "---") {
        //                 header = true;
        //                 return;
        //             }
        //             if (header && d.trim() === "---") {
        //                 header = false;
        //                 return;
        //             }
        //             if (d.trim().startsWith("<!--")) {
        //                 return;
        //             }

        //             if (d.trim().includes("<https://") || d.trim().includes(" http://")) {
        //                 return;
        //             }
        //             if (!header) {
        //                 newTxt += d + "\n";
        //             }
        //         })
        //         // @ts-ignore
        //         await Bun.write(`${dirPath}/${ui}/${ui}.mdx`, newTxt);
        // console.log(newTxt);

    } catch (error) {
        console.log(error)
    }
}