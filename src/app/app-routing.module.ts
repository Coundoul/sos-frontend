import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/layouts/about/about.component';
import { ServiceComponent } from 'src/layouts/service/service.component';
import { ApplicationComponent } from 'src/layouts/service/application/application.component';
import { DonneeComponent } from 'src/layouts/service/donnee/donnee.component';
import { SecuriteComponent } from 'src/layouts/securite/securite.component';
import { InfographieComponent } from 'src/layouts/service/infographie/infographie.component';
import { ReseauxComponent } from 'src/layouts/service/reseaux/reseaux.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';
import { TopbarComponent } from 'src/layouts/topbar/topbar.component';
import { MainComponent } from 'src/layouts/main/main.component';
import { TeamStartComponent } from 'src/layouts/team-start/team-start.component';
import { ObjectifComponent } from 'src/layouts/objectif/objectif.component';
import { ContactComponent } from 'src/layouts/contact/contact.component';
import { DescriptionComponent } from 'src/layouts/description/description.component';
import { EntrepriseComponent } from 'src/layouts/entreprise/entreprise.component';
import { EvenementComponent } from 'src/layouts/evenement/evenement.component';
import { ConsultanceComponent } from 'src/layouts/offres/consultance/consultance.component';
import { DomaineHebergementComponent } from 'src/layouts/offres/domaine-hebergement/domaine-hebergement.component';
import { EquipementLogicielComponent } from 'src/layouts/offres/equipement-logiciel/equipement-logiciel.component';
import { FormationsComponent } from 'src/layouts/offres/formations/formations.component';
import { KasperskyComponent } from 'src/layouts/offres/kaspersky/kaspersky.component';
import { LeadershipComponent } from 'src/layouts/offres/leadership/leadership.component';
import { OfficeComponent } from 'src/layouts/offres/office/office.component';
import { OffresComponent } from 'src/layouts/offres/offres.component';
import { SinscrireComponent } from 'src/layouts/sinscrire/sinscrire.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
  },
  {path:'about', component:AboutComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'entreprise',component:EntrepriseComponent},
  {path:'description', component:DescriptionComponent},
  {path:'sinscrire', component:SinscrireComponent},
  {path:'contact', component:ContactComponent},
  {path:'offres', component:OffresComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'equipes', component: TeamStartComponent},
  {path: 'objectifs', component: ObjectifComponent},
  {path: 'partenaires', component: TeamStartComponent},
  {path: 'topbar', component: TopbarComponent, outlet:'topbar'},
  {path: 'navbar', component: NavbarComponent, outlet:'navbar'},
  {path: 'footer', component: FooterComponent, outlet: 'footer'},

  {path: 'services/application', component: ApplicationComponent},
  {path: 'services/donnee', component: DonneeComponent},
  {path: 'services/securite', component: SecuriteComponent},
  {path: 'services/infographie', component: InfographieComponent},
  {path: 'services/reseaux', component: ReseauxComponent},
  {path: 'offres/domaine-hebergement', component: DomaineHebergementComponent},
  {path: 'offres/office', component: OfficeComponent},
  {path: 'offres/kaspersky', component: KasperskyComponent},
  {path:'offres/formations', component: FormationsComponent},
  {path:'offres/equipement-logiciel', component: EquipementLogicielComponent},
  {path:'offres/consultance', component: ConsultanceComponent},
  {path:'offres/leaderShip', component: LeadershipComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
