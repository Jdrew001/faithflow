import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpHelperService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // GET method
  get<T>(endpoint: string, params?: HttpParams, headers?: HttpHeaders) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      params,
      headers,
    });
  }

  // POST method
  post<T>(endpoint: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers,
    });
  }

  // PUT method
  put<T>(endpoint: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers,
    });
  }

  // DELETE method
  delete<T>(endpoint: string, headers?: HttpHeaders) {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers,
    });
  }
}