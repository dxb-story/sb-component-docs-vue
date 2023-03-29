import type { StoryObj, Meta } from '@storybook/vue3';
import Component from '../components/reference-type-props/component.vue';

const meta = {
  component: Component,
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;
type Story = StoryObj<typeof meta>;
export default meta;
enum MyEnum {
  Small,
  Medium,
  Large,
}


export const ReferenceTypeProps: Story = {
  args: {
    stringRequiredWithTags: 'Foo',
    stringArray: ['Baz', 'Bar', 'Foo'],
    stringOrNumber: 'Foo',
    inlined: { foo: 'Foo' },
    nested: { nestedProp: 'Nested Prop' },
    nestedIntersection: { nestedProp: 'Nested Prop', additionalProp: 'Additional Prop' },
    arrayNestedPropsRequired: [{ foo: 'Foo' }],
    literalFromContext: ['Uncategorized', 'Display', 'Addons'],
    enumValue: MyEnum.Small,
    recursive: { recursive: { recursive: 'recursive' } },
  },
};
