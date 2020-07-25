import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First post', content: 'This is first posts\'s content'},
  //   {title: 'Second post', content: 'This is Second posts\'s content'},
  //   {title: 'Third post', content: 'This is Third posts\'s content'}
  // ];
  @Input() posts = [];
}
