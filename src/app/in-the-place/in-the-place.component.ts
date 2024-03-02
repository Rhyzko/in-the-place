import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ActivatedRoute, Router } from '@angular/router';
import { getDateOfWeek, getWeekdays, getWeekNumber } from '../shared/dateUtils';
import { WeekBannerComponent } from "./week-banner/week-banner.component";
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'in-the-place',
  standalone: true,
  templateUrl: './in-the-place.component.html',
  styleUrl: './in-the-place.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule, FieldsetModule, ButtonModule, TableModule, DropdownModule,
    WeekBannerComponent
  ]
})
export class InThePlaceComponent {

  title = 'in-the-place';
  weekId = 0;
  year = 0;
  dateNow = new Date()
  refWeekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
  dayTypes = ['TT', 'ALEC', 'CP', 'RTT']
  selectedType = ''
  weekDays = [...this.refWeekDays]

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.weekId = parseInt(this.route.snapshot.paramMap.get('week') || '0');
    this.year = parseInt(this.route.snapshot.paramMap.get('year') || '0');
    if (!this.weekId) {
      this.weekId = getWeekNumber();
    }
    this.weekDays = this.refWeekDays.map((day, index) => {
      return `${day} ${new DatePipe('fr-FR').transform(getWeekdays(this.weekId, this.year)[index], 'dd')}`
    })
    console.log(getWeekdays(this.weekId, this.year))
  }

  weekNumber = getWeekNumber();

  changeWeek(event: { weekNumber: number, year: number }) {
    this.router.navigate(['intheplace', event.year, event.weekNumber]).then(() => {
      this.ngOnInit()
    })
  }

  people = ['Anaïs', 'Arnaud', 'Rafaël', 'Matéo', 'Valérie']
}
