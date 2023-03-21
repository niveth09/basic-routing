import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryOneComponent } from '../gallery-one/gallery-one.component';
import { GalleryTwoComponent } from '../gallery-two/gallery-two.component';
import { GalleryThreeComponent } from '../gallery-three/gallery-three.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      { path: 'gallery-one', component: GalleryOneComponent },
      { path: 'gallery-two', component: GalleryTwoComponent },
      { path: 'gallery-three', component: GalleryThreeComponent },
    ],
  },
];
@NgModule({
  declarations: [
    GalleryComponent,
    GalleryOneComponent,
    GalleryTwoComponent,
    GalleryThreeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GalleryModule {}
