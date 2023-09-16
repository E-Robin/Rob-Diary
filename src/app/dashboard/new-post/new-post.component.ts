import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/core/model/post';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  postForm!:FormGroup;
  // previewImg = ''
  previewImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&usqp=CAU';
  selectedPostImg :any;


  constructor( private _postService:PostService  ,
    //  private dialogRef:MatDialogRef<NewPostComponent> 
     
     ){
    

  }

  ngOnInit(){

    this.postForm = new FormGroup({
      name : new FormControl(['']),
      imgpost : new FormControl(''),
      description: new FormControl('')
    })


  }


  upload(event:any){

    if(event.target.files.length){

      let file:File = event.target.files[0];
      this.selectedPostImg = file;

      // to show file in preview
      const reader  = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = ()=>{
        this.previewImg = reader.result as string;
      }
      
    }
    console.log(event)
    console.log(event.target.files[0])
  }



  submit(data:any)
{
  console.log(data)

  const postData:Post = {
    name: data.name,
    description: data.description,
    imgUrl: ''
  } 

  this._postService.storePost(postData,this.selectedPostImg)

  // this.dialogRef.close()


}

}
