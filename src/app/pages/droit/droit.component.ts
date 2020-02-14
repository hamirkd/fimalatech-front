import { Component, OnInit } from '@angular/core';
import { DroitService } from '../../services/droit.service';
import { Droit } from '../../models/droit.model';
import { NbDialogService } from '@nebular/theme';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'ngx-droit',
  templateUrl: './droit.component.html',
  styleUrls: ['./droit.component.scss']
})
export class DroitComponent implements OnInit {

  ngOnInit() {
    this.droitService.getAll().subscribe(data=>{
      this.data=data as Droit[];
    })
  }
  
  constructor(private droitService:DroitService,private dialogService: NbDialogService) {
    
  }

  onDeleteConfirm(index): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.data.splice(index, 1);
    }
  }

  add(): void {
    this.dialogService.open(EditComponent);
  }
  data: Droit[] = [];

}
