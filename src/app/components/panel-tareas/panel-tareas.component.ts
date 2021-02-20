import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-panel-tareas',
  templateUrl: './panel-tareas.component.html',
  styleUrls: ['./panel-tareas.component.css']
})
export class PanelTareasComponent implements OnInit {

  tareas: Tarea[];

  constructor(
    private tareaService: TareasService
  ) { }

  ngOnInit(): void {
    this.tareas = this.tareaService.getTareas();
  }

}
