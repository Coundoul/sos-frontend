import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/layouts/about/about.component';
import { ServiceComponent } from 'src/layouts/service/service.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';
import { TopbarComponent } from 'src/layouts/topbar/topbar.component';
import { MainComponent } from 'src/layouts/main/main.component';
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
  {path: 'topbar', component: TopbarComponent, outlet:'topbar'},
  {path: 'navbar', component: NavbarComponent, outlet:'navbar'},
  {path: 'footer', component: FooterComponent, outlet: 'footer'},
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
