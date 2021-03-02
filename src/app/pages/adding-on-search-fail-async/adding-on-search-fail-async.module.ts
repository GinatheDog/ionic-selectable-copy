import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from '../../components/ionic-selectable/ionic-selectable.module';
import { PipesModule } from '../../pipes';
import { AddingOnSearchFailAsyncPage } from './adding-on-search-fail-async.page';

const routes: Routes = [{
  path: '',
  component: AddingOnSearchFailAsyncPage
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddingOnSearchFailAsyncPage
  ]
})
export class AddingOnSearchFailAsyncPageModule { }
