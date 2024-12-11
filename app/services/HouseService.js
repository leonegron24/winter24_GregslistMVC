import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HouseService{

    createHouseListing(houseData) { // houseData is "RAW" data, it does not have it's "backing class"
        console.log('service creating house', houseData);
        const createdHouseCard = new House(houseData)
        AppState.houses.push(createdHouseCard)
        console.log('AppState houses', AppState.houses);
        this.saveHouses() // as i add homes, save to localStorage
      }
    
      deleteHouseListing(houseId) {
        console.log('service deleting', houseId);
        const houseToDelete = AppState.houses.find(house => house.id == houseId)
        console.log('🔥🏠', houseToDelete);
        // const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
        const houseIndexToRemove = AppState.houses.indexOf(houseToDelete)
        AppState.cars.splice(houseIndexToRemove, 1)
        this.saveHouses()
      }
    
    
      saveHouses() {
        console.log("saving changes to house list")
        let houseStringData = JSON.stringify(AppState.houses)
        localStorage.setItem('gregslist_houses', houseStringData)
      }
    
    
      // This is called from the constructor in the Controller
      loadHouse() {
        let houseStringData = localStorage.getItem('gregslist_houses')
        console.log('🧵💾', houseStringData);
        let houseData = JSON.parse(houseStringData)
        console.log('🏠🏠💾', houseData);
        if (!houseData) return // don't map over nothing, if the app has no storage
        // if (carsData == null) return // don't map over nothing, if the app has no storage
        const houses = houseData.map(houseData => new House(houseData))
        console.log('✨🏠🏠', houses);
        AppState.houses = houses // overwrite the data in the AppState, with the data from localStorage
      }
}
export const houseService = new HouseService()