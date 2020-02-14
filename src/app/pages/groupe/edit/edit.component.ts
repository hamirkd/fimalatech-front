import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { GroupeService } from '../../../services/groupe.service';
import { Groupe } from '../../../models/groupe.model';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  @Input() title: string;
  groupe: Groupe = new Groupe();

  constructor(protected ref: NbDialogRef<EditComponent>,
    private groupeService: GroupeService) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.groupe.nom = addForm.form.value.nom;
    this.groupeService.addOrUpdate(this.groupe).subscribe(data=>{
      console.log(data);
      this.ref.close();
    },err=>{
      console.log(err);
    })
  }

}
