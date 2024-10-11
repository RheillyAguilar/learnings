
import { CustomElement } from "./Components/CustomElement.js";
import {ShadowDOM} from "./Components/ShadowDOM.js"
import { ElementShadow } from "./Components/ElementShadow.js";
import { TemplateSlot } from "./Components/TemplateSlot.js";
import { StylingStrategies, Header, Content } from "./Components/StylingStrategies.js";
import { MyInput } from "./Components/MyInput.js";

customElements.define('user-details', CustomElement);
customElements.define('counter-element', ShadowDOM)
customElements.define('custom-shadow', ElementShadow);
customElements.define('item-element', TemplateSlot)
window.customElements.define('hello-component', StylingStrategies)
window.customElements.define('header-template', Header);
window.customElements.define('content-template', Content);
customElements.define('my-input', MyInput);













// ::SLOT
customElements.define('person-details',
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById('person-template');
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({mode: 'open'});
        let style = document.createElement('style');
        style.textContent = 
        "div {border: 1px solid black; width: 15rem; border-radius: 10px; margin: 10px;} " +
        "h2 {margin-left: 10px;}" +
        "::slotted(*) {margin-left: 10px; font-weight: bold}"
  
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    }
  )
  
  
  