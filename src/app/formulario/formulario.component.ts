import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validar( frm: NgForm ){

    if(frm.form.value.id == null || frm.form.value.id == ""){
      document.querySelector('#mensajeNumero').innerHTML = 'El campo Número de identificación es obligatorio.';
    }

    if(frm.form.value.ciudad == null || frm.form.value.ciudad == ""){
      document.querySelector('#mensajeCiudad').innerHTML = 'El campo Ciudad Funcionario es obligatorio.';
    }

    if(frm.form.value.localidad == null || frm.form.value.localidad == ""){
      document.querySelector('#mensajeLocalidad').innerHTML = 'El campo Localidad donde vive es obligatorio.';
    }

    if(frm.form.value.barrio == null || frm.form.value.barrio == ""){
      document.querySelector('#mensajeBarrio').innerHTML = 'El campo Barrio es obligatorio.';
    }

    if(frm.form.value.direccion == null || frm.form.value.direccion == ""){
      document.querySelector('#mensajeDireccion').innerHTML = 'El campo Direccion es obligatorio.';
    }

    if( (frm.form.value.check == null || frm.form.value.check == "") || (frm.form.value.checkd == null || frm.form.value.checkd == "") ){
      document.querySelector('#mensajeOpcion').innerHTML = 'Debe seleccionar una opción valida.';
    }

  }

}
