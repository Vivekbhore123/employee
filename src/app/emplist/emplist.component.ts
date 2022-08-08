import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstName:string = "Nick";
  gender:string = "Male";
  title:string="angularjs"
  age:Number = 23;
  pin:Number = 332211;
  showcolor:boolean=true;


  tableEmp:boolean = true;

  testing():string{
       console.log("jnnfjnefjen");
       this.firstName = "leonardo dicaprio"
       return "I am vivek hello"
  }
 
  
 employees:any[]=[
       { code:"1",fname:"tom",mname:"mdtom",lname:"ljsjd",age:34,gender:"male",dob:"14/11/2000",address1:"mumbai",address2:"delhi" },
       { code:"2",fname:"jerry",mname:"niel",lname:"shri",age:34,gender:"female",dob:"1/1/2000",address1:"patna",address2:"spain" },
       { code:"3",fname:"sinchan",mname:"dom",lname:"shaw",age:34,gender:"male",dob:"23/8/2000",address1:"banaras",address2:"tokyo" },
      
     ]

    getAllCount():Number{
     return this.employees.length;
    } 

    getAllMaleCount():Number{
      return this.employees.filter(e=>e.gender=="male").length;
    }

    getAllFeMaleCount():Number{
     return this.employees.filter(e=>e.gender=="female").length;
   }

   
   
   rbselect:string="all";

   radioButtonSelectionCh(value:string){
     //parent 
     console.log("value from parent = ",value);
      this.rbselect = value;
   }

}
