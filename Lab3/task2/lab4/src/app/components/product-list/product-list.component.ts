import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  products: Product[] = [

    {
      id: 1,
      name: 'Apple iPhone 15',
      description: 'Мощный смартфон с отличной камерой.',
      price: 449990,
      rating: 4.8,
      image: 'https://picsum.photos/seed/iphone15/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Флагманский смартфон с AMOLED экраном.',
      price: 549990,
      rating: 4.9,
      image: 'https://picsum.photos/seed/s24/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 3,
      name: 'Sony PlayStation 5',
      description: 'Игровая приставка нового поколения.',
      price: 289990,
      rating: 4.9,
      image: 'https://picsum.photos/seed/ps5/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 4,
      name: 'Lenovo Laptop',
      description: 'Ноутбук для работы и учебы.',
      price: 399990,
      rating: 4.6,
      image: 'https://picsum.photos/seed/laptop/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 5,
      name: 'Apple Watch',
      description: 'Умные часы для спорта и здоровья.',
      price: 229990,
      rating: 4.8,
      image: 'https://picsum.photos/seed/watch/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 6,
      name: 'AirPods Pro',
      description: 'Беспроводные наушники с шумоподавлением.',
      price: 129990,
      rating: 4.9,
      image: 'https://picsum.photos/seed/airpods/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 7,
      name: 'Robot Vacuum',
      description: 'Робот-пылесос для уборки дома.',
      price: 92887,
      rating: 4.6,
      image: 'https://picsum.photos/seed/vacuum/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 8,
      name: 'Gaming Monitor',
      description: 'Монитор с высокой частотой обновления.',
      price: 129990,
      rating: 4.9,
      image: 'https://picsum.photos/seed/monitor/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 9,
      name: 'Air Fryer',
      description: 'Аэрогриль для здорового питания.',
      price: 59990,
      rating: 4.7,
      image: 'https://picsum.photos/seed/airfryer/600/600',
      link: 'https://kaspi.kz/',
    },

    {
      id: 10,
      name: 'Xiaomi Redmi',
      description: 'Доступный смартфон с хорошей батареей.',
      price: 128568,
      rating: 4.7,
      image: 'https://picsum.photos/seed/redmi/600/600',
      link: 'https://kaspi.kz/',
    },

  ];

}
