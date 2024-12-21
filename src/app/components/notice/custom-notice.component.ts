import {Component, Inject, ViewEncapsulation} from "@angular/core";
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
    selector: 'custom-notice',
    templateUrl: 'custom-notice.component.html',
    styleUrls: ['./custom-notice.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CustomNoticeComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<CustomNoticeComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
