import { Component } from '@angular/core';
import { AxisNavService } from './services/axis-nav.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import 'rxjs/add/operator/map';
import * as $ from "jquery";
import { ActivatedRoute, Router } from '@angular/router';
interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fundForm = new FormGroup({
    name       : new FormControl(''),
    dob       : new FormControl(''),
    fund       : new FormControl(''),
    equity     : new FormControl(''),
    Invamount  : new FormControl(''),
    fromDate   : new FormControl(''),
    toDate     : new FormControl(''),
  });
  
  title = 'axisMutualFund';
  AxisFund: any = [];
  schema:  any = [];
  Fund:  any = [];
  submitted = false;
  // schemaName: any =[];
  constructor(private _AxisNavService: AxisNavService,private route: ActivatedRoute,private router: Router) {}
  
  ngOnInit() {
    
    $("#fund").change(function() {
      if ($(this).val() == "Equity Scheme") {
        $('#EquityScheme').show();
        $('#equity').attr('required', '');
        $('#equity').attr('data-error', 'This field is required.');
      } else {
        $('#EquityScheme').hide();
        $('#equity').removeAttr('required');
        $('#equity').removeAttr('data-error');
      }
    });
    $("#fund").trigger("change");

    //   this._AxisNavService.getDataList().subscribe(data =>{
    //   this.schemaName = data;
    //   console.log(data);
    // })
    this._AxisNavService.getDataList().subscribe(data =>{
      console.log(data);
      this.AxisFund = data;
    })
    this._AxisNavService.getFundData().subscribe(data =>{
      console.log(data);
      this.Fund = data;
    })
    // let id = this.route.snapshot.paramMap.get('id');
    // this._AxisNavService.getschemaData(id).subscribe(data =>{
    //   console.log(data);
    //   this.schema = data;
    // })
     
    this._AxisNavService.getschemaData().subscribe(data =>{
     console.log(data);
      this.schema = data;
   })
    
  }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.fundForm.invalid) {
        return;
    }
    console.log(this.fundForm.value);
    this._AxisNavService.addfund(this.fundForm.value).subscribe(data => {
      console.log(data);   
     const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }]         
    })
}
}