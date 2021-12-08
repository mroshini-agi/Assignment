//ARROW FUNCTION

let sum = (x: number, y: number): number => {
    return x + y;
}
sum(10, 20);

//INTERFACES

interface Basic {
    firstName: string;
    lastName: string;
    wish: () => string;
  }
  
  interface Place {
    address: string;
    email: string;
    addr: () => string;
  }
  
  var Info: Basic = {
    firstName: "Rosh",
    lastName: "Jadav",
    wish: (): string => {
      return "Hi there";
    }
  };
  
  console.log("Basic Information :");
  console.log(Info.firstName);
  console.log(Info.lastName);
  console.log(Info.wish());
  
  var employee: Place = {
    address: "Mysore",
    email: "abc",
    addr: (): string => {
      return "Hello!!!";
    }
  };
  
  console.log("Address : ");
  console.log(employee.address);
  console.log(employee.email);
  