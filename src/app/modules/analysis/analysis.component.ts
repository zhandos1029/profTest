import { Component, OnInit } from '@angular/core';
import { ANALYSIS_DATA, TestResult, ProfessionRecommendation } from './analysis-data.component';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  testResults: TestResult[] = [];
  recommendations: ProfessionRecommendation[] = [];

  constructor() {}

  ngOnInit(): void {
    // Load data into component
    this.testResults = ANALYSIS_DATA.testResults;
    this.recommendations = ANALYSIS_DATA.recommendations;
  }
}
