import { generateId } from "../utils/GenerateId.js"


export class House {
    /**
     * 
     * @param {{
     * year: string,
     * name: string,
     * bedrooms: number,
     * bathrooms: number,
     * sqft: number,
     * price: string,
     * description: string,
     * imgUrl: string
     * }} data 
     */


    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description || "No description given"
        this.imgUrl = data.imgUrl
        this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
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
                 <p class="text-center fw-bold">
                   $${this.price}
                 </p>
                 <p class="mb- text-center">
                   ${this.description}
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
                 <p class="mb-2">
                   ${this.FormattedTime}
                 </p>
                 <div class='row justify-content-end'>
                  <div class='col-3'>
                    <button onclick="app.HouseController.deleteHouseListing('${this.id}')" class="btn btn-danger w-100" title="Delete ${this.name}"><i class="mdi mdi-delete-empty"></i></button>
                  </div>
                 </div> 
               </div>
             </div>
           </div>
        `
      }

      get FormattedTime() {
        return this.listedAt.toLocaleDateString('en-us', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'})
      }
    
}