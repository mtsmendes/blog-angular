import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: '', component: HComponent },
  { path: 'content:/id', component: ContentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
