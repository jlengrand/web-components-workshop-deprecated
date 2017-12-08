class CatImgElement extends HTMLElement {
    
        constructor(){
            super()
            
            this.innerHTML = `
            <h1>Here comes a kitty image</h1>
            <img src="http://lorempixel.com/400/200/cats"</img>`;
        }    
    
        connectedCallback(){
        }
    
        disconnectedCallback(){
        }
    
        attributeChangedCallback(attributeName, oldValue, newValue, namespace){
        }    
    }
    
        window.customElements.define(
                        'cat-img', 
                         CatImgElement);
    