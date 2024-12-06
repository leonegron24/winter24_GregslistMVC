import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'Jaguar',
      model: 'XE',
      year: 2017,
      color: 'silver',
      imgUrl: 'https://images.unsplash.com/photo-1630045698264-a0e3396c2cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphZ3VhciUyMHhlfGVufDB8fDB8fHww'
    }),
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'red',
      imgUrl: 'https://images.unsplash.com/photo-1636915873177-a0c1a48d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
      mileage: 500
    }),
    new Car({
      make: 'Tonka',
      model: 'Truck',
      year: 1993,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1677372191857-f596af525205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9ua2ElMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
    }),
  ]


  houses = [
    new House({
      year: '2009',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 1000000,
      description:'Newly renovated mid-century modern home',
      imgUrl:'https://rew-feed-images.global.ssl.fastly.net/imls/_cloud_media/property/residentialincome/98862307-1-835976ecc96808a93ea194115ae6c537-m.jpg'
    }),
    new House({
      year: '2020',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 5000,
      price: 500000,
      description:'Even newr, very shiny looking home',
      imgUrl:'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: '1959',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 3000,
      price: 450000,
      description:'Old home, perfect for old people',
      imgUrl:'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: '1885',
      bedrooms: 4,
      bathrooms: 6,
      sqft: 2800,
      price: 45000,
      description:'Insanely old home, please buy it?',
      imgUrl:'https://images.unsplash.com/photo-1452626212852-811d58933cae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D'
    })
  ]
  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())