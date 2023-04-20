import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { IMovieInfo } from '../interfaces/IMovieInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly baseURL: string = "http://www.omdbapi.com/?t=";
  private readonly apiKeyPrefix: string = "&apikey=";
  private apiKey: string = "APIKEY";

  constructor(private configService: ConfigService, private httpClient: HttpClient) {
    this.apiKey = this.configService.getApiKey();
  }

  public GetMovieInfo(movieName: string): Observable<IMovieInfo> {
    let url = this.baseURL + movieName + this.apiKeyPrefix + this.apiKey;
    return this.httpClient.get <IMovieInfo> (url);
  }
}
