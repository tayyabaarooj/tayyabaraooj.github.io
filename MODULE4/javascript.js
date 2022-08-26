// module 4 assignment 
var names=new Array();
names[0]="Yaakov";
names[1]="Sam";
names[2]="David";
names[3]="John";
names[4]="PAUL";
names[5]="Curham";
names[6]="Jack";
names[7]="jim";
names[8]="Coursera";
for(var i =0; i <names.length; i++) {
  if (names[i].charAt(0)=='J' || names[i].charAt(0)=='j')
{console.log("Goodbye  " + names[i])
}
else{
console.log("HELLO  " + names[i])
}
}