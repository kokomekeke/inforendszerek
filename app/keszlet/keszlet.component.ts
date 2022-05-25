import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Keszlet } from 'Backend/src/entity/Keszlet';
import { Observable } from 'rxjs';
import { KeszletService } from '../services/keszlet.service';

@Component({
  selector: 'app-keszlet',
  templateUrl: './keszlet.component.html',
  styleUrls: ['./keszlet.component.css']
})
export class KeszletComponent implements OnInit {

  keszlet$! : Observable<Keszlet[]>;
  form!: FormGroup;
  static keszletService: KeszletService;

  constructor(private keszletService: KeszletService,  private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.keszlet$ = this.fetchAll();
    this.form = new FormGroup(
      {
        id: new FormControl(),
        gyarto: new FormControl(),
        rendszam: new FormControl(),
        alvazszam: new FormControl(),
        datum: new FormControl(),
        sorszam: new FormControl(),
        dij: new FormControl(),
        km: new FormControl(),
        statusz: new FormControl(),
        ugyfel: new FormControl(),
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Keszlet[]>{
    return this.keszletService.getKeszlet();
  }




  delKeszlet(id: number): void {
    
    this.keszletService.delKeszlet(id).subscribe(() => (
      this.keszlet$ = this.fetchAll()
    ));
  }
  

  onSubmit(): void {
    console.log(this.form.value);
    this.keszletService.addKeszlet(this.form.value).subscribe(() => (
      this.keszlet$ = this.fetchAll()
    ));
  }

  update(){
    console.log(this.form.value);
    this.keszletService.updateKeszlet(this.form.value, Number(this.form.value.id)).subscribe(() => (
      this.keszlet$ = this.fetchAll()
    ));
  }

  
}
