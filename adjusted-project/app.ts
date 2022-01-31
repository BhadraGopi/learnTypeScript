  let userinput :unknown;
  let anyUserInput : any;
  let userName: string;

  userinput=9; userinput='tom';
  anyUserInput=54;
  //any type of values can be assigned but its diff from any type
 // userName=userinput; //ERROR 
 userName=anyUserInput;//No error viz the main diff
 //Inorder to avoid the error while using unknown just check the type bfore using
 if(typeof userinput === 'string'){
     userName= userinput;
     //Here userinput is guarenteed to be a string here
 }
 //Unknown is better than any because a slight amount of type control is still provided