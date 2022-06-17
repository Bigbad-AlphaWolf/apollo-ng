import { Component } from '@angular/core';

@Component({
    selector: 'app-app.overview',
    templateUrl: './app.overview.component.html',
})

export class AppOverviewComponent {

    selectedDate:number;

    days: any[];

    selectedDay: any;

    selectedWeek: any;

    week: any[];

    constructor() {
        this.days = [
            { name: 'Sunday' },
            { name: 'Monday' },
            { name: 'Tuesday' },
            { name: 'Wednesday' },
            { name: 'Thursday' },
            { name: 'Friday' },
            { name: 'Saturday' }
        ];

        this.week = [
            { name: 'Week 1' },
            { name: 'Week 2' },

        ];
    }


}

