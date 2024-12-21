import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { PROFESSIONS, Profession } from './professions-data.component';

@Component({
  selector: 'app-professions',
  templateUrl: './professions.component.html',
  styleUrls: ['./professions.component.scss']
})
export class ProfessionsComponent implements OnInit {
  professionsData: Profession[] = [];
  categories = [
    { key: 'all', name_kz: 'Барлығы', name_ru: 'Все' },
    { key: 'humanitarian', name_kz: 'Гуманитарлық', name_ru: 'Гуманитарные' },
    { key: 'technical', name_kz: 'Техникалық', name_ru: 'Технические' },
    { key: 'creative', name_kz: 'Шығармашылық', name_ru: 'Творческие' }
  ];
  numberOfProfessions: any = {};
  selectedFilter: string = 'all';
  activeLang: string = 'ru';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.professionsData = PROFESSIONS;
    this.activeLang = this.translocoService.getActiveLang();
    this._calcNumberOfProfessions();

    this.translocoService.langChanges$.subscribe((lang) => {
      this.activeLang = lang;
    });
  }

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
  }

  private _calcNumberOfProfessions(): void {
    this.numberOfProfessions = {};
    this.categories.forEach((category) => {
      if (category.key === 'all') {
        this.numberOfProfessions[category.key] = this.professionsData.length;
      } else {
        this.numberOfProfessions[category.key] = this.professionsData.filter(
            (profession) => profession.category === category.key
        ).length;
      }
    });
  }
}
