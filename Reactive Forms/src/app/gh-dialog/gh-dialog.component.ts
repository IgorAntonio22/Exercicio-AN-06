import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  namedriven: string = ''
  lastnamedriven: string = ''
  usernamedriven: string = ''
  cpfdriven: string = ''
  telefonedriven: string = ''
  enderecodriven: string = ''
  complementodriven: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
