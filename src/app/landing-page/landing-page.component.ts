import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../file/connection.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  selectedFile : File=null;
  filename:string;
 constructor(private http:HttpClient,private router:Router,private _service:ConnectionService){}
 onFileSelected(event){
   this.selectedFile = <File>event.target.files[0];
   console.log(event);
 }
 onUpload(){
   const fd = new FormData();
  
   fd.append('image',this.selectedFile,this.selectedFile.name)
   this.http.post<any>('http://localhost:5000/uploader',fd).subscribe((res:any)=>{
       this.filename=res.filename;
     //  this._service.file.next(this.filename);
       this.router.navigate(['file'],{ state: { example: this.filename }} );
      
   })
   // this.http.get('http://localhost:5000/hello').subscribe(res=>{
   //   console.log(res)
   // })
}

  ngOnInit(): void {
  }

}
