import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatagridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
