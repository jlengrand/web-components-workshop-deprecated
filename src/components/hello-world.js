class HelloWorldElement extends HTMLElement {

    constructor(){
        super()
        
        this.innerHTML = `<h1>Hello Meetup !</h1>`;
    }    

    connectedCallback(){
        console.log("I'm here!");
    }

    disconnectedCallback(){
        console.log("I'm gone!");
    }

}

    window.customElements.define(
                    'hello-world', 
                     HelloWorldElement);
