export class HousesController {
    constructor() {
      console.log('HousesController loaded');
      this.drawHouses();
    }
  
    drawHouses() {
      const houses = appState.houses;
      let template = '';
      houses.forEach(house => template += house.getTemplate());
      document.getElementById('houses-list').innerHTML = template;
    }
  }
  