import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebdesingService } from '../../service/webdesing.service';
import { Webdesing } from '../../models/webdesing';

@Component({
  selector: 'app-portafolio-web',
  templateUrl: './portafolio-web.component.html',
  styleUrls: ['./portafolio-web.component.css']
})
export class PortafolioWebComponent implements OnInit {

  webdesings: Webdesing;
  error: string;
  editorContent: string;
  p: Number = 1;
  count: Number = 8;

  constructor(private webdesingService: WebdesingService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.webdesingService.getWebdesings().subscribe(
      (data: Webdesing) => this.webdesings = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

}
