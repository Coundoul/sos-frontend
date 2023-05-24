import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/layouts/about/about.component';
import { ServiceComponent } from 'src/layouts/service/service.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';
import { TopbarComponent } from 'src/layouts/topbar/topbar.component';
import { MainComponent } from 'src/layouts/main/main.component';
import { TeamStartComponent } from 'src/layouts/team-start/team-start.component';
import { ObjectifComponent } from 'src/layouts/objectif/objectif.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
  },
  {path:'about', component:AboutComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'equipes', component: TeamStartComponent},
  {path: 'objectifs', component: ObjectifComponent},
  {path: 'partenaires', component: TeamStartComponent},
  {path: 'topbar', component: TopbarComponent, outlet:'topbar'},
  {path: 'navbar', component: NavbarComponent, outlet:'navbar'},
  {path: 'footer', component: FooterComponent, outlet: 'footer'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
