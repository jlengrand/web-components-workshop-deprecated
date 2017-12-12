let tmpl = document.querySelector('#hello-world-template');        

class HelloWorldTemplateElement extends HTMLElement {

    constructor(){
        super()
    }    

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));        
    }

    disconnectedCallback(){
    }
}

    window.customElements.define(
                    'hello-world-template', 
                     HelloWorldTemplateElement);
