class CatImgElement extends HTMLElement {
        static get observedAttributes() {return ['imgtype', 'xsize', 'ysize']; }

        constructor(){
            super();
            
            this.setAttribute('imgtype', 'cats');
            this.setAttribute('xsize', '400');
            this.setAttribute('ysize', '200');

        }    
    
        connectedCallback(){
            this.render(this.imgtype, this.xsize, this.ysize);
        }
    
        disconnectedCallback(){
        }
    
        attributeChangedCallback(attributeName, oldValue, newValue, namespace){
                this.render(this.imgtype, this.xsize, this.ysize);                  
        }    

        render(imgType, xSize, ySize){
            console.log(`rendering with ${imgType} ${xSize} ${ySize}`);
            this.innerHTML = `
            <h1>Here comes an image</h1>
            <img src="http://lorempixel.com/${xSize}/${ySize}/${imgType}"</img>`;
        }

        get imgtype(){
            return this.getAttribute('imgtype');            
        }

        set imgtype(imgType){
            this.setAttribute('imgtype', imgType);
        }

        get xsize(){
            return this.getAttribute('xsize');            
        }

        set xsize(xsize){
            this.setAttribute('xsize', xSize);
        }

        get ysize(){
            return this.getAttribute('ysize');            
        }

        set ysize(ySize){
            this.setAttribute('ysize', ySize);
        }
    }
    
        window.customElements.define(
                        'cat-img', 
                         CatImgElement);
    