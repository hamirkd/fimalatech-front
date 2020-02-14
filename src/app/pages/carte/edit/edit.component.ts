import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { CarteService } from '../../../services/carte.service';
import { Carte } from '../../../models/carte.model';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  @Input() title: string;
  carte: Carte = new Carte();

  constructor(protected ref: NbDialogRef<EditComponent>,
    private carteService: CarteService) {

  }

  dismiss() {
    this.ref.close();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.carte.numero = addForm.form.value.numero;
    this.carteService.addOrUpdate(this.carte).subscribe(data=>{
      console.log(data);
      console.error("DAO HAmadou")
      this.ref.close();
    },err=>{
      console.log(err);
    })
  }

}
