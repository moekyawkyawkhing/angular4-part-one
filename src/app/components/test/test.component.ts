import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public text : string [] = [];
  constructor(private data:DataService) { }

  ngOnInit(): void {
    console.log('ngOnInit work.....');
    this.text= this.data.getData();
  }

  addData(add_data){
    this.data.addData(add_data);
  }

}
