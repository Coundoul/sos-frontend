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

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
  },
  {path:'about', component:AboutComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'topbar', component: TopbarComponent, outlet:'topbar'},
  {path: 'navbar', component: NavbarComponent, outlet:'navbar'},
  {path: 'footer', component: FooterComponent, outlet: 'footer'},
  {path: 'services/application', component: ApplicationComponent},
  {path: 'services/donnee', component: DonneeComponent},
  {path: 'services/securite', component: SecuriteComponent},
  {path: 'services/infographie', component: InfographieComponent},
  {path: 'services/reseaux', component: ReseauxComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
