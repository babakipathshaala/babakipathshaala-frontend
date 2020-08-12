import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LOCAL_STORAGE, StorageService, StorageTranscoders, SESSION_STORAGE } from 'ngx-webstorage-service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

const STORAGE_KEY = 'userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData = [];

  constructor(public http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(userDetails: {}): void {

    const currentUsersList = this.storage.get(STORAGE_KEY) || [];

    currentUsersList.push({
      userData: userDetails
    });
    this.storage.set(STORAGE_KEY, currentUsersList);

  }

  public getUserDetailsFromLocalstorage = () => {
    return this.storage.get(STORAGE_KEY);
  }

  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }
}
