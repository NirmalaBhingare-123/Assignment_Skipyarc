import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  c1: boolean = false;
  c2: boolean = false;
  c3: boolean = false;
  c4: boolean = false;
  userDetails = [];
  editData = {
    firstName: "",
    lastName: "",
    dateOfBirth: ""
  };
  city = [
    { id: 1, name: "Pune" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "surat" }
  ];
  constructor() {}

  ngOnInit() {}

  submitInfo(value) {
    console.log("all info", value);
    this.userDetails.push(value);
    this.editData.firstName = " ";
  }
  editElement(data) {
    this.editData.firstName = data.fname;
  }
}
