/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewPassengerDto } from '../models/new-passenger-dto';
import { PassengerRm } from '../models/passenger-rm';

@Injectable({
  providedIn: 'root',
})
export class PassengerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation registerPassenger
   */
  static readonly RegisterPassengerPath = '/Passenger';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerPassenger()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerPassenger$Response(params?: {
    body?: NewPassengerDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.RegisterPassengerPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `registerPassenger$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registerPassenger(params?: {
    body?: NewPassengerDto
  }): Observable<void> {

    return this.registerPassenger$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findPassenger
   */
  static readonly FindPassengerPath = '/Passenger/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPassenger$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassenger$Plain$Response(params: {
    email: string;
  }): Observable<StrictHttpResponse<PassengerRm>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.FindPassengerPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassengerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPassenger$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassenger$Plain(params: {
    email: string;
  }): Observable<PassengerRm> {

    return this.findPassenger$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PassengerRm>) => r.body as PassengerRm)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPassenger()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassenger$Response(params: {
    email: string;
  }): Observable<StrictHttpResponse<PassengerRm>> {

    const rb = new RequestBuilder(this.rootUrl, PassengerService.FindPassengerPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PassengerRm>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPassenger$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPassenger(params: {
    email: string;
  }): Observable<PassengerRm> {

    return this.findPassenger$Response(params).pipe(
      map((r: StrictHttpResponse<PassengerRm>) => r.body as PassengerRm)
    );
  }

}
