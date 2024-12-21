import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {ProfessionsComponent} from "./professions.component";
import {professionsRoutes} from "./professions-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {FuseCardModule} from "../../../@fuse/components/card";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
  declarations: [
    ProfessionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(professionsRoutes),
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    MatButtonToggleModule,
  ]
})
export class ProfessionsModule { }
