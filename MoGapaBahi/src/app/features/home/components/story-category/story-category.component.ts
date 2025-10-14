import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-story-category',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './story-category.component.html',
  styleUrls: ['./story-category.component.scss']
})
export class StoryCategoryComponent implements OnInit {

  // Access the carousel through the template reference variable instead
  @ViewChild('owlCarousel', { static: false }) owlCarousel: any;

  cards = [
    {
      title: 'Adventure', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Romance', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mystery', image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Fantasy', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Comedy', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
    },
  ];

  displayCards: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  };

  ngOnInit(): void {
    this.displayCards = [...this.cards];
  }

  nextSlide() {
    this.owlCarousel.next();
  }

  prevSlide() {
    this.owlCarousel.prev();
  }
}
