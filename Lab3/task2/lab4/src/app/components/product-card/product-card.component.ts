import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  shareWhatsApp() {
  const text = `Посмотри этот товар: ${this.product.link}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

shareTelegram() {
  const url =
    `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
    `&text=${encodeURIComponent(this.product.name)}`;
  window.open(url, '_blank');
}

}
