import { Injectable } from '@angular/core';
import * as apiKey from '../../assets/config/search-api-key.json';
import { IConfig } from '../interfaces/IConfig';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private notificationService: NotificationService) { }

  getApiKey(): string {
    try{
      let apiCOnfig: IConfig = apiKey;
      if(apiCOnfig.APIKEY == ""){
        this.notificationService.showSnackBar("API Key is blank, please update it.")
      }
      return apiCOnfig.APIKEY;
    }
    catch
    {
      this.notificationService.showSnackBar("Issue Retrieving API Key");
      return "";
    }


  }
}
