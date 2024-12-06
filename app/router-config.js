import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HouseController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/houses', // Define the new route for Houses
    controllers: [HousesController], // Attach the HousesController
    view: 'app/views/HousesView.html' // Link to a separate HTML file for the Houses page
  }
]);