export class Model {
    user: string; // 'user' değişkenine tip belirtiliyor
    items: ToDoItem[]; // 'items' değişkenine ToDoItem tipinde dizi olarak tip belirtiliyor
  
    constructor() {
      this.user = 'Nazli';
      this.items = [
        new ToDoItem('Spor', true),
        new ToDoItem('Kahvaltı', false),
        new ToDoItem('Kitap Okumak', false),
        new ToDoItem('Sinema', false),
      ];
    }
  }
  
  export class ToDoItem {
    description: string; // 'description' değişkenine string tipi belirtiliyor
    action: boolean; // 'action' değişkenine boolean tipi belirtiliyor
  
    constructor(description: string, action: boolean) {
      this.description = description;
      this.action = action;
    }
  }
  