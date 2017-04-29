/* =========================================================================================
 * Import Library Angular 2 
 * ========================================================================================= */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable ()

/* =========================================================================================
 * Class
 * ========================================================================================= */

export class ApiLibrary { 

    private token_access : string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9....';

    constructor (private http: Http) { }

    // GET | RESTful API
    public get (apiUrl: string, callback: any): Promise<any> {
        
        return new Promise((resolve, reject) => {

            var headers = new Headers();
            // headers.append('x-access-token', this.token_access); // JWT (Json Web Token)
            headers.append('Content-Type', 'application/json;charset=utf-8'); // Json
            var options = new RequestOptions({ headers: headers });
    
            this.http.get(apiUrl, options)
                .map((res: Response) => res.json())
                .subscribe((responseGet: any) => { 
                    if (typeof responseGet !== 'undefined') {
                        return resolve(responseGet); // successful
                    } else {
                        return reject();
                    }
                }, (err: any) => { 
                    return reject(); 
                });

        });

    }

    // POST | RESTful API
    public post (apiUrl: string, params: any): Promise<any> {
        
        return new Promise((resolve, reject) => {

            var headers = new Headers();
            // headers.append('x-access-token', this.token_access); // JWT (Json Web Token)
            headers.append('Content-Type', 'application/json;charset=utf-8');
            var options = new RequestOptions({ headers: headers });
    
            this.http.post(apiUrl, params, options)
                .map((res: Response) => res.json())
                .subscribe((responsePost: any) => { 
                    if (typeof responsePost !== 'undefined') {
                        return resolve(responsePost);
                    } else {
                        return reject();
                    }
                 }, (err: any) => { 
                    return reject(); 
                });

        });

    }

    // PUT | RESTful API
    public put (apiUrl: string, params: any, callback: any): Promise<any> {
        
        return new Promise((resolve, reject) => {

            var headers = new Headers();
            // headers.append('x-access-token', this.token_access); // JWT (Json Web Token)
            headers.append('Content-Type', 'application/json;charset=utf-8'); // Json
            var options = new RequestOptions({ headers: headers });
            
            this.http.put(apiUrl, params, options)
                .map((res: Response) => res.json())
                .subscribe((responsePut: any) => { 
                    if (typeof responsePut !== 'undefined') {
                        return resolve(responsePut);
                    } else {
                        return reject();
                    }
                }, (err: any) => { 
                    return reject(); 
                });

        });

    }

    // DELETE | RESTful API
    public delete (apiUrl: string, callback: any): Promise<any> {
        
        return new Promise((resolve, reject) => {

            var headers = new Headers();
            // headers.append('x-access-token', this.token_access); // JWT (Json Web Token)
            headers.append('Content-Type', 'application/json;charset=utf-8'); // Json
            var options = new RequestOptions({ headers: headers });
    
            this.http.delete(apiUrl, options)
                .map((res: Response) => res.json())
                .subscribe((responseDelete: any) => { 
                    if (typeof responseDelete !== 'undefined') {
                        return resolve(responseDelete);
                    } else {
                        return reject();
                    }
                }, (err: any) => { 
                    return reject(); 
                });

        });

    }

    // POST UPLOD | RESTful API
    public upload (apiUrl: string, postData: any): Promise<any> {
        
        return new Promise((resolve, reject) => {

            var headers = new Headers();
            // headers.append('x-access-token', this.token_access); // JWT (Json Web Token)
            headers.append('Content-Type', 'multipart/form-data'); // Json
            headers.append('Accept', 'application/json;charset=utf-8');
            var options = new RequestOptions({ headers: headers });
    
            this.http.post (apiUrl, postData, options)
                .map((res: Response) => res.json())
                .subscribe((responseUpload: any) => { 
                    if (typeof responseUpload !== 'undefined') {
                        return resolve(responseUpload);
                    } else {
                        return reject();
                    }
                }, (err: any) => { 
                    return reject(); 
                });

        });

    }

}