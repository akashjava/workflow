import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { MatSnackBarConfig, MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { paths } from "../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

declare var jwt_decode: any;

@Injectable()
export class AppService {
  public view$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  token: string = localStorage.getItem("app");

  constructor(
    private _router: Router,
    private location: Location,
    public snackBar: MatSnackBar,
    public http: HttpClient
  ) {}


  saveAppState(token: string) {
    localStorage.setItem("app", token);
  }
   
  getLocalAppState(): any {
    try {
      return localStorage.getItem("app");
    } catch (error) {
    }
  }

  getToken(): string {
    return localStorage.getItem("app");
  }

  customerDetail(token): any {
    return jwt_decode(token);
  }

  getUserTokenDetails() {
    return this.customerDetail(localStorage.getItem("app"));
  }
   
   

  openSnackBar(message: string, duration: number = 3000) {
    this.snackBar.open(message, "OK", <MatSnackBarConfig>{ duration: duration });
  }
  
 
  setView(value) {
    this.view$.next(value);
  }

  getView(): Observable<boolean> {
    return this.view$.asObservable();
  }
}
