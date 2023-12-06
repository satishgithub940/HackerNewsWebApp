
import { HackerNewsService } from '../hacker-news.service';
import { Component, ViewChild, OnInit  } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-hackernewslist',
  templateUrl: './hackernewslist.component.html',
  styleUrls: ['./hackernewslist.component.css']
  })
export class HackernewslistComponent  implements OnInit  {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'score', 'type']; // Replace with your column names

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: HackerNewsService) {
    
  }
  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.dataService.getNewStories().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      }
    );
  }
}

