import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { TESTS, Test } from './tests-data.component';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  modalTitle: string = '';
  modalDescription: string = '';
  modalLink: string = '';
  currentTests: { name: string; description: string; modalDescription: string; link: string }[] = [];

  constructor(public dialog: MatDialog, private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.updateTests();
    this.translocoService.langChanges$.subscribe(() => {
      this.updateTests();
    });
  }

  updateTests(): void {
    const currentLang = this.translocoService.getActiveLang();
    this.currentTests = TESTS.map(test => ({
      name: test[`name_${currentLang}` as keyof Test] as string,
      description: test[`description_${currentLang}` as keyof Test] as string,
      modalDescription: test[`modalDescription_${currentLang}` as keyof Test] as string,
      link: test.link
    }));
  }

  openModal(test: { name: string; modalDescription: string; link: string }): void {
    this.modalTitle = test.name;
    this.modalDescription = test.modalDescription;
    this.modalLink = test.link;
    this.dialog.open(this.modalTemplate);
  }

  closeModal(): void {
    this.dialog.closeAll();
  }
}
