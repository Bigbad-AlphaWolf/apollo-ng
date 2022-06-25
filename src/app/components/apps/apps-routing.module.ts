import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/calendar.app.module').then(m => m.CalendarAppModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/apps.tasklist.module').then(m => m.AppsTaskListModule) },
        { path: 'chat', data: { breadcrumb: 'Chat' }, loadChildren: () => import('./chat/chat.app.module').then(m => m.ChatAppModule) },
        { path: 'files', data: { breadcrumb: 'File Management' }, loadChildren: () => import('./filemanagement/file.app.module').then(m => m.FileAppModule) },
        { path: 'mail', data: { breadcrumb: 'Mail' }, loadChildren: () => import('./mail/apps.mail.module').then(m => m.AppsMailModule) },
        { path: 'kanban', data: { breadcrumb: 'Kanban' }, loadChildren: () => import('./kanban/kanban.app.module').then(m => m.KanbanAppModule) },
        { path: 'blog', data: { breadcrumb: 'Blog' }, loadChildren: () => import('./blog/blog.app.module').then(m => m.BlogAppModule) }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
