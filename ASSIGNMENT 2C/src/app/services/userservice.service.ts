import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  users(){
    return this.data
  }
  data = [
    {name:"sdjkbkjsd  ", email: "mdsbnfbkjdfjbfd"},
    {name:"jksdnasdjkAJD", email: "mdsbnfbkjdfjbfd"},
    {name:"jksdnasdjkAJD", email: "mdsbnfbkjdfjbfd"}
  ]
}
