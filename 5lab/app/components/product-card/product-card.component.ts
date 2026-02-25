import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  like() {
    this.product.likes++;
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }

  shareToTelegram() {
    const text = `Check out this product: ${this.product.name}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareToWhatsApp() {
    const text = `Check out this product: ${this.product.name} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}