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
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    city: "",
    gender: "",
    description: ""
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
    console.log(".......", value.c1);
    if (value.gender == "true") {
      value.gender = "Male";
    } else {
      value.gender = "Female";
    }
    if (value.c1 == true) {
      value.c1 = "MCS";
    } else {
      value.c1 = " ";
    }
    this.userDetails.push(value);
    this.editData.firstName = " ";
    this.editData.middleName = "";
    this.editData.lastName = "";
    this.editData.dateOfBirth = "";
    this.editData.c1 = "";
    this.editData.c2 = "";
    this.editData.c3 = "";
    this.editData.c4 = "";
    this.editData.city = "";
    this.editData.gender = "";
    this.editData.description = "";
  }
  editElement(data) {
    this.editData.firstName = data.fname;
    this.editData.middleName = data.mname;
    this.editData.lastName = data.lname;
    this.editData.dateOfBirth = data.dob;
    this.editData.c1 = data.c1;
    this.editData.c2 = data.c2;
    this.editData.c3 = data.c3;
    this.editData.c4 = data.c4;
    this.editData.city = data.city;
    this.editData.gender = data.gender;
    this.editData.description = data.desc;
  }
}
