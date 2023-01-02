import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name1="TODO list";
  img1="assets/TodoList.png";
  link1="https://naveen027.github.io/Todolist/";
  
  name2="Calculator";
  img2= "assets/Calculator.png";
  link2="https://naveen027.github.io/calculator.github.io/";

  name3="To see other projects....";
  img3="assets/GitHub-Mark.png";
  link3="https://github.com/Naveen027?tab=repositories";
}
