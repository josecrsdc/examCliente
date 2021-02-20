import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FinalizarTareaComponent } from './components/finalizar-tarea/finalizar-tarea.component';
import { PanelTareasComponent } from './components/panel-tareas/panel-tareas.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasService } from './services/tareas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FinalizarTareaComponent,
    PanelTareasComponent,
    TareaComponent,
    TareasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
