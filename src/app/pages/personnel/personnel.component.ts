import { Component, OnInit } from '@angular/core';
import { Personnel } from '../../models/personnel.model';
import { PersonnelService } from '../../services/personnel.service';
import { NbDialogService } from '@nebular/theme';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'ngx-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
})
export class PersonnelComponent implements OnInit {

  constructor(private personnelService: PersonnelService, private dialogService: NbDialogService) {}

  open() {
    this.dialogService.open(EditComponent);
  }

  ngOnInit() {
    this.personnelService.getAll().subscribe(data => {
      this.data = data as Personnel[];
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
