export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Pachet servicii foto-video nunta',
    price: 799,
    description: 'Pachetul include servicii foto-video pentru nunta ta.',
  },
  {
    id: 2,
    name: 'Pachet Servicii foto-video botez',
    price: 699,
    description:
      'Pacheul include servicii foto-video pentru botezul copilului tau.',
  },
  {
    id: 3,
    name: 'Pachet servicii foto-video evenimente',
    price: 399,
    description:
      'Pachetul include servicii foto-video pentru evenimentele tale.',
  },
];
