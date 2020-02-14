import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../services/carte.service';
import { Carte } from '../../models/carte.model';
import { NbDialogService } from '@nebular/theme';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'ngx-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  ngOnInit() {
    this.carteService.getAll().subscribe(data => {
      this.data = data as Carte[];
    }, err => console.log(err))
  }
  constructor(private carteService: CarteService,private dialogService: NbDialogService) {

  }

  onDeleteConfirm(index): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.data.splice(index, 1);
    }
  }

  add(): void {
    this.dialogService.open(EditComponent);
  }
  data: Carte[] = [];

}
