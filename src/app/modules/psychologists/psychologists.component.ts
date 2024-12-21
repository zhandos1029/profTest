import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PSYCHOLOGISTS, Psychologist } from './psychologists-data.component';

@Component({
  selector: 'app-psychologists',
  templateUrl: './psychologists.component.html',
  styleUrls: ['./psychologists.component.scss']
})
export class PsychologistsComponent implements OnInit {
  psychologistsData: Psychologist[] = [];
  activeLang: string = 'ru';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.psychologistsData = PSYCHOLOGISTS;
    this.activeLang = this.translocoService.getActiveLang();

    this.translocoService.langChanges$.subscribe((lang) => {
      this.activeLang = lang;
    });
  }
}
