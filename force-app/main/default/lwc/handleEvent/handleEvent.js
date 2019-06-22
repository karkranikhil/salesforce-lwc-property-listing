import { LightningElement,api } from 'lwc';
import pubsub from 'c/pubsub';
/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

export default class HandleEvent extends LightningElement {
    @api name = '';
    @api namespace = '';
    eventFiredCallback;

    /**Handle the event and send custom event to parent component.*/
    eventFired(data){
        this.dispatchEvent( new CustomEvent('action', {detail:{payload: data}} ) );  
    }

    connectedCallback(){
        this.eventFiredCallback = this.eventFired.bind(this);

        this.register();
    }

    /**Register the pubsub event**/
    @api
    register(){
        if( this.name ){
            pubsub.register(this.namespace +'__'+ this.name, this.eventFiredCallback );
        }
        else{
            console.error('PubSub: Name must be defined.');
        }
    }

    /**Unregister the pubsub event.**/
    @api
    unregister(){
        if( this.name ){
            pubsub.unregister(this.namespace +'__'+ this.name, this.eventFiredCallback );
        }
        else{
            console.error('One PubSub: Name must be defined.');
        }
    }
}