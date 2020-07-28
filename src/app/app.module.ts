import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// editor
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// pipe
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import {KeysPipe} from './pipes/keys.pipe';


// servicios
// import { InformacionService } from './service/informacion.service';

// componentes

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalvideoComponent } from './components/modalvideo/modalvideo.component';

// pages
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SolucioneswebComponent } from './pages/solucionesweb/solucionesweb.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioWebComponent } from './pages/portafolio-web/portafolio-web.component';
import { PortafolioGraficoComponent } from './pages/portafolio-grafico/portafolio-grafico.component';
import { PortafolioVideoComponent } from './pages/portafolio-video/portafolio-video.component';
import { ModalgraficoComponent } from './components/modalgrafico/modalgrafico.component';
import { ModalwebComponent } from './components/modalweb/modalweb.component';

import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';

import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    SolucioneswebComponent,
    AcercadeComponent,
    HomeComponent,
    ContactFormComponent,
    MenuComponent,
    SliderComponent,
    PortafolioWebComponent,
    PortafolioGraficoComponent,
    PortafolioVideoComponent,
    EscapeHtmlPipe,
    KeysPipe,
    ModalvideoComponent,
    ModalgraficoComponent,
    ModalwebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
