import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { OptionsComponent } from './pages/components/options/options.component';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormProyectoComponent } from './pages/components/form-proyecto/form-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PruebaComponent } from './pages/components/prueba/prueba.component';
import { StandComponent } from 'src/app/shared/components/stand/stand.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormulariodocIntComponent } from './pages/components/formulariodoc-int/formulariodoc-int.component';


@NgModule({
  declarations: [
    ProyectoComponent,
    OptionsComponent,
    FormProyectoComponent,
    PruebaComponent,
    FormulariodocIntComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    StandComponent,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoModule { }
