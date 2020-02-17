import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { GroupeService } from '../../../services/groupe.service';
import { Groupe } from '../../../models/groupe.model';
import { DroitService } from '../../../services/droit.service';
import { Droit } from '../../../models/droit.model';

@Component({
  selector: 'ngx-add-droit',
  templateUrl: './add-droit.component.html',
  styleUrls: ['./add-droit.component.scss']
})
export class AddDroitComponent implements OnInit {

  @Input() groupe: Groupe;
  droitId: number;
  droits: Droit[] = [];
  constructor(protected ref: NbDialogRef<AddDroitComponent>,
    private groupeService: GroupeService, private droitService: DroitService) {
  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    if (!this.groupe.droits) {
      this.groupe.droits = [];
    }
    this.droitService.getAll().subscribe(data => {
      this.droits = data as Droit[];
    })
  }

  add(droit: Droit) {
    if(this.groupe.droits.findIndex(d=>d.id==droit.id)==-1)
    this.groupe.droits.push(droit);
  }
  
  delete(droit: Droit) {
    this.groupe.droits.splice(this.groupe.droits.findIndex(d => d.id == droit.id), 1);
  }

  save() {
    this.groupe.droit_ids=[];
    for (let droit of this.groupe.droits) {
      this.groupe.droit_ids.push(droit.id);
    }
    this.groupeService.addDroit(this.groupe).subscribe(data => {
      console.log(data);
      this.dismiss();
    }, err => {
      console.log(err);
    })
  }

}
