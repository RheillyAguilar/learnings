

export class TemplateSlot extends HTMLElement {

    constructor() {
      super();
    };
  
    static get observedAttributes() {
      return [
        "image",
        "name",
        "price",
      ]
    }
  
    get image() {
      return this.getAttribute('image')
    }
  
    get name() {
      return this.getAttribute('name');
    }
  
    get price() {
      return this.getAttribute('price');
    }
  
    set image(newImage) {
      return this.setAttribute('image',newImage);
    }
  
    set name(newName) {
      return this.setAttribute('name',newName);
    }
  
    set price(newPrice) {
      return this.setAttribute('price',newPrice);
    }
  
    connectedCallback() {
      const shadow = this.attachShadow({mode: 'open'});
  
      // Container 
      const container = document.createElement('div');
      container.setAttribute('class', 'container');
  
      // Image Container
      const imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'image');
  
      // Image 
      const image = document.createElement('img');
      image.src = this.image;
  
      imageContainer.appendChild(image);
  
      // Details Container
      const details = document.createElement('div');
      details.setAttribute('class', 'details');
  
      // Wishlist Label
      const wishlistLabel = document.createElement('p');
      wishlistLabel.setAttribute('class', 'wishlist-label');
      wishlistLabel.style.display = 'none';
      wishlistLabel.textContent = 'Added to Wishlist';
  
      // Name
      const name = document.createElement('p');
      name.innerHTML = `<strong>Name: </strong> ${this.name}`;
  
      // Price
      const price = document.createElement('p');
      price.innerHTML = `<strong>Price: </strong> ${this.price}`;
  
      const wishlistButton = document.createElement('wishlist-button');
      wishlistButton.addEventListener('wishlist', () => this.handleWish(wishlistLabel));
  
      const style = document.createElement('style');
      style.textContent = `
        .container {
          border: 2px solid black;
          padding-bottom: 10px;
          width:15rem;
        }
        .details {
          text-align: start;
          margin-left: 20px;
        }
        .image img {
          width: 100%;
          height: 12rem;
        }
        .wishlist-label {
          color: red;
          font-weight: bold;
        }
      `;
  
      // Append Details
      details.appendChild(wishlistLabel); 
      details.appendChild(name);
      details.appendChild(price);
  
      // Append Tag
      shadow.appendChild(style);
      shadow.appendChild(container);
      container.appendChild(imageContainer);
      container.appendChild(details);
      container.appendChild(wishlistButton);
    }
  
    // Wishlist function
    handleWish(wishlistLabel) {
      wishlistLabel.style.display = 'block';
    }
  
  }
  
export  class WishList extends HTMLElement {
    constructor() {
      super();
      
      const template = document.createElement('template');
      template.innerHTML = `
        <div>
          <button id='wishlist-button'>Wishlist</button>
        </div>
        <style>
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          button {
            background: green;
            color: white;
            padding: 7px;
            border: none;
            cursor: pointer;
          }
        </style>
      `;
      const shadow = this.attachShadow({mode: 'open'});
      shadow.appendChild(template.content.cloneNode(true));
  
      this.shadowRoot.getElementById('wishlist-button').addEventListener('click', () => {
        this.dispatchEvent(new Event('wishlist', {bubbles: true})); 
      });
    }
  }
  
  customElements.define('wishlist-button', WishList);
  
  customElements.define(
    'item-slot',
    class extends HTMLElement {
      constructor() {
        super();
  
        const template = document.getElementById('item-slot-details');
        const templateContent = template.content;
  
        const shadow = this.attachShadow({ mode: 'open' });
  
        shadow.appendChild(templateContent.cloneNode(true));
  
      }
    }
  );