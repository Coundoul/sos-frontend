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
  {path: 'footer', component: FooterComponent, outlet: 'footer'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
