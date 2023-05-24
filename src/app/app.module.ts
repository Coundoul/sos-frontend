import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';
import { AboutComponent } from 'src/layouts/about/about.component';
import { ServiceComponent } from 'src/layouts/service/service.component';
import { MainComponent } from 'src/layouts/main/main.component';
import { TopbarComponent } from 'src/layouts/topbar/topbar.component';
import { ApplicationComponent } from 'src/layouts/service/application/application.component';
import { ReseauxComponent } from 'src/layouts/service/reseaux/reseaux.component';
import { DonneeComponent } from 'src/layouts/service/donnee/donnee.component';
import { InfographieComponent } from 'src/layouts/service/infographie/infographie.component';
import { SecuriteComponent } from 'src/layouts/securite/securite.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, AboutComponent, ServiceComponent, MainComponent, 
    TopbarComponent,
    ApplicationComponent,
    ReseauxComponent,
    DonneeComponent,
    InfographieComponent,
    SecuriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
