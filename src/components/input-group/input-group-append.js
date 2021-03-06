import Vue, { mergeData } from '../../vue'
import { NAME_INPUT_GROUP_APPEND } from '../../constants/components'
import { BInputGroupAddon, commonProps } from './input-group-addon'

// @vue/component
export const BInputGroupAppend = /*#__PURE__*/ Vue.extend({
  name: NAME_INPUT_GROUP_APPEND,
  functional: true,
  props: commonProps,
  render(h, { props, data, children }) {
    // Pass all our data down to child, and set `append` to `true`
    return h(
      BInputGroupAddon,
      mergeData(data, {
        props: { ...props, append: true }
      }),
      children
    )
  }
})
