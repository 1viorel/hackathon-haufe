import { Component } from '@angular/core';

@Component({
  selector: 'app-scooter-list',
  templateUrl: './scooter-list.component.html',
  styleUrls: ['./scooter-list.component.css'],
})
export class ScooterListComponent {
  scooters = [
    {
      name: 'E-Scooter Model A',
      subtitle: 'Urban Commuter',
      image: 'https://lenoxx.com.au/cdn/shop/products/ES60_b_1200x1200.jpg?v=1629693130',
      description: "E-Scooter Model A is designed for the modern urban commuter. With its sleek and lightweight design, it's the perfect choice for navigating busy city streets.",
    },
    {
      name: 'E-Scooter Model B',
      subtitle: 'Off-Road Adventure',
      image: 'https://media.icdn.hu/product/GalleryMod/2021-02/680640/resp/1590355_oem_doc_green_e_scooter_esa_800_elektromos_roller_felnott.webp',
      description: "E-Scooter Model B is designed for those who value convenience and style. Its contemporary design, paired with a powerful electric motor, ensures a smooth and efficient ride.",
    },
    {
      name: 'E-Scooter Model C',
      subtitle: 'Eco-Friendly Commuter',
      image: 'https://solarscooters.co.uk/cdn/shop/products/wb1cyan.jpg?v=1673960114',
      description: "E-Scooter Model C is the perfect choice for urban mobility.",
    },
  ];

  selectedScooter: number | null = null; // Track the selected scooter by its index

  selectScooter(index: number): void {
    this.selectedScooter = index;
  }
}
