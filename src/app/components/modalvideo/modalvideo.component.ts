import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideofolioService } from '../../service/videofolio.service';
import { Videofolio } from '../../models/videofolio';

@Component({
  selector: 'app-modalvideo',
  templateUrl: './modalvideo.component.html',
  styleUrls: ['./modalvideo.component.css']
})
export class ModalvideoComponent implements OnInit {

  videofolios: Videofolio;
  error: string;
  editorContent: string;


  constructor(
    private videofolioService: VideofolioService, 
    private router: ActivatedRoute
    ) { }

  ngOnInit() {
    this.videofolioService.getVideofolios().subscribe(
      (data: Videofolio) => this.videofolios = data,
      error => this.error = error
    );
  }

  

}
