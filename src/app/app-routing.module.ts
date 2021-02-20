import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalizarTareaComponent } from './components/finalizar-tarea/finalizar-tarea.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PanelTareasComponent } from './components/panel-tareas/panel-tareas.component';
import { TareasComponent } from './components/tareas/tareas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/:tarea', component: FinalizarTareaComponent },
  { path: 'panel', component: PanelTareasComponent },
  // { path: 'producto/:modelo', component: ProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
