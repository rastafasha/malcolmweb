import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebdesingService } from '../../service/webdesing.service';
import { Webdesing } from '../../models/webdesing';

@Component({
  selector: 'app-modalweb',
  templateUrl: './modalweb.component.html',
  styleUrls: ['./modalweb.component.css']
})
export class ModalwebComponent implements OnInit {

  webdesings: Webdesing;
  error: string;
  editorContent: string;

  constructor(private webdesingService: WebdesingService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.webdesingService.getWebdesings().subscribe(
      (data: Webdesing) => this.webdesings = data,
      error => this.error = error
    );
  }

}
