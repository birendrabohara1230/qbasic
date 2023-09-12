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
    qns: "<b>Qbasic Statements</b><br>1)Print Statement <h3>a)Print:- It is used to display some message on the console screen.<br>Look the example below:- </h3> ",
    ans: "In order to learn any programming language, first we have learn how to display ouput and take input from the user on that particular language, then other this becomes very easy. That's why first we focus on how to display output in Qbasic language as well as how to take input from user in Qbasic language.<br>a) PRINT Statment <br> It is used to to display output on the console screen/output screen. In Qbasic PRINT statement is used for three purposes <br> ",
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
    exp: "In the above example there are 3 instructions or statement <br>First one:- <b>a = 10</b><br>it means that variable a contains 10 or 10 is stored inside of variable a<br>Second one:- print 'the value of a is '; a. Actually it the combination of 2 statement i.e. <br> 1) print 'the value of a is ' and <br>2) print a <br>But both are combined with semi-colon (;) while combining we have to write print only once.<br>The good news is we know the output of above 1) and 2) statements or instructions and output of both statement or instruction is combined. That's it about print statement.<br>Note:- <br>Whenever we want to display something on the console screen in Qbasic always use PRINT without any doubt.<br><b>Note</b>In Qbasic inplace of <b>PRINT </b> we can also use <b>?</b> both are same.<br>Example:-<br><a href='../images/altprintoutput.png' target='_blank'><img src='../images/altprintoutput.png' width='50%'></a><a href='../images/altprint.png' target='_blank'><img src='../images/altprint.png' width='50%'>",
  },
  {
    qns: "2. Input Statement",
    ans: "Input statement is used to take input i.e data from user during runtime and assings them into variable.<br>How to use it, look at the video below (Note: There is no sound in video)<br><div class='video-container'><video controls><source src='../videos/InputStatement.mp4' type='video/mp4'>Your browser does not support the video tag.</video></div>",
    exp: "In the above video, we learn how to use it while Qbasic program.<br><br>Example:-<br><a href='../images/example6.png' target='_blank'><img src='../images/example6.png' width='50%'></a><a href='../images/outputExample6.png' target='_blank'><img src='../images/outputExample6.png' width='50%'></a><br>Again lets go through example step by step<br>a)First write down INPUT then give some space and inside of double quotation write down what you are asking for from the user. After that give comma(,) or (;) and write down the variable name where you want to store data given by the user during runtime or after running program.In the above example first <br><b>input 'enter the value of a ', a</b><br>will execute. And it will display content of double quotation as it is on the console screen, after that it will for the user. When user type some data on the console screen and press enter button (in our example 50 is typed by user during runtime), then immediately that data date goes inside of variable which is present at the end of input statement (in our case variable <b>a</b> is there).<br>b)Remaining two statement are well known to us.",
  },
  {
    qns: "3. CLS Statement",
    ans: "This statement is used to clear the output of previous program or output of previous statements that executes before CLS statement of Console Screen or Output Screen.",
    exp: "<a href='../images/example7.png' target='_blank'><img src='../images/example7.png' width='50%'></a><a href='../images/outputExample7.png' target='_blank'><img src='../images/outputExample7.png' width='50%'></a><br>In the above example the of First <b>print </b> was cleared by CLS statment present below it. Because of that we saw the output of <b>print</b> present below of CLS statement. I hope you got it."
  },
  {
    qns: '4. END Statement',
    ans: 'This statement is used to end the execution of program.<br><b>Note:-</b>The statement which present below the end statement will not execute.',
    exp: "<a href='../images/example8.png' target='_blank'><img src='../images/example8.png' width='50%'></a><a href='../images/outputExample8.png' target='_blank'><img src='../images/outputExample8.png' width='50%'></a><br>In the above example, there is one statement present below the <b>end</b> statement i.e. <br><b>print 'after end statement'</b> because of that this statement will not execute since the execution of program stops when it reaches to <b>end</b>."
  },
  {
    qns: '5. READ DATA Statement',
    ans: 'This statement is used to assign<b>(put)</b> multiple values<b>(data)</b> into multiple variable.',
    exp: "Let's understand with example<br><a href='../images/example9.png' target='_blank'><img src='../images/example9.png' width='50%'></a><a href='../images/outputExample9.png' target='_blank'><img src='../images/outputExample9.png' width='50%'></a><br>In the above example we are assigning multiple values into multiple variables<b>(In our case three variable and three data are there)</b><br><b>How to use it</b><br>a)Use <b>Read</b> keyword to specify the variable names in which you want to store data and off course separate variable name with the help of <b>comma (,)</b><br>b)Use <b>Data</b> keyword to specify the data that you want to store inside of variable present in <b>Read</b> statement.<br>In the above example there are three variable <b>(a, b, c)</b> in <b>Read</b> statement and in <b>Data</b> statement three values are there <b>(5, 6, 7)</b>. So first value goes inside variable i.e <b>(5 goes inside of variable a in our example)</b><br>Second values goes inside of second variable i.e.<b>(6 goes inside of variable b in our example)</b>. <br>Similarly third values goes inside of third variable i.e. <b>(7 goes inside of variable c in our example)</b>"
  },
  {
    qns: "6. REM Statement",
    ans: "This statement is used to write comment <b>(i.e. useful information about program or certain statements)</b>.<br>The line starting with REM are not converted into machine code. We can <b>REM or ' </b> both are same.<br>To get it better look the example below:-",
    exp: "<a href='../images/rem.png' target='_blank'><img src='../images/rem.png' width='50%'></a><a href='../images/remoutput.png' target='_blank'><img src='../images/remoutput.png' width='50%'><br>In the above example first start with <b>rem</b> and this line will be ignored by interpreter."
  }
];

export default qbasicStatements;
