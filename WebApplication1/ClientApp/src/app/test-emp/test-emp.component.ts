import { Component, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { getBaseUrl } from '../../main';




@Component({
  selector: 'app-test-emp',
  templateUrl: './test-emp.component.html',
  styleUrls: ['./test-emp.component.css']
})
export class TestEmpComponent {
  public employeesss: allemp[];
  public operation: oprss[];
  dataStream: Observable<string>


  empForm: FormGroup;
  oprForm: FormGroup;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private formBuilder: FormBuilder

  ) {
    http.get<allemp[]>(baseUrl + 'api/kkk/allemp').subscribe(result => {
      this.employeesss = result;
    }, error => console.error(error));
  }

  ngOnInit() {



    this.empForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });


    this.oprForm = this.formBuilder.group({
      opr1: ['', [Validators.required]],
      opr2: ['', [Validators.required]],
      opr3: [''],
      opr4: ['']
    })

  }
  onButtonClick() {
    alert('Hello from Kendo UI!');
  }

  //onobClick1(sss) {
  //  this.dataStream = new Observable(obserover => {
  //    setTimeout(() => {
  //      obserover.next(sss);
  //    }, 1000);
  //  })
  //  return this.dataStream
  //}



  onSubmit() {
    console.log(this.empForm.value);

    this.http.post(this.baseUrl + "api/kkk/save", this.empForm.value).subscribe(res => {
      console.log(res)

    });
  }

  //onSubmit(http: HttpClient,person: name) {
  //  //this.dataStream = new Observable(obserover => {
  //  //  http.post('your_url', name).subscribe(status => console.log(JSON.stringify(status)));
  //  //})
  //}

  //onobClick(sss) {
  //  this.onobClick1(sss).subscribe(
  //    next => { console.log(next); })
  //}
  onoprSubmit() {
    //alert('ahmed abd elghafar');
    this.http.post(this.baseUrl + "api/kkk/opr", this.oprForm.value).subscribe(ssss => {
      console.log(ssss)

    });
    this.http.get<oprss[]>(this.baseUrl + "api/kkk/disopr").subscribe(ahmed => {
      this.operation = ahmed;
    }, error => console.error(error));

  }
}

interface allemp {
  ids: number;
  name: string;

}

export interface name {
  name1: string;
  name2: string;
}

interface oprss {
  opr1: string;
  opr2: string;
  opr3: number;
  opr4: number;
}
