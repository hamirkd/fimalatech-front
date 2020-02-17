import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { GroupeService } from '../../services/groupe.service';
import { Groupe } from '../../models/groupe.model';
import { EditComponent } from './edit/edit.component';
import { AddDroitComponent } from './add-droit/add-droit.component';

@Component({
  selector: 'ngx-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  ngOnInit() {
    this.groupeService.getAll().subscribe(data=>{
      this.data=data as Groupe[];
    },err=>{
      console.error(err)
    })
  }

  constructor(private groupeService:GroupeService,private dialogService: NbDialogService) {
  
  }

  onDeleteConfirm(index): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.data.splice(index, 1);
    }
  }

  
  add(): void {
    this.dialogService.open(EditComponent).onClose.subscribe(()=>{this.ngOnInit()})
  }

  addDroit(groupe:Groupe): void {
    this.dialogService.open(AddDroitComponent,{
      context:{
        groupe:groupe
      }
    }).onClose.subscribe(()=>{this.ngOnInit()})
  }
  data: Groupe[] = [];

}
