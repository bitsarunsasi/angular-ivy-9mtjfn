import { Component, VERSION } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // enableZoom: boolean = true;
  // previewImageSrc = 'pathToImage';
  // zoomImageSrc = 'pathToImage';

  // constructor(private ngxImgZoom: NgxImgZoomService) {
  //   this.ngxImgZoom.setZoomBreakPoints([
  //     { w: 100, h: 100 },
  //     { w: 150, h: 150 },
  //     { w: 200, h: 200 },
  //     { w: 250, h: 250 },
  //     { w: 300, h: 300 },
  //   ]);
  // }
}
