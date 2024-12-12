import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";

export class HousesController {
    constructor() {
      console.log('HousesController loaded');
      houseService.loadHouse()
      this.drawHouses();
    }
  
    drawHouses() {
      console.log('drawing houses')
      const elmHouses = document.getElementById('houses-list')
      elmHouses.innerHTML = ''
      AppState.houses.forEach(house => elmHouses.innerHTML += house.houseCard )
    }

    createHouseListing() {
      event.preventDefault() // prevent the default form submission event
      const formHouseElm = event.target
      if (!formHouseElm){
        return
      }
      console.log('Creating a House', formHouseElm);
      console.log(formHouseElm.name.value);
      // NOTE collect all the data from the form!
      const formHouseData = {
        year: formHouseElm.year.value,
        name: formHouseElm.name.value,
        bedrooms: formHouseElm.bedrooms.value,
        bathrooms: formHouseElm.bathrooms.value,
        sqft: formHouseElm.sqft.value,
        price: formHouseElm.price.value,
        description: formHouseElm.description.value,
        imgUrl: formHouseElm.imgUrl.value
      }
      console.log(formHouseData); // check to see if it's all there
      houseService.createHouseListing(formHouseData)
      this.drawHouses()
    }
  
    deleteHouseListing(houseId) {
      console.log('🔥deleting!', houseId);
      const confirmed = confirm("Are you sure you want to delete this? this action cannot be REVERED. It will be gone forevah!")
      if (!confirmed) return
      const areYourSureSure = confirm("Are you absolutely Sure?")
      if (!areYourSureSure) return
      const typingChallange = prompt('Please type "Hell Yeah" to confirm this action')
      if (typingChallange != 'Hell Yeah') return
      console.log('App State House Before Delete', AppState.houses)
      houseService.deleteHouseListing(houseId)
      console.log('App State House After Delete', AppState.houses)
      this.drawHouses()
    }
  }
  