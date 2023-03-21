import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutOneComponent } from '../about-one/about-one.component';
import { AboutTwoComponent } from '../about-two/about-two.component';
import { AboutThreeComponent } from '../about-three/about-three.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: 'about-one', component: AboutOneComponent },
      { path: 'about-two', component: AboutTwoComponent },
      { path: 'about-three', component: AboutThreeComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AboutOneComponent,
    AboutTwoComponent,
    AboutThreeComponent,
    AboutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutModule {}
