import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem(value: string) {
    if (value != '') {
      this.model.items.push(new ToDoItem(value, false));
    }
  }
}
