
export class ShadowDOM extends HTMLElement {
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Create a template for the shadow DOM
      const template = document.createElement('template');
      template.innerHTML = `
        <div class="shadow-element">
          <h1 class="count-status">0</h1>
          <button class="add-button">Add</button>
          <button class="substract-button">Substract</button>
        </div>
        <style>
          .shadow-element {
            font-family: Arial, sans-serif;
            text-align: center;
          }
          .add-button {
            padding: 10px 15px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
            width: 5rem;
          }
          .substract-button {
            padding: 10px 15px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
            width: 5rem;
          }
        </style>
      `;
  
      // Append the template to the shadow root
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      // Get references to elements within the shadow DOM
      const countStatus = shadowRoot.querySelector('.count-status');
      const addButton = shadowRoot.querySelector('.add-button');
      const bawasButton = shadowRoot.querySelector('.substract-button');
  
      // Add event listener to the button
      addButton.addEventListener('click', () => {
        countStatus.textContent = parseInt(countStatus.textContent) + 1;
      });
  
      bawasButton.addEventListener('click', () => {
        countStatus.textContent = parseInt(countStatus.textContent) - 1;
      })
  
  
    }
  }