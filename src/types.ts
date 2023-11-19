export namespace IEntity {
 export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
 }

 export interface Rating {
  rate: number;
  count: number;
 }

 export interface ICard {
  title: string;
  price: number;
  thumbnail: string;
  description: string;
 }
}