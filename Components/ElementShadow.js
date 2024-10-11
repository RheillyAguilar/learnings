

export class ElementShadow extends HTMLElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return [
        "img",
        "name",
        "gender",
        "age",
        "course",
      ];
    }
  
    // Getters and Setters
    get img() {
      return this.getAttribute('img');
    }
  
    get name() {
      return this.getAttribute('name');
    }
  
    get gender() {
      return this.getAttribute('gender');
    }
  
    get age() {
      return this.getAttribute('age');
    }
  
    get course() {
      return this.getAttribute('course');
    }
  
    set img(newImg) {
      this.setAttribute('img', newImg);
    }
  
    set name(newName) {
      this.setAttribute('name', newName);
    }
  
    set gender(newGender) {
      this.setAttribute('gender', newGender);
    }
  
    set age(newAge) {
      this.setAttribute('age', newAge);
    }
  
    set course(newCourse) {
      this.setAttribute('course', newCourse);
    }
  
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Container
      const container = document.createElement('div');
      container.setAttribute('class', 'container');
  
      // User Details Title
      const h3 = document.createElement('h3');
      h3.textContent = 'User Details';
  
      // Image Container
      const imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'image');
  
      // Image
      const image = document.createElement('img');
      image.src = this.img;
  
      // Append Image
      imageContainer.appendChild(image);
  
      // Details Container
      const details = document.createElement('div');
      details.setAttribute('class', 'details');
  
      // Name
      const name = document.createElement('p');
      name.innerHTML = `<strong>Name:</strong> ${this.name}`;
  
      // Gender
      const gender = document.createElement('p');
      gender.innerHTML = `<strong>Gender:</strong> ${this.gender}`;
  
      // Age
      const age = document.createElement('p');
      age.innerHTML = `<strong>Age:</strong> ${this.age}`;
  
      // Course
      this.courseElement = document.createElement('p');
      this.courseElement.innerHTML = `<strong>Course:</strong> ${this.course}`;
  
      // Append details
      details.appendChild(name);
      details.appendChild(gender);
      details.appendChild(age);
      details.appendChild(this.courseElement);
  
      // Create the enroll button
      const enrollButton = document.createElement('enroll-button');
      enrollButton.addEventListener('enroll', () => this.handleEnroll());
      enrollButton.addEventListener('not enroll', () => this.handleNot());
  
      // Style
      const style = document.createElement('style');
      style.textContent = `
        .container {
          border-radius: 5px;
          border: 1px solid black;
          padding: 10px;
          display: inline-block;
          margin: 0 0 0 auto;
          width: 250px;
          color: black;
        }
        h3 {
          text-align: center;
        }
        .image {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }
        .image img {
          height: 100px;
          width: 100px;
        }
        .details {
          margin-left: 30px;
          margin-top: 15px;
        }
      `;
  
      // Append elements to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(container);
      container.appendChild(h3);
      container.appendChild(imageContainer);
      container.appendChild(details);
      container.appendChild(enrollButton);
    }
  
  
    // handle enroll button
    handleEnroll() {
      const updatedCourse = `${this.course} (Enrolled)`;
      this.courseElement.innerHTML = `<strong>Course:</strong> ${updatedCourse}`;
    }
  
  
    // Handle the not enroll button
    handleNot() {
      const updatedCourse = `${this.course} (Not Enrolled)`;
      this.courseElement.innerHTML = `<strong>Course:</strong> ${updatedCourse}`
    }
  
  }
  
 export class EnrollButton extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div>
          <button id="enrollBTN">Enroll</button>
          <button id="notBTN">Not Enroll</button>
        </div>
        <style>
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
          }
          button {
            width: max-content;
            padding: 7px;
            cursor: pointer;
            border: none;
            padding: 10px 15px;
          }
          #enrollBTN {
            background: green;
            color: white;
          }
          #notBTN {
            background: red;
            color: white;
          }
        </style>
      `;
  
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
  
      // Add event listener for enroll button
      this.shadowRoot.getElementById('enrollBTN').addEventListener('click', () => {
        this.dispatchEvent(new Event('enroll', { bubbles: true }));
      });
  
      // add event listerner for not enroll button
      this.shadowRoot.getElementById('notBTN').addEventListener('click', () => {
        this.dispatchEvent(new Event('not enroll', {bubbles: true}))
      })
  
  
    }
  }
  customElements.define('enroll-button', EnrollButton);