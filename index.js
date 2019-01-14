window.addEventListener("load", () => {
  //start your code here
    // let length = getElementById("length");
    
    
  function passwordGenerator(len){
    let charset1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let charset2 = ["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let charset3 = ["0","1","2","3","4","5","6","7","8","9"];
    let charset4 = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","/","]","^","_","{","|","}","~"];
    
    
    let allCharacters = [...charset1,...charset2,...charset3,...charset4];
    console.log(allCharacters);

    let password="";
    
    for (var i=0 ; i < len; i++){
      let length2 = Math.floor(Math.random() * allCharacters.length);
      
      password += allCharacters[length2];
      console.log(length2);
    }
    return password;
  }
  
  console.log(passwordGenerator(7));
  document.getElementById("result").innerHTML = passwordGenerator(length);
});
