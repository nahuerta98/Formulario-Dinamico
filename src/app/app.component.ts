import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formDevolucion: FormGroup;
  detalles: FormGroup;
  
  //GET
  get Productos(): FormArray {
    return this.formDevolucion.get('Productos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generarFormulario();
    this.agregarDetalles();
  }

  //Métodos

  generarFormulario() {
    this.formDevolucion = this.fb.group({
      Productos: this.fb.array([])
    });
  }

  agregarDetalles() {
    this.detalles = this.fb.group({
      producto: new FormControl(''),
      cantidad: new FormControl(''),
      motivo: new FormControl('')
    });

    this.Productos.push(this.detalles);


  }

  borrar(indice:number){
    this.Productos.removeAt(indice);
  }

}



















