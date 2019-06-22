import { LightningElement, track } from 'lwc';

export default class BookingHeaderLWC extends LightningElement {
    @track heading='Salesforce Property Listing'
    @track data;

    handleEvent(event){
        //The data of event will be in the event.detail.payload
        this.data = event.detail.payload;
    }
}