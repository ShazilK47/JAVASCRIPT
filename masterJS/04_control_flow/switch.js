//Switch Case:
//switch case is used to check multiple conditions
//Syntax:
//switch(expression) {
//    case value1:
//        // code block
//        break;
//    case value2:
//        // code block
//        break;
//    default:
//        // code block
//}

const B_month = 11;
switch (B_month) {
  case 1:
    console.log(`January`);
    break;
  case 2:
    console.log(`Feburary`);
    break;
  case 3:
    console.log(`March`);
    break;
  case 4:
    console.log(`April`);
    break;
  case 5:
    console.log(`May`);
    break;
  case 6:
    console.log(`June`);
    break;
  case 7:
    console.log(`July`);
    break;
  case 8:
    console.log(`August`);
    break;
  case 9:
    console.log(`September`);
    break;
  case 10:
    console.log(`October`);
    break;
  case 11:
    console.log(`November`);
    break;
  case 12:
    console.log(`December`);
    break;
  default:
    console.log(`Default value`);
}

// ctrl + shift + alt + down arrow      => to duplicate the data

//Note: if we don't use 'break' keyword then where the condition matches all the code after that will also execute
//expect the 'default'
