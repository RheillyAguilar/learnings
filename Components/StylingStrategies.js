
const style = document.createElement('style');
style.innerHTML = `
  button {
  background: #1E88E5;
  color: white;
  padding: 1rem 2rem;
  border: 0;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
}
    <button>Hello</button>
`
export class StylingStrategies extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'})

    this.shadowRoot.appendChild(style.cloneNode(true));
    const button = document.createElement('button');
    button.textContent = 'Hello'
    this.shadowRoot.appendChild(button)
    button.addEventListener('click', this.handleClick)


  }
  handleClick() {
    alert('Hello')
  }
};


export class Header extends HTMLElement {
    constructor() {
      super();
  
      // Create a template element for the header
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          header {
            margin-top: 10px;
            background: cyan;
            padding: 10px 10px;
            text-align: center;
            font-size: 30px;
            border-radius: 5px;
          }
        </style>
        <header>
          This is a Header
        </header>
      `;
  
      // Attach shadow DOM and append template content
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  // Define the Content class
  export class Content extends HTMLElement {
    constructor() {
      super();
  
      // Create a template element for the content
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          div {
            font-size: 30px;
            background: green;
            text-align: center;
            padding: 10px 10px;
          }
        </style>
        <div>
          <slot name="header">This is Content</slot>
        </div>
      `;
  
      // Attach shadow DOM and append template content
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  