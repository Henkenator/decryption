/**
 * Created by Henke on 2017-01-21.
 */

import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonoAlphabeticComponent} from "./mono-alphabetic/mono-alphabetic.component";
import {CaesarComponent} from "./caesar/caesar.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'monoAlphabetic', component: MonoAlphabeticComponent},
  { path: 'caesar', component: CaesarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


