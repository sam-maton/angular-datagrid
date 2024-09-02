import { Component, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Issue } from '../types/issue';
import { Columns } from '../types/columns';

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

  displayedColumns: string[] = this.columns.map((column) => column.key);
}
