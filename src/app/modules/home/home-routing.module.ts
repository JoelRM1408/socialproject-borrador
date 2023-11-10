import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from '../proyecto/pages/proyecto/proyecto.component';
import { HomeComponent } from './pages/home/home.component';
import { PruebaComponent } from '../proyecto/pages/components/prueba/prueba.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'convenio',
        loadChildren: () => import('../convenios/convenios.module').then(m => m.ConveniosModule)
      },
      {
        path: 'proyectos',
        loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule),

      },

      {
        path:'**',
        redirectTo:'welcome'
      },
  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
