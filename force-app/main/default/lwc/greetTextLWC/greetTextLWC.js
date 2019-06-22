import { LightningElement, track } from 'lwc';


export default class GreetTextLWC extends LightningElement {

    @track textBoxValue=''
    @track greeting ='Nikhil karkra'
    txtBoxHandler(event){
        this.textBoxValue = event.target.value
    }
    greetUser(){
        //let txtInput = this.template.querySelector(".txtInput")
        this.greeting = this.textBoxValue
    }
}