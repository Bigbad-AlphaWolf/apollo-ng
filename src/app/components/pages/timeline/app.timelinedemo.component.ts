import { Component } from '@angular/core';

@Component({
    templateUrl: './app.timelinedemo.component.html',
})
export class AppTimelineDemoComponent {

    selectedIndex: number;

    timelineContent = [
        {icon: 'pi pi-fw pi-book', title: 'Breakfast', info:'Aliquam diam vitae luctus tempor.'},
        {icon: 'pi pi-fw pi-sun', title: 'Morning', info:'Placerat quis fames aenean cursus commodo morbi.'},
        {icon: 'pi pi-fw pi-thumbs-up', title: 'Lunch', info:'Nec egestas mauris tincidunt tristique ut cum.'},
        {icon: 'pi pi-fw pi-video', title: 'Afternoon', info:'Nec egestas mauris tincidunt tristique ut cum.'},
        {icon: 'pi pi-fw pi-th-large', title: 'Supper', info:'Nec egestas mauris tincidunt tristique ut cum.'},
        {icon: 'pi pi-fw pi-link', title: 'Evening', info:'Nec egestas mauris tincidunt tristique ut cum.'}
    ];
}