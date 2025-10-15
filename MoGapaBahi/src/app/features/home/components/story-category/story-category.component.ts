import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { CarouselModule } from 'ngx-owl-carousel-o'; // ✅ Owl carousel module

@Component({
  selector: 'app-story-category',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule], // ✅ Add RouterModule here
  templateUrl: './story-category.component.html',
  styleUrls: ['./story-category.component.scss']
})
export class StoryCategoryComponent implements OnInit {

  customOptions = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  };

  displayCards = [
    { title: 'Adventure', image: 'https://cdn.escapismmagazine.com/featured_image_x_large/5d5eb179acb33.jpeg' },
    { title: 'Travel', image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
    {
      title: 'Science', image: 'https://cdn.pixabay.com/photo/2023/06/03/17/15/ai-generated-8038116_1280.jpg'
    },
    { title: 'Nature', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' }
  ];

  constructor() { }

  ngOnInit(): void { }

  prevSlide() {
    // logic for prev button (if you are using @ViewChild)
  }

  nextSlide() {
    // logic for next button
  }
}
