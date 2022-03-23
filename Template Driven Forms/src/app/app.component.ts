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

  name: string = ''
  lastname: string = ''
  username: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  confirmarsenha: string = ''

  constructor(
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  submit(): void {
    console.log(`Name = ${this.name}`)
    console.log(`Last Name = ${this.lastname}`)
    console.log(`Username = ${this.username}`)
    console.log(`Cpf = ${this.cpf}`)
    console.log(`Telefone = ${this.telefone}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento = ${this.complemento}`)
    console.log(`Senha = ${this.senha}`)
    console.log(`Confirmar a senha = ${this.confirmarsenha}`)

    let ref = this.dialog.open(GhDialogComponent)

    ref.componentInstance.namedriven = this.name
    ref.componentInstance.lastnamedriven = this.lastname
    ref.componentInstance.usernamedriven = this.username
    ref.componentInstance.cpfdriven = this.cpf
    ref.componentInstance.telefonedriven = this.telefone
    ref.componentInstance.enderecodriven = this.endereco
    ref.componentInstance.complementodriven = this.complemento

  }

  compararSenha(senha1: any, senha2: any): boolean {
    
    return !(senha1 === senha2)

  }

  data = {
    senha: '',
    confirmarsenha: '',
  };
}
