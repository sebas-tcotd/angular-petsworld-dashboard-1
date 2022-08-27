import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UniversalService {
  private urlBase = environment.URL_BASE;

  constructor(private http: HttpClient) {}

  public getusers() {
    const endpoint = `${this.urlBase}/users`;
    return this.http.get(endpoint).pipe(map((res: any) => res.users.length));
  }

  public getPets() {
    const endpoint = `${this.urlBase}/pets/all`;
    return this.http.get(endpoint).pipe(map((res: any) => res.pets.length));
  }

  public getReports() {
    const endpoint = `${this.urlBase}/reports`;
    return this.http.get(endpoint).pipe(map((res: any) => res.reports.length));
  }
}
