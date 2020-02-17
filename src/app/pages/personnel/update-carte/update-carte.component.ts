import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { PersonnelService } from '../../../services/personnel.service';
import { Personnel } from '../../../models/personnel.model';
import { Carte } from '../../../models/carte.model';
import { CarteService } from '../../../services/carte.service';

@Component({
  selector: 'ngx-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.scss']
})
export class UpdateCarteComponent implements OnInit {

  @Input() personnel: Personnel;
  carteId: number;
  cartes: Carte[] = [];
  constructor(protected ref: NbDialogRef<UpdateCarteComponent>,
    private personnelService: PersonnelService, private carteService: CarteService) {

  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
    this.carteService.getAll().subscribe(data => {
      this.cartes = data as Carte[];
    })
  }

  add(addForm: NgForm) {
    this.personnel.carte_id = addForm.form.value.carteId;
    this.personnelService.addOrUpdate(this.personnel).subscribe(data => {
      console.log(data);
      this.dismiss();
    }, err => {
      console.log(err);
    })
  }

}
