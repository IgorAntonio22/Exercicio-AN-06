import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { GhDialogComponent } from '../gh-dialog/gh-dialog.component';


@Component({
  selector: 'app-gh-home',
  templateUrl: './gh-home.component.html',
  styleUrls: ['./gh-home.component.css']
})
export class GhHomeComponent implements OnInit {

  constructor(
  ) { }

    ngOnInit(): void {
  }


}
