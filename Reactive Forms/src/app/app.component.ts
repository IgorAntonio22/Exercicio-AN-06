import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GhDialogComponent } from './gh-dialog/gh-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Projeto';

  personalData: FormGroup = this.fb.group({ 
  name1: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastname1: new FormControl('', [Validators.required, Validators.minLength(3)]),
  username1: new FormControl('', [Validators.required, Validators.minLength(3)]),
  cpf1: new FormControl('', [Validators.required, Validators.minLength(10)]),
  telefone1: new FormControl('', [Validators.required, Validators.minLength(10)]),
  endereco1: new FormControl('', [Validators.required, Validators.minLength(11)]),
  complemento1: new FormControl('', [Validators.required, Validators.minLength(3)]),
  senha1: new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmarsenha1: new FormControl('', [Validators.required, Validators.minLength(8)])
  },  
  {
    validators: this.MustMatch('senha1', 'confirmarsenha1')
  }
  )

  MustMatch(controlName: string, matchingControlName:string){
    return(formGroup:FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true})
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  constructor(
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  submit1(): void {
    console.log(`Name = ${this.personalData.controls['name1'].value}`)
    console.log(`Last Name = ${this.personalData.controls['lastname1'].value}`)
    console.log(`Username = ${this.personalData.controls['username1'].value}`)
    console.log(`Cpf = ${this.personalData.controls['cpf1'].value}`)
    console.log(`Telefone = ${this.personalData.controls['telefone1'].value}`)
    console.log(`Endereço = ${this.personalData.controls['endereco1'].value}`)
    console.log(`Complemento = ${this.personalData.controls['complemento1'].value}`)
    console.log(`Senha = ${this.personalData.controls['senha1'].value}`)
    console.log(`Confirmar a senha = ${this.personalData.controls['confirmarsenha1'].value}`)


    let ref = this.dialog.open(GhDialogComponent)

    ref.componentInstance.namedriven = this.personalData.controls['name1'].value
    ref.componentInstance.lastnamedriven = this.personalData.controls['lastname1'].value
    ref.componentInstance.usernamedriven = this.personalData.controls['username1'].value
    ref.componentInstance.cpfdriven = this.personalData.controls['cpf1'].value
    ref.componentInstance.telefonedriven = this.personalData.controls['telefone1'].value
    ref.componentInstance.enderecodriven = this.personalData.controls['endereco1'].value
    ref.componentInstance.complementodriven = this.personalData.controls['complemento1'].value

  }

  compararSenha(senha1: any, senha2: any): boolean {
    
    return !(senha1 === senha2)

  }

  data = {
    senha: '',
    confirmarsenha: '',
  };


}
