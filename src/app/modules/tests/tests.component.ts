import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  modalTitle: string = '';
  modalDescription: string = '';
  modalLink: string = '';

  constructor(public dialog: MatDialog) {}

  openModal(title: string, description: string, link: string): void {
    this.modalTitle = title;
    this.modalDescription = description;
    this.modalLink = link;
    this.dialog.open(this.modalTemplate);
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

}
