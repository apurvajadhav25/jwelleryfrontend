export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  static id: number;
   
    constructor(id=0, name='', description = '', price = 1, imageUrl = '../assets/angthi/2.jpg') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }
  }