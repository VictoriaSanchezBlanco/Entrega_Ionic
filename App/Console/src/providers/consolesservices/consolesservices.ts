import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ConsolesservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConsolesservicesProvider {

  private uri: string = "http://192.168.1.4:8080/console"
  constructor(public http: HttpClient) {
    console.log('Hello ConsolesservicesProvider Provider');
  }
  
  getConsoles(){
    return this.http.get(this.uri);

}

  addConsoles(consol){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name',consol.name);
    urlSearchParams.append('date',consol.date);
    urlSearchParams.append('feature',consol.feature);
    urlSearchParams.append('games',consol.games);
    let body = urlSearchParams.toString();

    let options ={
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return this.http.post(this.uri,body,options);
  }

  deleteConsole(id){
    return this.http.delete(this.uri+'/'+ id);
  }
}

