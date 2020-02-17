import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { PersonnelService } from '../../../services/personnel.service';
import { Personnel } from '../../../models/personnel.model';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  personnel: Personnel = new Personnel();

  constructor(protected ref: NbDialogRef<EditComponent>,
    private personnelService: PersonnelService) {

  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.personnel.code = addForm.form.value.code;
    this.personnel.nom = addForm.form.value.nom;
    this.personnel.prenom = addForm.form.value.prenom;
    this.personnel.telephone = addForm.form.value.telephone;
    this.personnel.adresse = addForm.form.value.adresse;
    this.personnelService.addOrUpdate(this.personnel).subscribe(data=>{
      console.log(data);
      this.dismiss();
    },err=>{
      console.log(err);
    })
  }

}
