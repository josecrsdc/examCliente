import { Injectable } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas:Tarea[] = [
    {
    id:'1',
    nombre: 'Examen Cliente',
    estado: 'Pendiente'
    },
    {
    id:'2',
    nombre: 'Examen Servidor',
    estado: 'Pendiente'
    },
    {
    id:'3',
    nombre: 'Examen Interfaces',
    estado: 'Realizada'
    },
    {
    id:'4',
    nombre: 'Examen Despliegue',
    estado: 'Pendiente'
    }
    ]

  constructor() { }

    getTareas(){
      return this.tareas;
    }
    getTarea(id: string){
      return this.tareas.find(tarea => tarea.id == id);
    }
    endTarea(id: string){
      let pos = this.tareas.findIndex(tarea => tarea.id == id);
      this.tareas[pos].estado = 'Realizada';
    }
    getTotales(){
      let totRealizadas = this.tareas.filter(tarea => tarea.estado == 'Realizada').length;

      let totPendientes = this.tareas.filter(tarea => tarea.estado == 'Pendiente').length;


      var miObjeto = [
        {
        totRealizadas: totRealizadas,
        totPendientes: totPendientes
        }
      ];

      var myString = JSON.stringify(miObjeto);
      return myString;
    }


    filtrarTareas(estado: string){
      let tareasFilter = this.tareas.filter(tarea => tarea.estado == estado);
      console.log(tareasFilter);

    }


}
