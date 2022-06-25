import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Blog } from 'src/app/api/blog';

@Component({
    selector: 'app-blogedit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['../blog-list/blog-list.component.scss']
})

export class BlogEditComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;

    text: string;

    blog: Blog = {
        name: '',
        code: '',
        description: '',
        status: '',
        tags: ['Sports']
    };

    uploadedFiles: any[] = [];

    showRemove = false;

    onChipRemove(item) {
        this.blog.tags = this.blog.tags.filter(i => i !== item);
      }

    onUpload(event) {
        if(event && event.files.length > 0) {
            this.blog.coverImage = event.files[0];
        }
    }

    removeImage() {
        this.blog.coverImage = null;
    }

}
