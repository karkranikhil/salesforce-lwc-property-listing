import { LightningElement, track, api } from 'lwc';

export default class RoomList extends LightningElement {
    @track showProperties = true;
    @api filteredPropertyList;

    viewMoreHandler(event){
        let propertyID = event.target.getAttribute("data-id")
        console.log(event.target.id)
        console.log(propertyID)
        this.fireEvent(propertyID)
    }
    fireEvent(propertyID){
        let fireEvent = this.template.querySelector('.propertyid-event')
        fireEvent.fire(propertyID);
    }
    

}