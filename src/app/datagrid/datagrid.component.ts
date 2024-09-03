import { Component, Input } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import { Columns } from '../types/columns';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [CdkTableModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent<D, C> {
  @Input() columns: Columns[] = [];
  @Input() data: D[] = [];

  displayedColumns: string[] = [];
  dataSource = new DatagridDataSource<D>([]);

  ngOnInit() {
    this.displayedColumns = this.columns.map((column) => column.key);
    this.dataSource = new DatagridDataSource<D>(this.data);
  }
}

export class DatagridDataSource<T> extends DataSource<T> {
  constructor(private data: T[]) {
    super();
    console.log(this.data);
  }

  connect(): Observable<T[]> {
    return new BehaviorSubject<T[]>(this.data);
  }

  disconnect() {}
}
