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
import { EvenementComponent } from 'src/layouts/evenement/evenement.component';
import { EntrepriseComponent } from 'src/layouts/entreprise/entreprise.component';
import { DescriptionComponent } from 'src/layouts/description/description.component';
import { SinscrireComponent } from 'src/layouts/sinscrire/sinscrire.component';
import { ContactComponent } from 'src/layouts/contact/contact.component';
import { OffresComponent } from 'src/layouts/offres/offres.component';
import { DomaineHebergementComponent } from 'src/layouts/offres/domaine-hebergement/domaine-hebergement.component';
import { OfficeComponent } from 'src/layouts/offres/office/office.component';
import { KasperskyComponent } from 'src/layouts/offres/kaspersky/kaspersky.component';
import { FormationsComponent } from 'src/layouts/offres/formations/formations.component';
import { EquipementLogicielComponent } from 'src/layouts/offres/equipement-logiciel/equipement-logiciel.component';
import { ConsultanceComponent } from 'src/layouts/offres/consultance/consultance.component';
import { LeadershipComponent } from 'src/layouts/offres/leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, AboutComponent, ServiceComponent, MainComponent, 
    TopbarComponent,
    ApplicationComponent,
    ReseauxComponent,
    DonneeComponent,
    InfographieComponent,
    SecuriteComponent,
    EvenementComponent, 
    EntrepriseComponent, 
    DescriptionComponent, 
    SinscrireComponent, 
    ContactComponent,
     OffresComponent,
    DomaineHebergementComponent,
     OfficeComponent,
      KasperskyComponent, 
      FormationsComponent,
    EquipementLogicielComponent, 
    ConsultanceComponent, 
    LeadershipComponent
  ],






  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
