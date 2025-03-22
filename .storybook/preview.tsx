import React from 'react';
import type { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';


const preview: Preview = {
  parameters: {
    // controls: {
    //   disable: true,
    // },
    // actions: {
    //   disable: true,
    // },
    // docs: {
    //   codePanel: false,
    // },
    docs: {
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Primary />
      //     <Controls />
      //     <Stories />
      //   </>
      // ),
      // toc: true,
    },
  },
  addons: [],
  decorators: [
    (Story, aa) => {
      return (
        <Story />
      )
    },
  ],
};

export default preview;