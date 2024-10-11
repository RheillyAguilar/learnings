
export class CustomElement extends HTMLElement {

    constructor() {
      super();
    };
  
    static get observedAttributes() {
      return [
        "img",
        "name",
        "gender",
        "age",
        "course",
      ];
    }
  
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
      const shadow = this.attachShadow({mode: 'open'});
  
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
      const course = document.createElement('p');
      course.innerHTML = `<strong>Course:</strong> ${this.course}`;
  
      // Append details
      details.appendChild(name);
      details.appendChild(gender);
      details.appendChild(age);
      details.appendChild(course);
  
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
  
        .container:hover {
          transform: scale(1.1);
          box-shadow: 5px 5px black;
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
    }
  }
  