import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key':'6284be0c76mshf63ebf234009e7dp140881jsnfc532dd5bd32',
        'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key:'61b7049e154e4bb1a9df81590d76980f',
      }
    });
    return next.handle(req);
  }
}
