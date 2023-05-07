function concat<Type>(a:Type,b:Type):String{

    return `${a}${b}`
}

console.log(concat(10,20));
console.log(concat(null,undefined));


function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
  }

  console.log(loggingIdentity([]));


  //generic interface
  interface GenericFunction{
    <Type>(args:Type):Type;
  }

  function identity<Type>(arg: Type): Type {
    return arg;
  }
 

  // creating a filter function of generic type
  
  interface FilterFunction<Type>{
    (item:Type):boolean
  }
  
  function filter<Type>(arr:Type[],func:FilterFunction<Type>):Type[]{
    return arr.filter(func);
  }

  const myArray: number[] = [1, 2, 3, 4, 5];
const filteredArray = filter(myArray, (item) => item > 2);
console.log(filteredArray);

interface Student {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(user: Partial<User>):void {
    // ...
console.log(user);

    
  }

  updateUser({name:"jagadish"})

  class DataStorage<T> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    getData() {
      return this.data;
    }
  }

  let stringStorage=new DataStorage<String>()
  stringStorage.addItem("ok");
  stringStorage.addItem("not ok");

  let numberDataStorage=new DataStorage<Number>();
  numberDataStorage.addItem(1);
  numberDataStorage.addItem(2);

  console.log(stringStorage);
  console.log(numberDataStorage);
  
  

  
