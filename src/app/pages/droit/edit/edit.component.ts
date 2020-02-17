import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DroitService } from '../../../services/droit.service';
import { Droit } from '../../../models/droit.model';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  droit: Droit = new Droit();

  constructor(protected ref: NbDialogRef<EditComponent>,
    private droitService: DroitService) {

  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.droit.nom = addForm.form.value.nom;
    this.droitService.addOrUpdate(this.droit).subscribe(data=>{
      console.log(data);
      this.dismiss();
    },err=>{
      console.log(err);
    })
  }

}
