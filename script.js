let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(element => {
      if(element.profession === "developer"){
        console.log(element);
      }});
      console.log("********************************************");
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(element => {
      if(element.profession === "developer"){
        console.log(element);
      }});
      console.log("********************************************");
  }
  
  function addData() {
    //Write your code here, just console.log
    const newObj = { id: 4, name: "bob", age: "18", profession: "student" }
    const newArr = arr.push(newObj);
    console.log(newObj);
    console.log("********************************************");
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const newArr = arr.filter(element => {
      if(element.profession !== "admin"){
        return(element);
      }});
      console.log(newArr);
      console.log("********************************************");
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray =  [
      { id: 5, name: "Ronaldo", age: "38", profession: "footballer" },
      { id: 6, name: "Messi", age: "35", profession: "footballer" },
      { id: 7, name: "Embappe", age: "24", profession: "footballer" },
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }