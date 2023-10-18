import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
