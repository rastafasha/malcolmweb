import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraficoService } from '../../service/grafico.service';
import { Grafico } from '../../models/grafico';

@Component({
  selector: 'app-portafolio-grafico',
  templateUrl: './portafolio-grafico.component.html',
  styleUrls: ['./portafolio-grafico.component.css']
})
export class PortafolioGraficoComponent implements OnInit {

  graficos: Grafico;
  error: string;
  editorContent: string;
  p: Number = 1;
  count: Number = 8;

  constructor(private graficoService: GraficoService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.graficoService.getGraficos().subscribe(
      (data: Grafico) => this.graficos = data,
      error => this.error = error
    );
    window.scrollTo(0,0);
  }

}
