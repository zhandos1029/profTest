import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {CustomNoticeComponent} from "./custom-notice.component";

@Injectable({
    providedIn: 'root'
})
export class NoticeService {

    defaultConfig: MatSnackBarConfig = {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
    };

    constructor(private _snackBar: MatSnackBar) {
    }

    success(message: string, action: string = 'Ok', conf?: any) {
        this._snackBar.openFromComponent(CustomNoticeComponent, {
            data: {
                message,
                action,
                type: 'success'
            },
            ...this.defaultConfig,
            ...conf
        });
    }

    warning(message: string, action: string = 'Ok', conf?: any) {
        this._snackBar.openFromComponent(CustomNoticeComponent, {
            data: {
                message,
                action,
                type: 'warning'
            },
            ...this.defaultConfig,
            ...conf
        });
    }

    error(message: string, error: any, action: string = 'Ok', conf?: any) {
        this._snackBar.openFromComponent(CustomNoticeComponent, {
            data: {
                message,
                action,
                type: 'error',
                error
            },
            ...this.defaultConfig,
            ...conf,
            panelClass: 'style-error'
        });
    }
}