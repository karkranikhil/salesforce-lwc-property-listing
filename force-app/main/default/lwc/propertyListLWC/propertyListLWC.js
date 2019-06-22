import { LightningElement, track } from 'lwc';
import {properties} from 'c/data'
export default class PropertyListLWC extends LightningElement {

    @track showProperties = true;
    @track filteredPropertyList=[]
    propertyList = properties
    @track selectedPropertyDetails
    connectedCallback(){
        this.filteredPropertyList = this.propertyList
    }

    filterHandler(event){
        let searchValue = event.target.value
        this.filteredPropertyList = this.propertyList.filter(function(item){
            return item.description && item.description.toUpperCase().includes(searchValue.toUpperCase())
        })
    }

    fireEvent(){
        this.template.querySelector('.first-event').fire('Fired Event from LWC.');
    }
    
    handlePropertyEvent(event){
        // eslint-disable-next-line radix
        let selectedProperty = event.detail.payload ? parseInt(event.detail.payload):""
        if(selectedProperty){
            this.showProperties = false
            let filteredPropertyDetails = this.propertyList.filter(item => item.id === selectedProperty)
            this.selectedPropertyDetails = filteredPropertyDetails
        }
    }
    gobackToListing(){
        this.showProperties = true
        this.filteredPropertyList = this.propertyList
    }

}