import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Keszlet } from 'Backend/src/entity/Keszlet';
import { Ugyfel } from 'Backend/src/entity/Ugyfel';
import { Observable } from 'rxjs';
import { KeszletService } from '../services/keszlet.service';
import { KolcsonzesService } from '../services/kolcsonzes.service';
import { UgyfelService } from '../services/ugyfel.service';

@Component({
  selector: 'app-kolcsonzes',
  templateUrl: './kolcsonzes.component.html',
  styleUrls: ['./kolcsonzes.component.css']
})
export class KolcsonzesComponent implements OnInit {
  ugyfel$!: Observable<Ugyfel[]>;
  keszlet$!: Observable<Keszlet[]>;
  form!: FormGroup;
  

  constructor(private ugyfelService: UgyfelService, private keszletService: KeszletService, private kolcsonzesService: KolcsonzesService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.ugyfel$ = this.fetchAll();
    this.keszlet$ = this.fetchAll1();

    

    this.form = new FormGroup(
      { 
        id: new FormControl(),
        jid: new FormControl(),
      }
    );
  }
  

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Ugyfel[]>{
    console.log(this.kolcsonzesService.getUgyfel());
    return this.kolcsonzesService.getUgyfel();
  }
  fetchAll1(): Observable<Keszlet[]>{
    console.log(this.kolcsonzesService.getKeszlet());
    return this.kolcsonzesService.getKeszlet();
  }
  
  onSubmit(): void {
    
    this.kolcsonzesService.updateKeszlet(Number(this.form.value.jid), Number(this.form.value.id)).subscribe(() => (
      this.keszlet$ = this.fetchAll1()
    ));
    
  }
  

}
