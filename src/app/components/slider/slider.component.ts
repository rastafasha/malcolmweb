import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SliderService } from '../../service/slider.service';
import { Slider } from '../../models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders: Slider;
  error: string;
  editorContent: string;

  constructor(
    private sliderService: SliderService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sliderService.getSliders().subscribe(
      (data: Slider) => this.sliders = data,
      error => this.error = error
    );
  }

}
