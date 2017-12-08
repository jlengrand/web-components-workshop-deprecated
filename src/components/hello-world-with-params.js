class HelloWorldWithParamsElement extends HTMLElement {
    static get observedAttributes() {return ['name']; }
    
    constructor(){
        super()
        
        this.innerHTML = `<h1>Hello default!</h1>`;
    }    

    attributeChangedCallback(attributeName, oldValue, newValue, namespace){
        if(attributeName === "name"){
            console.log("Attribute name changed!");
            this.innerHTML = `<h1>Hello ${newValue} !</h1>`;            
        }
        else{
            console.log("Unknown attribute " + attributeName + "changed");
        }
    }    
}

    window.customElements.define(
                    'hello-world-with-params', 
                     HelloWorldWithParamsElement);
