import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {psychologistsRoutes} from './psychologists-routing.module';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {PsychologistsComponent} from "./psychologists.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PsychologistsComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(psychologistsRoutes),
        MatIconModule,
    ]
})
export class PsychologistsModule { }
