import { withInstall } from '../../utils'
import _WjlButton from './WjlButton.vue'

const WjlButton = withInstall(_WjlButton)
export default WjlButton
export { WjlButton }

declare module 'vue' {
  interface GlobalComponents {
    WjlButton: typeof _WjlButton
  }
}
