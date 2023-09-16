import { Injectable } from '@angular/core';
import { Post, postdata } from '../model/post';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, tap } from 'rxjs';
 

@Injectable({
  providedIn:'root'
})
export class PostService {

  constructor( 
    private storage:AngularFireStorage ,private _afs:AngularFirestore
    ,private toast:ToastrService 
    
    ) { }

  storePost(postData:any , file:any){

    if(file){
      const path = `IMG_PATH${Date.now()}`
      

      this.storage.upload(path, file).then((res: any) => {
        console.log(res,'fiile is updated' )
        
        this.storage.ref(path).getDownloadURL().subscribe((res: any) => {

          postData.imgUrl = res;

          this._afs.collection('post').add(postData).then((res)=>{
            console.log(),
            this.toast.success('Post Added successfully')
          }

          ).catch((err)=>{
            console.log(err);
            this.toast.error('Post Failed')
          
          })

        })
      }
      )
    }
    
  }


  getPost():Observable<postdata[]>  {

    return  this._afs.collection('post').snapshotChanges().pipe(tap((res:any)=> {
      console.log(res)
    }  ),map( (res) => {
       return res.map( (a:any) =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id

        return { id , data  }
       })
    } ) )
  }
}
