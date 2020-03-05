import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { Carte } from '../../../models/carte.model';
import { CarteService } from '../../../services/carte.service';
import { Groupe } from '../../../models/groupe.model';
import { GroupeService } from '../../../services/groupe.service';

@Component({
  selector: 'ngx-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.scss']
})
export class UpdateGroupeComponent implements OnInit {

  @Input() carte: Carte;
  groupeId: number;
  groupes: Groupe[] = [];
  constructor(protected ref: NbDialogRef<UpdateGroupeComponent>,
    private carteService: CarteService, private groupeService: GroupeService) {

  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.groupeService.getAll().subscribe(data => {
      this.groupes = data as Groupe[];
      console.log(this.groupes)
    })
  }

  add(addForm: NgForm) {
    this.carte.groupe_id = addForm.form.value.groupeId;
    console.log(this.carte.groupe_id)
    this.carteService.updateCarte({id:this.carte.id,numero:this.carte.numero,groupe_id:this.carte.groupe_id}).subscribe(data => {
      console.log(data);
      this.dismiss();
    }, err => {
      console.log(err);
    })
  }

}
