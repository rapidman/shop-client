import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('\\+\\d{10,15}'),
  ]);
  matcher = new MyErrorStateMatcher();
  email: string;
  phone: string;

  constructor() {
  }

  ngOnInit() {
    this.email = "";
  }

  getEmail(): string {
    return this.email;
  }

  send(){
    alert(this.email + this.phone);
  }

  onEmailKey($event: any) {
    this.email = $event.target.value;
  }

  onPhoneKey($event: any) {
    this.phone = $event.target.value;
  }
}
