import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  public text : string [] = [];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.text= this.data.getData();
  } 

  addData(add_data){
    this.data.addData(add_data);
  }

}
