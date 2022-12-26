import { Component } from '@angular/core';

@Component({
  selector: 'app-right-item',
  templateUrl: './right-item.component.html',
  styleUrls: ['./right-item.component.css']
})
export class RightItemComponent {
  sendItemsData = [
    {'name': 'Gemma Roberson',
      'footer': 'Apology for late respone email',
      'header': 'Hello Collete Wooten'
    },

    {'name': 'Anna Gazra',
      'footer': 'Apology for Job Title',
      'header': 'Hello Kerry Best'
    },

    {'name': 'Alfonso Burnett',
      'footer': 'Anything I can help with',
      'header': 'Hello Otto Ashley'
    },

  ]
}
