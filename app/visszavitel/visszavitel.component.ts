import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Keszlet } from 'Backend/src/entity/Keszlet';
import { Observable } from 'rxjs';
import { KeszletService } from '../services/keszlet.service';
import { KolcsonzesService } from '../services/kolcsonzes.service';


@Component({
  selector: 'app-visszavitel',
  templateUrl: './visszavitel.component.html',
  styleUrls: ['./visszavitel.component.css']
})
export class VisszavitelComponent implements OnInit {
  keszlet$! : Observable<Keszlet[]>;
  form!: FormGroup;
  static keszletService: KeszletService;

  constructor(private keszletService: KeszletService, private kolcsonzesService: KolcsonzesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.keszlet$ = this.fetchAll();
    this.form = new FormGroup(
      {
        id: new FormControl(),
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Keszlet[]>{
    return this.keszletService.getKeszlet();
  }
  
  onSubmit() {
    this.kolcsonzesService.updateKeszlet1(Number(this.form.value.id)).subscribe(() => (
      this.keszlet$ = this.fetchAll()
    ));
  }

}
