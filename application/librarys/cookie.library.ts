
/* =========================================================================================
 * Import Library | Librarys ของ Angular
 * ========================================================================================= */

import { Injectable } from '@angular/core';

/* =========================================================================================
 * Class | การทำงาน
 * ========================================================================================= */

@Injectable()

export class CookieLibrary { 
    
    /* =========================================================================================
     * GET COOKIE
     * ========================================================================================= */

    public getCookie (name: any) {
        var arr: any = [];
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var eqPos = cookies[i].split('=');
            if (eqPos[0] && eqPos[1]){
                arr[eqPos[0].trim()] = eqPos[1].trim();
            }
        }
        if (typeof arr[name] !== 'undefined' && arr[name]) {
            return arr[name];
        } else {
            return false;
        }
    }

    /* =========================================================================================
     * SET COOKIE
     * ========================================================================================= */

    public setCookie (key: String, value: String, expires: String) {
        try {
            document.cookie = key + '=' + value + ';expires=' + expires + ';';
        } catch (err) {
            console.log(err);
        }
    }
    
    /* =========================================================================================
     * SET COOKIE for SESSION
     * ========================================================================================= */

    public setSessionCookie (key: String, value: String) {
        try {
            document.cookie = key + '=' + value + ';';
        } catch (err) {
            console.log(err);
        }
    }

    /* =========================================================================================
     * CLEAR COOKIE
     * ========================================================================================= */
    
    public clearCookie (name: any) {
        try {
            document.cookie = name + '=;expires=' + (new Date()).toUTCString() + ';';
        } catch (err) {
            console.log(err);
        }
    }

}