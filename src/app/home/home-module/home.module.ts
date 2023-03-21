import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeOneComponent } from '../home-one/home-one.component';
import { HomeTwoComponent } from '../home-two/home-two.component';
import { HomeThreeComponent } from '../home-three/home-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home-one', component: HomeOneComponent },
      { path: 'home-two', component: HomeTwoComponent },
      { path: 'home-three', component: HomeThreeComponent },
    ],
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
