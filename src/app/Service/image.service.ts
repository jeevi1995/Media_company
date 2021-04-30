import { Injectable } from '@angular/core';
import { Image } from "./image.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Image[] = [
    {
      imageDesciption: "Haruhi Suzumiya",
      image:
        "https://cdn.givingcompass.org/wp-content/uploads/2018/12/12143326/Tech-Companies-Have-Growing-Influence-in-Healthcare.jpg"
    },
    {
      imageDesciption: "Yuki Nagato",
      image:
        "http://www.tech-pro.com/wp-content/uploads/2012/12/140320-healthtechnology-stock.jpg"
    },
    {
      imageDesciption: "Fuyuno Haruaki",
      image:
        "https://www.proschoolonline.com/wp-content/uploads/2018/01/xTech-driven-India_-Careers-in-demand-in-2018_Lead-Pic.png.pagespeed.ic.dWRfbLTG6m.webp"
    }
  ];

  getImages() {
    return this.images.slice();
  }
}
