import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Ugyfel } from 'Backend/src/entity/Ugyfel';
import { Observable } from 'rxjs';
import { UgyfelService } from '../services/ugyfel.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Ugyfel } from 'Backend/src/entity/Ugyfel';


@Component({
  selector: 'app-ugyfel',
  templateUrl: './ugyfel.component.html',
  styleUrls: ['./ugyfel.component.css']
})

@Injectable({
  providedIn: 'root'
})
 
export class UgyfelComponent implements OnInit {
   /*ngOnInit(): void {
    
  }
  ugyfelForm = new FormGroup({
    nev: new FormControl(),
    cim: new FormControl(),
    ig: new FormControl(),
    tel: new FormControl(),
  })
constructor() { }


 
  

  
  

  onSubmit() {
    console.log(this.ugyfelForm.value);
  }
  */


  
  /*
  
*/
  ugyfel$! : Observable<Ugyfel[]>;
  form!: FormGroup;
  static ugyfelService: UgyfelService;

  constructor(private ugyfelService: UgyfelService,  private formBuilder: FormBuilder) { }


    

  ngOnInit(): void {
    this.ugyfel$ = this.fetchAll();
    this.form = new FormGroup(
      {
        id: new FormControl(),
        nev: new FormControl(),
        cim: new FormControl(),
        ig: new FormControl(),
        tel: new FormControl(),
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Ugyfel[]>{
    return this.ugyfelService.getUgyfel();
  }




  delUgyfel(id: Pick<Ugyfel, 'id'>): void {

    this.ugyfelService.delUgyfel(id).subscribe(() => (
      this.ugyfel$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.ugyfelService.addUgyfel(this.form.value, Number(this.form.value.id)).subscribe(() => (
      this.ugyfel$ = this.fetchAll()
    ));
    //this.ugyfelService.addUgyfel1(this.form.value);
    //this.ugyfel$ = this.fetchAll();
  }
  update() {
    console.log(this.form.value);
    this.ugyfelService.updateUgyfel(this.form.value, Number(this.form.value.id)).subscribe(() => (
      this.ugyfel$
    ));
  }


  async addUgyfel() {
    const ugyfel = this.form.value;
    try {
      await this.ugyfelService.addUgyfel(ugyfel, Number(this.form.value.id));
    } catch (err) {
      
    }
  }
}
