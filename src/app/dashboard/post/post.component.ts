import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog} from '@angular/material/dialog'
import { NewPostComponent } from '../new-post/new-post.component';
import { PostService } from 'src/app/core/services/post.service';
import { postdata } from 'src/app/core/model/post';

export interface UserData {
  id?: string;
  name?: string;
  progress?: string;
  fruit?: string;
  src?:string
}



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  implements AfterViewInit ,OnInit {

  dataSource!:MatTableDataSource<postdata> ;
  displayedColumns: string[] = ['id', 'name', 'description', 'imgUrl' ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   userData:UserData[]  = [
    {
      id: '1',
      name: 'akshay',
      progress: '45',
      fruit: 'pineapple',
      src:'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
    },
    
    {
      id: '4',
      name: 'bitu',
      progress: '45',
      fruit: 'kiwi',
      src:'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'

    }    

  ]

  postData!:postdata[] ;

  constructor( private dialog:MatDialog,private _postService:PostService   ){
    this.getPosts()
    // this.dataSource = new MatTableDataSource(this.userData);
    // this.dataSource = new MatTableDataSource(this.postData)
    
  }

  
  ngOnInit(): void {

    // if(this.postData){
    //   this.dataSource = new MatTableDataSource(this.postData)
    // }
    
    // console.log(this.dataSource,'datasource')
  }

  

  

  ngAfterViewInit(): void {

    
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  addpost(){
    let dialogRef = this.dialog.open(NewPostComponent
      ,
      {
        height: '600px',
        width: '900px',
      }
      )
  }


  getPosts(){
    this._postService.getPost().subscribe(res => {
      console.log(res)
      if(res){
        this.postData = res;  
        console.log(this.postData)
        this.dataSource = new MatTableDataSource(this.postData)
      }
         
      let data:postdata[] = [...res]
      let id = data[0].data.description;
      console.log(id,'hello') 
      // console.log(data.data.imgUrl)
      // console.log(res?.id)

    

      
      

    }  )
  }

}
