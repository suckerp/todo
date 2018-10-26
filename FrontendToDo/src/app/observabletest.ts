import * as rx from 'rxjs'
import * as op from 'rxjs/operators'




const myObservable = rx.of(1,2,3)

const myObservable2 = rx.Observable.create((observer)=>{
    let wiederhole = 1
    while (wiederhole > 0.1){
        wiederhole = Math.random()
            if (wiederhole<0.75) observer.next(wiederhole)
            else observer.error(wiederhole)

        }
    observer.complete()
    //nach dem complete kommt nix mehr
    observer.next(55)
    }
)

/*
const myObservable2 = rx.Observable.create((observer)=>{
    let wiederhole = 1
    while (wiederhole > 0.1){
        wiederhole = Math.random()
        new Promise ((resolve, reject)=>{
            setInterval(()=>{
                let test = Math.random()
                if (test<1){
                    resolve(observer.next(test))
                }
                else{
                    reject(observer.error(test))
                }
            }, 1000)
        })
    }
    setTimeout(()=>{observer.complete()},6000)
})*/

myObservable
    //Manipulation von Daten mit .pipe()
    .pipe(
        //op.map(function(x){return x+1}),
        op.map(x=>x+1),
        op.filter(x=>x!=2)
    )
    .subscribe(
        // 1 Callback-Funktion für den Erfolgsfall
        result=>{console.log(result)},
        // 2 Callback-Funktion für den Fehlerfall
        //Beim ersten Fehler ist das Observable geschlossen
        error=>{console.log(error)},
        // 3. Callback-Funktion wir nach Beendigung ausgeführt (kalt)
        ()=>{console.log("fertig")}
    )



myObservable2
    .subscribe(
        result=>{console.log(result)},
        error=>{console.log(error)},
        ()=>{console.log("fertig")}
    )
    .unsubscribe()



