import { generateId } from "../utils/GenerateId.js"


export class House {
    // /**
    //  * 
    //  * @param {{
    //  * year: string,
    //  * name: string,
    //  * bedrooms: number,
    //  * bathrooms: number,
    //  * sqft: number,
    //  * price: number,
    //  * description: string,
    //  * imgUrl: string
    //  * }} data 
    //  */


    constructor(data) {
        this.id = data.id || generateId
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseCard() {
        return `
             <div class="col-md-4">
             <div class="card shadow-sm">
               <img class= house p-2"
                 src="${this.imgUrl}"
                 alt="">
               <div class="card-body">
                 <p class="text-center fw-bold">
                   ${this.year} ${this.name}
                 </p>
                 <p class="mb-0">
                   Bedrooms: ${this.bedrooms}
                 </p>
                 <p class="mb-0">
                   Bathrooms: ${this.bathrooms}
                 </p>
                 <p class="mb-0">
                   Sqft: ${this.sqft}
                 </p>
                 <p class="mb-0">
                   ${this.description}
                 </p>
                 <div>
                  <button onclick="app.CarsController.deleteCarListing('${this.id}')" class="btn btn-danger w-100" title="Delete ${this.make} ${this.model}"><i class="mdi mdi-delete-empty"></i></button>
                 </div>
               </div>
             </div>
           </div>
        `
      }
    
}