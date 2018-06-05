import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Hindi', 'Other'];
  model = new Employee('Loveleen', 'Kaur', true, 'w2', 'English');

}
