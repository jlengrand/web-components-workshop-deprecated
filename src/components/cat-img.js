class CatImgElement extends HTMLElement {
        static get observedAttributes() {return ['imgtype', 'xsize', 'ysize']; }

        constructor(){
            super();
            
            this.imgtype = 'cats';
            this.xsize = '400';
            this.ysize = '200';
        }    
    
        connectedCallback(){
            this.render();
        }
    
        disconnectedCallback(){
        }
    
        attributeChangedCallback(attributeName, oldValue, newValue, namespace){
                this.render();                  
        }    

        render(){
            console.log(`rendering with ${this.imgtype} ${this.xsize} ${this.ysize}`);
            this.innerHTML = `
            <h1>Here comes an image</h1>
            <img src="http://lorempixel.com/${this.xsize}/${this.ysize}/${this.imgtype}"</img>`;
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

        set xsize(xSize){
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
    