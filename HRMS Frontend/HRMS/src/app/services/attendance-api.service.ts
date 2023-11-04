import { IAttendanceModel } from '../models/iattendance-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceAPIService {

  constructor(public http: HttpClient) { }

  getAllAttendance(FDate:Date,TDate:Date,Pnum:number=0):any{
    const headers = new HttpHeaders()
      .set('FDate',FDate.toISOString() )
      .set('TDate',TDate.toISOString() )
      .set('Pnum',Pnum.toString() );

    return this.http.get("https://localhost:7073/api/Attendance", { headers, observe: 'response' })
  }
  getAllAttendanceByName(emp_name:string,FDate:Date,TDate:Date):any{
    return this.http.get("https://localhost:7073/search/"+emp_name)
  }
  addAttendance(DTOModel:IAttendanceModel):any{
    return this.http.post("https://localhost:7073/api/Attendance",DTOModel)
  }
  editAttendance(DTOModel:IAttendanceModel):any{
    return this.http.put("https://localhost:7073/api/Attendance",DTOModel)
  }
  deleteAttendance(id:number):any{
    return this.http.delete("https://localhost:7073/api/Attendance?id="+id)
  }
  getEmployees():any{
    return this.http.get("https://localhost:7073/api/Employee")
  }
}