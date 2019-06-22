import { LightningElement,api } from 'lwc';
import pubsub from 'c/pubsub';
/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

export default class RegisterEvent extends LightningElement {
    @api name = '';
    @api namespace = '';
    @api timeout = 0;

    
    @api
    fire(data){
        if( this.name ){
            console.log(this.name)
            console.log(this.namespace)
            console.log(this.timeout)
            pubsub.fire(this.namespace +'__'+ this.name, data, this.timeout);
        }
        else{
            
            console.error('One PubSub: Name must be defined.');
        }
    }
}