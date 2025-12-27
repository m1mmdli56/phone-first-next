import { NextResponse } from 'next/server';
import { IPhone } from '@/src/types/iphone';

const mockIPhones: IPhone[] = [
  {
    id: 1,
    model: 'iPhone 15 Pro',
    storage: ['128GB', '256GB', '512GB', '1TB'],
    color: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    price: 999,
    releaseYear: 2023,
    imgUrl: '/image/İphone15pro.jpg'
  },
  {
    id: 2,
    model: 'iPhone 15',
    storage: ['128GB', '256GB', '512GB'],
    color: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    price: 799,
    releaseYear: 2023,
    imgUrl: '/image/İphone15.jpg'
  },
  {
    id: 3,
    model: 'iPhone 14',
    storage: ['128GB', '256GB', '512GB'],
    color: ['Purple', 'Yellow', 'Green', 'Blue', 'Midnight', 'Starlight', '(PRODUCT)RED'],
    price: 699,
    releaseYear: 2022,
    imgUrl: '/image/iphone14.jpg'
  }
];

export async function GET() {
  return NextResponse.json(mockIPhones);
}