import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AxisNavService {
  
  constructor(private http: HttpClient) { }
//private dt = "mf="+53+"&tp="+1+"&frmdt="+Date+"&todt="+Date;
  getDataList() {
    //return this.http.get('http://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?'+this.dt, {responseType: 'text'})
    return this.http.get("assets/axisfunds.json");
  }
  getFundData() {
    return this.http.get("assets/subfund.json");
  }
  getschemaData() {
    return this.http.get("assets/scheme.json");
  }
  addfund( data ) {
    return this.http.post('http://localhost:3000/funds',{
      fund       : data.fund,
      equity     : data.equity,
      Invamount  : data.Invamount,
      fromDate   : data.fromDate,
      toDate     : data.toDate,
      nav        : data.nav,
    })
  }
}