var userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Secret number //

var secret = 20;

// Use (+) for the first combination code
combination1 = secret + 15;

// Use (-) for the second combination code
combination2 = secret - 5;

// Use (/) for the third combination code

combination3 = secret / 4;

// final resuft 

final = userMessage + "\n\ncombination1 number is  " + combination1 + "\ncombination2 number is " + combination2 + "\ncombination3 number is " + combination3;

// print the message 

alert(final)
