import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FuseCardComponent } from '@fuse/components/card';
import { PROFESSIONS } from './professions-data.component';

@Component({
  selector       : 'app-professions',
  templateUrl    : './professions.component.html',
  styleUrls      : ['./professions.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionsComponent implements AfterViewInit {
  @ViewChildren(FuseCardComponent, { read: ElementRef }) private _fuseCards: QueryList<ElementRef>;

  categories = [
    { key: 'all', name: 'Все' },
    { key: 'humanitarian', name: 'Гуманитарные' },
    { key: 'technical', name: 'Технические' },
    { key: 'creative', name: 'Творческие' }
  ];

  professions = PROFESSIONS;
  numberOfProfessions: any = {};
  selectedFilter: string = 'all';

  constructor(private _renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this._calcNumberOfProfessions();
    this._filterProfessions();
  }

  onFilterChange(change: MatButtonToggleChange): void {
    this.selectedFilter = change.value;
    this._filterProfessions();
  }

  private _calcNumberOfProfessions(): void {
    this.numberOfProfessions = {};
    this.categories.forEach((category) => {
      if (category.key === 'all') {
        this.numberOfProfessions[category.key] = this.professions.length;
      } else {
        this.numberOfProfessions[category.key] = this.professions.filter(
            (profession) => profession.category === category.key
        ).length;
      }
    });
  }

  private _filterProfessions(): void {
    this._fuseCards.forEach((fuseCard) => {
      const profession = this.professions.find(
          (p) => fuseCard.nativeElement.classList.contains(`filter-${p.category}`)
      );

      if (this.selectedFilter === 'all' || (profession && profession.category === this.selectedFilter)) {
        fuseCard.nativeElement.classList.remove('hidden');
      } else {
        fuseCard.nativeElement.classList.add('hidden');
      }
    });
  }
}
