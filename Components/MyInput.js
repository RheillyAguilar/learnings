

export class MyInput extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'})


        const type = this.getAttribute('type') || "text";
        const placeholder = this.getAttribute('placeholder') || ''


        this.shadowRoot.innerHTML = 
        `
        <style>
            div {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            .error-message {
                color: red
            }
            input {
                padding: 10px;
                font-size: 15px;
                border-radius: 5px;
                border: 2px solid black;
                outline: none;
            }
        </style>
        <div>
        <input  type='${type}' placeholder='${placeholder}'>
        <p class="error-message"></p></div>
        `

        this.value = this.getAttribute('value');
        this.error = this.getAttribute('error');
    }

    set error(val) {
        const errorMessage = typeof val === "string" ? val.trim() : null;
        this.shadowRoot.querySelector("input").classList.toggle("has-error", Boolean(errorMessage)); 
        this.shadowRoot.querySelector('.error-message').textContent = errorMessage;       
    }

    get value() {
        return this.shadowRoot.querySelector("input").value;
    }

    set value(val) {
        this.shadowRoot.querySelector('input').value = val;
    }

}