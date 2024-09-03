import { Component, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Issue } from '../types/issue';
import { Columns } from '../types/columns';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent {
  @Input() columns: Columns[] = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'priority', label: 'Priority', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'owner', label: 'Owner', sortable: true }
  ];

  @Input() data: Issue[] = [
    { id: 1, priority: 'high', status: 'open', owner: 'John' },
    { id: 2, priority: 'medium', status: 'in progress', owner: 'Jane' },
    { id: 3, priority: 'low', status: 'open', owner: 'John' },
    { id: 4, priority: 'high', status: 'in progress', owner: 'Jane' },
    { id: 5, priority: 'medium', status: 'in progress', owner: 'John' }
  ];

  displayedColumns: string[] = this.columns.map((column) => column.key);

  dataSource = new DatagridDataSource<Issue>(this.data);
}

export class DatagridDataSource<T> extends DataSource<T> {
  constructor(private data: T[]) {
    super();
  }

  connect(): Observable<T[]> {
    return new BehaviorSubject<T[]>(this.data);
  }

  disconnect() {}
}
