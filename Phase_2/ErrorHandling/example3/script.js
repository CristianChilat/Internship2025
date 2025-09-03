let errorMessage = new Error("You have an error!");
let syntaxErrorMessage = new SyntaxError("You have syntax error!");
let referenceErrorMessage = new ReferenceError("You have a reference error!");

alert(errorMessage);
alert(syntaxErrorMessage);
alert(referenceErrorMessage);