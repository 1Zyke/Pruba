import { Component, ErrorHandler } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Tabla de Empleados';
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  fecha_naci: string = '';
  celular: number = 0;
  correo: string = '';

  employees= [
    {'cedula':'626-2030624-3'},
    {'nombre':'Lorenzo Hugo',},
    {'apellido':'Nunez Franco'},
    {'fecha_naci': '13/03/2003'},
    {'celular': 8297421419},
    {'correo':'cosas3@gmail.com'}
  ];

  

  

  model:any={}
  model2:any={}
  msg:string='';
  hideUpdate:boolean=true;

  // Añadimos nuevo empleado
  addEmplyee():void{
    this.employees.push(this.model);
    this.msg="Campo agregado";
  }

  // Borramos un empleado, preguntando si está seguro de borrarlo
  removeEmployee(i:any):void{
    let answer = confirm('¿Estas seguro de eliminar el empleado?')
    console.log(answer)
    if(answer){
      this.employees.splice(i,1);
    }
    this.msg="Campo eliminado";
  }

  myValue=0;
  // al clicar en editar, se nos muestra el formulario con los datos a modificar
  editEmployee(i:any):void{
    this.model2.cedula=this.employees[i].cedula;
    this.model2.nombre=this.employees[i].nombre;
    this.model2.apellido=this.employees[i].apellido;
    this.model2.fecha_naci=this.employees[i].fecha_naci;
    this.model2.celular=this.employees[i].celular;
    this.model2.correo=this.employees[i].correo;
    this.myValue=i;
    this.hideUpdate=false;
  }

  // Al encontrar el empleado, se modifica y se vuelve a ocultar el formulario
  updateEmplyee():void{
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if(i==j){
        this.employees[i] = this.model2;
        this.model2={}
        this.msg="Campo actualizado";
        this.hideUpdate=true;
      }
    
    }
    
  
    
  }
  // Ventana de mensaje
  closeAlert(){
    this.msg='';
  }
}
