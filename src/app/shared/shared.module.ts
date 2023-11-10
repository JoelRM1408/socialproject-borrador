import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { IconModule } from './icons/icons.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconModule,
    MatIconModule
  ],
    exports:[
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
