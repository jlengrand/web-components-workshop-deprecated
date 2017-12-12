class HelloWorldShadyElement extends HTMLElement {

    constructor(){
        super()
    }    

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});     
        ShadyCSS.styleSubtree(this, {'--content-color' : 'red'});
        
        shadowRoot.innerHTML = `
        <style>
        div {
            background-color: white;
        }
        
        h1 {
            color: blue;
            margin-left: 60px;
        } 
        </style>

        <div>
            <h1>Hello Meetup shady!</h1>
            <p>I'm not visible to anyone :)</p>
            <p>And I even have my own styles!</p>
        </div>`;
        console.log("I'm here!");
    }

    disconnectedCallback(){
        console.log("I'm gone!");
    }
}

window.customElements.define(
                'hello-world-shady', 
                HelloWorldShadyElement);
