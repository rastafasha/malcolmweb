import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';

import { HomeComponent } from './pages/home/home.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { SolucioneswebComponent } from './pages/solucionesweb/solucionesweb.component';
import { PortafolioWebComponent } from './pages/portafolio-web/portafolio-web.component';
import { PortafolioGraficoComponent } from './pages/portafolio-grafico/portafolio-grafico.component';
import { PortafolioVideoComponent } from './pages/portafolio-video/portafolio-video.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'acerca-de', component: AcercadeComponent},
  {path: 'soluciones-web', component: SolucioneswebComponent},
  {path: 'portafolio-diseno-web', component: PortafolioWebComponent},
  {path: 'portafolio-diseno-grafico', component: PortafolioGraficoComponent},
  {path: 'portafolio-audiovisual', component: PortafolioVideoComponent},
  {path: 'contacto', component: ContactFormComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
