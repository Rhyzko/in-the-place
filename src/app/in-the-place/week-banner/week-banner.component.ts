import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'week-banner',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './week-banner.component.html',
  styleUrl: './week-banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekBannerComponent {
  @Input() weekNumber!: number;
  @Input() year!: number;
  @Output() weekChange = new EventEmitter<{ weekNumber: number, year: number }>();

  constructor() { }

  ngOnInit() {
  }

  navigatePreviousWeek() {
    if (this.weekNumber === 1) {
      this.weekChange.emit({ weekNumber: 52, year: this.year - 1 })
    } else {
      this.weekChange.emit({ weekNumber: this.weekNumber - 1, year: this.year })
    }
  }

  navigateNextWeek() {
    if (this.weekNumber === 52) {
      this.weekChange.emit({ weekNumber: 1, year: this.year + 1 })
    } else {
      this.weekChange.emit({ weekNumber: this.weekNumber + 1, year: this.year })
    }
  }
}

