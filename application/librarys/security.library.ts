
/* =========================================================================================
 * Import Library | Angular
 * ========================================================================================= */

import { Injectable, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/* =========================================================================================
 * Import Service
 * ========================================================================================= */

import { AppService } from './../services/app.service';

/* =========================================================================================
 * Class
 * ========================================================================================= */

@Injectable ()

export class SecurityLibrary { 
    
    /* =========================================================================================
     * Constructor | ทำงานเริ่มต้นเสมอ
     * ========================================================================================= */

    constructor (
        private app: AppService,
        private sanitizer: DomSanitizer) { 
    }
    
    public getText (strText: string) {
        return this.sanitizer.bypassSecurityTrustHtml(strText.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    }

    public getYoutube (urlYoutube: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlYoutube);
    }

    public getImg (urlImg: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlImg + '?v=' + this.app.version);
    }

    public getImgOnly (urlImg: string) {
        return urlImg + '?v=' + this.app.version;
    }

    public getVideo (urlVideo: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo + '?v=' + this.app.version);
    }

    public getHtml (html: string = '') {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public getUrl (urlLink: string) {
        return this.sanitizer.bypassSecurityTrustUrl(urlLink);
    }

    public getScript (script: string) {
        return this.sanitizer.bypassSecurityTrustScript(script);
    }

    public getStyle (style: string) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

}