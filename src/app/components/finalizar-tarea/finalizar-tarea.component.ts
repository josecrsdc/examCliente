import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/model/tarea.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css']
})
export class FinalizarTareaComponent implements OnInit {


  routeTarea: string;
  tarea: Tarea;

  constructor(
    private tareasServ: TareasService,
    private rutaActiva: ActivatedRoute,
    private myRoute: Router,
  ) { }

  ngOnInit(): void {
    this.routeTarea = this.rutaActiva.snapshot.params.tarea;
    this.tarea = this.tareasServ.getTarea(this.routeTarea);
  }

  finTarea() {
    this.tareasServ.endTarea(this.tarea.id);
    this.myRoute.navigate(['/tareas']);
  }

}
