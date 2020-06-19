import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    console.log(`Request URL: ${router.url}`);

    if (error instanceof HttpErrorResponse) {
      console.error('Backend returned status code: ', error.status);
      console.error('Response body: ', error.message);
    } else {
      console.error('An error occurred: ', error.message);
    }
    router.navigate(['error']);
  }
}
