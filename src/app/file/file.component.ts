import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from './connection.service';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
 
})
export class FileComponent implements OnInit {
  appRoot=environment.appRoot;
 filename:string
  constructor(private router:Router,private route:ActivatedRoute,private _service:ConnectionService) { 
    this.filename=this.router.getCurrentNavigation().extras.state.example; 
  }
  
  ngOnInit(): void {
  
  
  }

}
