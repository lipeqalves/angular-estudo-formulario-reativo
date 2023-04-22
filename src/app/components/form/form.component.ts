import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  form = new FormGroup({
    tipoVeiculo: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    ano: new FormControl(''),
    valorVenda: new FormControl('',Validators.min(6))
  });

  onSubmit() {
    console.log(this.form.value);
  }

}
