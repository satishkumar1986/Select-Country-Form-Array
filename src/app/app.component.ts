import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customerDetail: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.setCustomerForm();
    //this.getState();
    //this.getCity();
  }

  setCustomerForm() {
    this.customerDetail = this._fb.group({
      name: [''],
      address: this._fb.array([this.addressFn()])
    })
  }

  addressFn() {
    return this._fb.group({
      country: [''],
      state: [''],
      city: ['']
    })
  }

  addressArray() {
    return this.customerDetail.get('address') as FormArray;
  }

  addMore() {
    this.addressArray().push(this.addressFn());
  }

  onCustomerDetail() {
    console.log(this.customerDetail.value);
  }

  stateList: any = [];
  getState(i, event) {
    //debugger
    console.log(event.target.value);

    if (event.target.value == '91') {
      this.stateList[i] = [
        { 'id': '101', 'name': 'Delhi' },
        { 'id': '102', 'name': 'Mumbai' },
        { 'id': '104', 'name': 'Kolkata' }
      ];
    }  
    
    if (event.target.value == '92') {
      this.stateList[i] = [
        { 'id': '201', 'name': 'New York' },
        { 'id': '202', 'name': 'New Jercy' },
      ];
    }

    if (event.target.value = '') {
      this.stateList[i] = [];
    }

  }

  cityList: any = [];
  getCity(i, event) {
    if (event.target.value == '101') {
      this.cityList[i] = [
        { 'id': '201', 'name': 'Karol Bagh' },
        { 'id': '202', 'name': 'Dwarka' },
        { 'id': '204', 'name': 'Janak Puri' },
      ]
    } else if(event.target.value == '201'){
      this.cityList[i] = [
        { 'id': '401', 'name': 'L.A' },
        { 'id': '402', 'name': 'N.A' },
      ]
    }
     else {
      this.cityList[i] = [];
    }

  }



}
