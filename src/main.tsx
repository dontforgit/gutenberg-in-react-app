import { render } from "@wordpress/element"
import App from './App'

import "./scss/style.scss"

(window as any).__editorAssets = {
  "styles": "",
  "scripts": ""
}

render(
  <App />,
  document.getElementById('root')
)