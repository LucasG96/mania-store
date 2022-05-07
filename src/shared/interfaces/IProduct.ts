import IRate from './IRate';

interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRate;
}

export default IProduct;
