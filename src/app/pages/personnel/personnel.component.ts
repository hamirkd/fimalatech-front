import { Component, OnInit } from '@angular/core';
import { Personnel } from '../../models/personnel.model';
import { PersonnelService } from '../../services/personnel.service';
import { NbDialogService } from '@nebular/theme';
import { EditComponent } from './edit/edit.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';

@Component({
  selector: 'ngx-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
})
export class PersonnelComponent implements OnInit {

  constructor(private personnelService: PersonnelService, private dialogService: NbDialogService) { }

  open() {
    this.dialogService.open(EditComponent).onClose.subscribe(() => { this.ngOnInit() });
  }
  updateCarte(personnel:Personnel) {
    this.dialogService.open(UpdateCarteComponent,{
      context:{
        personnel:personnel
      }
    }).onClose.subscribe(() => { this.ngOnInit() });
  }

  ngOnInit() {
    this.personnelService.getAll().subscribe(data => {
      this.data = data as Personnel[];
    }, err => {
      console.error(err)
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  data: Personnel[] = [];

}
