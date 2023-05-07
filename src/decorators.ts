function logClassName(target: any) {
    console.log(target.constructor.name);
  }
   
  @logClassName
  class MyClass {
    constructor() {}
  }
  

const myObject=new MyClass();



function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        
        
        
      console.log("first(): called");
    };
  }
   
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {}
  }


//   decorator for validation to check if first argument of a function is a number or not

function validateFirstArgs(target:any,key:string,descriptor:PropertyDescriptor){
    console.log(target);
    
    const originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]){
        const arg1=args[0];
        if(typeof arg1 !=='number'){
            throw new Error('firt argument of method is not a number');
        }
        return originalMethod.apply(this,args)
    }
    return descriptor;
}