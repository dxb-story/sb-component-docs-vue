<script lang="ts" setup>
import { StringEmpty, StringRequired, StringUndefined } from './my-props';

defineProps({
  stringProp: {
    type: String,
    required: true
  },
  stringPropWithDefault: {
    type: String,
    default: 'BAR'
  },
  optionalString: {
    type: String
  },
  externalStringRequired: StringRequired,
  stringEmpty: StringEmpty,
  stringUndefined: StringUndefined,
  /**
   * The hello property.
   *
   * @since v1.0.0
   */
  stringWithDefaultAndTags: {
    type: String,
    default: 'Hello'
  },
  numberOrStringProp: {
    type: [Number, String],
    default: 42
  },
  arrayProp: {
    type: Array,
    default: () => [42, 43, 44]
  }
})
</script>
