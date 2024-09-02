import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
import { Issue } from './types/issue';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatagridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  issues : Issue[]= [
    {id: 1, priority: 'high', status: 'open', owner: 'John'},
    {id: 2, priority: 'medium', status: 'in progress', owner: 'Jane'},
    {id: 3, priority: 'low', status: 'open', owner: 'John'},
    {id: 4, priority: 'high', status: 'in progress', owner: 'Jane'},
    {id: 5, priority: 'medium', status: 'in progress', owner: 'John'},
  ]
}
