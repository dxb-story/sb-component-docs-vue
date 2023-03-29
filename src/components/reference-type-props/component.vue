<script setup lang="ts">


interface MyNestedProps {
	/**
	 * nested prop documentation
	 */
	nestedProp: string;
}

interface MyIgnoredNestedProps {
	nestedProp: string;
}

interface MyNestedRecursiveProps {
	recursive: MyNestedRecursiveProps
}

enum MyEnum {
	Small,
	Medium,
	Large,
}

const categories = [
	'Electronics',
	'Cars',
	'Fashion',
	'Display',
	'Music',
	'Movies',
] as const;

type MyCategories = typeof categories[number];

interface MyProps {
	/**
   * required string 
   *
   * @default "rounded"
   * @since v1.0.0
   * */
	stringRequiredWithTags: string,
	/**
	 * optional number 
	 */
	optionalNumOptional?: number,
	/**
	 * option string array 
	 */
	stringArray?: string[],
	/**
	 * required union type
	 */
	stringOrNumber: string | number,
	/**
	 * optional union type
	 */
	stringOrNumberOptional?: string | number,
	/**
	 * required nested object
	 */
	nested: MyNestedProps,
	/**
	 * required nested object with intersection
	 */
	nestedIntersection: MyNestedProps & {
		/**
		 * required additional property
		 */
		additionalProp: string;
	},
	/**
	 * optional nested object
	 */
	nestedOptional?: MyNestedProps ,
	/**
	 * required array object
	 */
	arrayNestedPropsRequired: MyNestedProps[],
	/**
	 * optional array object
	 */
	arrayNestedPropsOptional?: MyNestedProps[],
	/**
	 * enum value
	 */
	enumValue: MyEnum,
	/**
	 * literal type alias that require context
	 */
	literalFromContext: MyCategories,
	inlined: { foo: string; },
	recursive: MyNestedRecursiveProps,

	
}



withDefaults(defineProps<MyProps>(), {
	stringOrNumber: 1,
	stringArray: () => ['foo', 'bar'],
});
</script>
