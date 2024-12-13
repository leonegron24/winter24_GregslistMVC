import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { CarsController } from './controllers/CarsController.js';
import { HousesController } from './controllers/HouseController.js';
const USE_ROUTER = false

export function toggleView(viewId) {
  console.log(`Toggling view to: ${viewId}`);
  
  // Hide all sections and forms
  const sections = document.querySelectorAll('section, form');
  sections.forEach(section => section.classList.add('d-none'));

  // Show the selected section
  const activeSection = document.getElementById(viewId);
  if (activeSection) {
    activeSection.classList.remove('d-none');
  }

  // Special case: Show the car form only on the Cars page
  if (viewId === 'car-listings') {
    const carForm = document.getElementById('car-form');
    if (carForm) {
      carForm.classList.remove('d-none');
    }
  }

  // Special case: Show the house form only on the House page
  if (viewId === 'houses-list'){
    const houseForm = document.getElementById('house-form');
    if (houseForm){
      houseForm.classList.remove('d-none')
    }
  }
}



window.toggleView = toggleView


class App {

  // HomeController = new HomeController()
  CarsController = new CarsController()
  HouseController = new HousesController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
  
}

toggleView('car-listings')


const app = new App()
// @ts-ignore
window.app = app
