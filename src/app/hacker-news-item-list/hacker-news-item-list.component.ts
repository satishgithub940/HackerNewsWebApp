import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HackerNewsService } from '../hacker-news.service';
import { LoaderService } from '../loader.service';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

export interface UserData {
  title: string;
  score: string;
  type: string;
  url: string;
}

@Component({
  selector: 'app-hacker-news-item-list',
  templateUrl: './hacker-news-item-list.component.html',
  styleUrls: ['./hacker-news-item-list.component.css'],
  standalone: true,
  imports: [CommonModule,LoaderComponent,MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class HackerNewsItemListComponent {
  childComponent: LoaderComponent = new LoaderComponent();
  isLoading: boolean = false;
  displayedColumns: string[] =['title', 'score', 'type','url'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: HackerNewsService, private loaderService: LoaderService) {
    this.dataSource = new MatTableDataSource();
    this.isLoading = true;
  }


  ngAfterViewInit() {
  
    this.dataService.getNewStories().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
        console.log(data);
      });
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
