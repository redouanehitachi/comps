import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHomecomponentComponent } from './views-homecomponent/views-homecomponent.component';

const routes: Routes = [{ path: '', component: ViewsHomecomponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
