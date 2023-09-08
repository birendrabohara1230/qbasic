const qbasicStatements = [
  {
    qns: "Variable & Data",
    ans: "Variable are container which are used to store data while writing programs.",
    exp: "let us suppose <br> a = 100, it means that 100 goes inside of variable a. To understand better look at the figure, where is a the name of variable that act as container and data in this case is 100 which is stored inside of container <br><a href='../images/variable.png' target='_blank'><img src='../images/variable.png' width='25%'></a> ",
  },
  {
    qns: "Types of variable & data",
    ans: "<a href='../images/typesofvariableanddata.png' target='_blank'><img src='../images/typesofvariableanddata.png' width='40%'></a> ",
    exp: 'Note:<ol><li>String variable always ends with $ symbol.</li><li>String data are always present inside of double quotation i.e. " "</li><li>String means combination of any things i.e. characters, numbers, special symbols or all. For example "Ram", "Ram123", "ram@#13", "12334", "@#$@#123", etc these all the examples of string.</li></ol>',
  },
  {
    qns: "Rules of writing variable name:-",
    ans: "We can not use any name as a variable name. There are some rules of choosing the variable name.",
    exp: "Rules<ol><li>Variable name must start with alphabet i.e. a - z or A - Z</li><li>Blank space are not allowed between variable name</li><li>Keywords are not allowed to use as a variable name</li><li>Variable name length must be within 40 characters long.</li></ol>",
  },
  {
    qns: "<b>Qbasic Statements </b><h2>a)Print:- It is used to display some message on the console screen. </h2> Look the example below:-",
    ans: " <br><h3>In order to learn any programming language, first we have learn how to display ouput and take input from the user on that particular language, then other this becomes very easy. That's why first we focus on how to display output in Qbasic language as well as how to take input from user in Qbasic language.</h3><br>1. PRINT Statment <br> It is used to to display output on the console screen/output screen. In Qbasic PRINT statement is used for three purposes <br> ",
    exp: "<a href='../images/example1.png' target='_blank'><img src='../images/example1.png' width='50%'></a><a href='../images/outputExample1.png' target='_blank'><img src='../images/outputExample1.png' width='50%'></a> <br>In the above example PRINT statement is used to display message i.e. in PRINT '<u>Hello, World</u>' statement underlined part or content inside of double quotation is called message or string whatever you say. The content present inside of double quotation will be printed on the console screen as it is without changing anything. <br> So if you want to display something on the console screen or output screen use this version of PRINT statement. <br><b>How to use it</b> <br> First write down PRINT then give some space and open the double quotation, then write down what you want to display, then close the double quotation. That's it.<br><br>See the second example<br><a href='../images/example2.png' target='_blank'><img src='../images/example2.png' width='50%'></a><a href='../images/outputExample2.png' target='_blank'><img src='../images/outputExample2.png' width='50%'></a><br>I hope you know why we got this as a output.<br>This program contains three instructions or statements.<br>First is:- <b>print 'kanchanpur =>'</b> and we know message in this statement is 'kanchanpur =>' which will be printed as it is on console screen because of that we got ouput kanchanpur => on the first line of console screen. <br> Similarly second statement is:- <b>print 'Mahendranagar, katan'</b> and we know message in this statement is 'Mahendranagar, katan' which will be printed as it is on console screen because of that we got ouput Mahendranagar, katan on the second line of console screen.",
  },
  {
    qns: "b)Print:- It is used to display the content of variable on console screen.",
    ans: "<a href='../images/example3.png' target='_blank'><img src='../images/example3.png' width='50%'></a><a href='../images/outputExample3.png' target='_blank'><img src='../images/outputExample3.png' width='50%'></a>",
    exp: "In the above example a = 50 means 50 goes inside of variable a or 50 is stored inside of variable a. If you want to display the content of the variable <b>a</b> on the console screen, then again we have to used PRINT statement. For that first write down PRINT statement then give some space and write down the name of variable whose content you want to display on the console screen.<br>If we write variable name after print statement, then the content of variable will be displayed on the console screen <br>Note:<br>1) Do not put variable name inside of any type of quotation.<br>2) If there are more than one variable, then separate them with comma (,)<br>Look the example below<br>     <a href='../images/example4.png' target='_blank'><img src='../images/example4.png' width='50%'></a><a href='../images/outputExample4.png' target='_blank'><img src='../images/outputExample4.png' width='50%'></a>",
  },
  {
    qns: "c)Print:- It is the combination of the (a) and (b) i.e. it is used to display message along with the content of variable at the same time.",
    ans: "<a href='../images/example5.png' target='_blank'><img src='../images/example5.png' width='50%'></a><a href='../images/outputExample5.png' target='_blank'><img src='../images/outputExample5.png' width='50%'></a>",
    exp: "In the above example there are 3 instructions or statement <br>First one:- <b>a = 10</b><br>it means that variable a contains 10 or 10 is stored inside of variable a<br>Second one:- print 'the value of a is '; a. Actually it the combination of 2 statement i.e. <br> 1) print 'the value of a is ' and <br>2) print a <br>But both are combined with semi-colon (;) while combining we have to write print only once.<br>The good news is we know the output of above 1) and 2) statements or instructions and output of both statement or instruction is combined. That's it about print statement.<br>Note:- <br>Whenever we want to display something on the console screen in Qbasic always use PRINT without any doubt.",
  },
  {
    qns: "2. Input Statement",
    ans: "Input statement is used to take input i.e data from user during runtime and assings them into variable.<br>How to use it, look at the video below (Note: There is no sound in video)",
    exp: "",
  },
];

export default qbasicStatements;
