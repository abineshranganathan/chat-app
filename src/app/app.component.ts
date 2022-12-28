import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat-app';
  observable = new Observable((observer) => {
    console.log("Observable started");
    observer.next("1");
    observer.next("2");
    observer.error(new Error("Some thing went wrong"));
    observer.next("4");
    observer.next("5");
    observer.complete();
  });

  // ngOnInit(){
  //   this.observable.subscribe((res) => {
  //       console.log(res)
  //   }, (err) => {
  //     console.log(err.message);
  //   }, ()=> {
  //     console.log("Over")
  //   });
  // }

  newObservable = new Observable((observer) => {
    observer.next(this.getAllValues());
    observer.next("1");
    observer.next(this.getAllValuesInObs());
    observer.next("4");
    observer.next("5");
    observer.next("4");
    observer.next(this.getAllValuesInObs());
    observer.next("5");
  });

  getAllValues(){
    return ['a', 'b', 'c', 'd']
  }
  getAllValuesInObs(){
    let a= new Observable((observer) => { observer.next(['a', 'b', 'c', 'd' ,'e'])})
    let b  = ['1', '2', '3', '4','5']
    let c: string[] = []
    a.forEach(i => {
      b.forEach(j => {
        c.push(`${i+j}`)
      })
    })
    return c;
  }

  ngOnInit(){
    this.newObservable.subscribe(res => {
      console.log(res)
    })
  }

}
