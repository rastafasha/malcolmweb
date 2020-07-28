import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideofolioService } from '../../service/videofolio.service';
import { Videofolio } from '../../models/videofolio';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portafolio-video',
  templateUrl: './portafolio-video.component.html',
  styleUrls: ['./portafolio-video.component.css']
})
export class PortafolioVideoComponent implements OnInit {

  videofolios: Videofolio;
  error: string;
  editorContent: string;
  url: string;
  p: Number = 1;
  count: Number = 4;

  constructor(
    private videofolioService: VideofolioService, 
    private router: ActivatedRoute,
    private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videofolioService.getVideofolios().subscribe(
      (data: Videofolio) => this.videofolios = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}
}
