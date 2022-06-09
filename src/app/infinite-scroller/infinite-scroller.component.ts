import { Component, OnInit } from '@angular/core';
import { PexelPhotoSearchService } from '../pexel-photo-search.service';

export interface Src {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Image {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: Src;
  liked: boolean;
  alt: string;
}



@Component({
  selector: 'app-infinite-scroller',
  templateUrl: './infinite-scroller.component.html',
  styleUrls: ['./infinite-scroller.component.css']
})
export class InfiniteScrollerComponent implements OnInit {
  array: Image[] = [];
  sum = 10;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  photos: any;
  start: number = 0;

  constructor(private pexelPhotoSearchService: PexelPhotoSearchService) {
  }

  ngOnInit() {
    this.getPhoto();
  }
  getPhoto() {
    this.pexelPhotoSearchService.getdata('bikes', this.sum).subscribe((response: any) => {

      console.log(response);
      this.photos = response.photos;
      this.addItems(this.start, this.sum);
    }, (error) => {
      console.log(error);
    })
  }

  addItems(index: number, sum: number) {
    for (let i = index; i < sum; ++i) {
      // @ts-ignore
      this.array.push(this.photos[i]);;
    }
  }

  onScrollDown() {
    // add another 20 items
    this.start = this.sum;
    this.sum += 20;
    this.getPhoto();
    this.direction = "down";
  }
}
