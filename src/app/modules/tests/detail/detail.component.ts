import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TEST_DETAILS, Question, TEST_RESULTS} from './detail-data.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  testTitle = '';
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedOption: number | null = null;
  score = 0;
  remainingTime = 300;
  timerInterval: any;
  isFinished = false;
  spentTime = 0;


  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    const testKey = this.route.snapshot.paramMap.get('testKey');
    const testData = TEST_DETAILS[testKey || ''];
    console.log(testKey, testData , "123123")

    if (!testData) {
      this.router.navigate(['/tests']);
      return;
    }

    this.testTitle = testData.title;
    this.questions = testData.questions;

    this.startTimer();
  }

  getAdvice(score: number): { emoji: string; title: string; advice: string } {
    const testKey = this.route.snapshot.paramMap.get('testKey');
    if (testKey && TEST_RESULTS[testKey]) {
      if (score === this.questions.length) return TEST_RESULTS[testKey][5];
      if (score >= 3) return TEST_RESULTS[testKey][3];
      return TEST_RESULTS[testKey][0];
    }
    return { emoji: '❓', title: 'Результат неизвестен', advice: 'Обратитесь к администратору.' };
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion(): void {
    if (this.selectedOption === this.currentQuestion.correctAnswer) {
      this.score++;
    }
    this.selectedOption = null;

    if (this.currentQuestionIndex + 1 < this.questions.length) {
      this.currentQuestionIndex++;
    } else {
      this.finishTest();
    }
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        this.finishTest();
      }
    }, 1000);
  }

  finishTest(): void {
    clearInterval(this.timerInterval);
    this.isFinished = true;

    // Вычисляем затраченное время
    this.spentTime = 300 - this.remainingTime; // Общее время (300 секунд) минус оставшееся

    if (this.remainingTime <= 0) {
      alert('Время вышло! Вы будете перенаправлены обратно к тестам.');
      this.router.navigate(['/tests']);
    }
  }
}
