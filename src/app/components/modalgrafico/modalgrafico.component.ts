import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraficoService } from '../../service/grafico.service';
import { Grafico } from '../../models/grafico';

@Component({
  selector: 'app-modalgrafico',
  templateUrl: './modalgrafico.component.html',
  styleUrls: ['./modalgrafico.component.css']
})
export class ModalgraficoComponent implements OnInit {

  graficos: Grafico;
  error: string;
  editorContent: string;

  constructor(private graficoService: GraficoService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.graficoService.getGraficos().subscribe(
      (data: Grafico) => this.graficos = data,
      error => this.error = error
    );
  }

}
