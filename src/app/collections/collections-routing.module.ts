import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColletionsHomeComponent } from './colletions-home/colletions-home.component';
import { BiographyComponent } from '../collection/biography/biography.component';
import { CompaniesComponent } from '../collection/companies/companies.component';
import { PartnersComponent } from '../collection/partners/partners.component';
const routes: Routes = [
  {
    path: '',
    component: ColletionsHomeComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
