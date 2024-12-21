import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import {
    FuseNavigationItem,
    FuseNavigationService,
    FuseVerticalNavigationComponent
} from '../../../../@fuse/components/navigation';

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages'
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService
    )
    {}

    ngOnInit(): void
    {
        this.availableLangs = this._translocoService.getAvailableLangs();
        this._translocoService.langChanges$.subscribe((activeLang) => {
            this.activeLang = activeLang;
            this._updateNavigation(activeLang);
        });
        this.flagCodes = {
            'kz': 'kz',
            'ru': 'ru'
        };
    }

    ngOnDestroy(): void
    {}

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        this._translocoService.setActiveLang(lang);
        this._updateNavigation(this._translocoService.getActiveLang());
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
    /**
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void {
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');
        if (!navComponent) {
            return;
        }
        const navigation = navComponent.navigation;
        this._updateNavigationTitlesRecursively(navigation);
        navComponent.refresh();
    }

    private _updateNavigationTitlesRecursively(items: FuseNavigationItem[]): void {
        items.forEach((item) => {
            if (item.id) {
                this._translocoService
                    .selectTranslate(item.id)
                    .pipe(take(1))
                    .subscribe((translation) => {
                        item.title = translation || item.title;
                    });
            }
            if (item.children) {
                this._updateNavigationTitlesRecursively(item.children);
            }
        });
    }

}
