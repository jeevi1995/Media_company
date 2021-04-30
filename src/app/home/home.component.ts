import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Service/image.service';
import { Image } from "../Service/image.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  actualImage: string;
  changeBackgroundCounter = 0;
  constructor(private imagesService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages();
    this.actualImage = this.images[0].image;
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter].image;
    }, 5000);
  }


}
