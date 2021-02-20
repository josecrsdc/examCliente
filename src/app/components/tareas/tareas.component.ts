import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/model/tarea.model';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];
  totRealizadas: number;
  totpendientes: number;
  estado: string = 'Todas';
  options: string[] = ['Todas', 'Pendiente', 'Realizada'];

  constructor(
    private tareasServ: TareasService,
    private myRoute: Router
  ) { }

  ngOnInit(): void {
    this.cargarTareas(this.estado);

    this.totales();

  }



  cargarTareas(estado: string){
    this.tareas = this.tareasServ.getTareas();
    if (estado == 'Realizada') {
      this.tareas = this.tareasServ.getTareas().filter(tarea => tarea.estado == 'Realizada');
    }
    if (estado == 'Pendiente') {
      this.tareas = this.tareasServ.getTareas().filter(tarea => tarea.estado == 'Pendiente');

    }
  }


  navAbrir(tarea: Tarea){
    this.myRoute.navigate(['tareas/' + tarea.id]);
  }

  totales() {
    var estadoTareas =JSON.parse( this.tareasServ.getTotales());
    this.totRealizadas = estadoTareas[0].totRealizadas;
    this.totpendientes = estadoTareas[0].totPendientes;
  }


  onChange(estado: string) {
    this.estado = estado;
    this.cargarTareas(this.estado);
  }
}
