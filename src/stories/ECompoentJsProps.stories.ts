import type { StoryObj, Meta } from '@storybook/vue3';
// import ComponentJSetup from './reference-type-props/component-js-setup.vue';
import Component from '../components/reference-type-props/component-js-setup.vue';



const meta = {
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;
type Story = StoryObj<typeof meta>;
export default meta;

export const ComponentJSProps: Story = {
  args: {
    stringProp: 'Foo',
  },
};
