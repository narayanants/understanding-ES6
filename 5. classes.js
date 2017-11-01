/* Classes => self aware */

'use strict';

class Person {
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    
    displayWeight(){
        console.log(this.weight);   //acces to object attributes
    }
}


let bucky = new Person('Narayanan',24,5460);
let vicky = new Person('Vicky',21,2350);
bucky.displayWeight();
vicky.displayWeight();


class Police{
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }


    displayheight(){
        console.olog()
    }
}





class Police{
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayheight(){
        console.log(this.weight);
    }
}


let narayanan = new Police('Gokul',23,5432);
narayanan.displayheight();