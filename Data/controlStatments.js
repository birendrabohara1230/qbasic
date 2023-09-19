const controlStatements = [
    {
        qns: 'Introduction to Control Statements',
        ans: "So far we have gone through tones of example of Qbasic program. And we also know that the flow of program <b>(Order of execution of instruction)</b> begins from top and ends with last instruction.<br><a href='../images/controlstatement1.png' target='_blank'><img src='../images/controlstatement1.png' width='50%'></a>",
        exp: "What if we want to change the flow of program <b>(i.e. the execution order of instructions)</b> as our wish or need. For this we have to use the concept of control statement. Control statement have the ability to change the order of execution of instruction."
    }, 
    {
        qns: 'Control Statement',
        ans: "Control statement are the statement which helps us to change the execution order of instructions. To understand it better just look at the photo below:-",
        exp: "<a href='../images/controlstatement2.png' target='_blank'><img src='../images/controlstatement2.png' width='50%'></a>"
    },
    {
        qns: "Types of Control Statements",
        ans: "There are 3 types of control statements in all programming language not only in Qbasic. They are <br><b>a)</b>Conditional/Selectional/Branching Control Statement<br><b>b)</b>Looping Control Statement<br><b>c)</b>Jumping Statement",
        exp: ''
    },
    {
        qns: "Conditional/Sectional/Branching Control Statement",
        ans: "Conditional control statement are the statement that executes block <b>(i.e. all collection of more than one instruction)</b> of instructions based on condition. If the mentioned condition is true, then it execute that block of code. If the condition false it does not execute that block of code.",
        exp: "Example 1:-<br><a href='../images/controlstatement3.png' target='_blank'><img src='../images/controlstatement3.png' width='50%'></a><br>In the above example, we can clearly see that the flow of program changes based on <b>Condition</b> which is present in the <b>Conditional Control Statement.</b>"
    },
    {
        qns: "Types of Conditional Control Statement",
        ans: "There are 4 types of Conditional Control Statement<br><b>a)</b>if ... then<br><b>b)</b></b>if ... else<br><b>c)</b>if ... elseif<br><b>d)</b>Switch Conditional Statement",
        exp: ''
    },
    {
        qns: "if ... then Conditional Control Statement",
        ans: "This is a conditional statement which executes a block of code if the mentioned condition is true, else it will not execute that block of code.<br><a href='../images/ifthensyntax.png' target='_blank'><img src='../images/ifthensyntax.png' width='50%'></a>",
        exp: "<a href='../images/ifthen1.png' target='_blank'><img src='../images/ifthen1.png' width='50%'></a><a href='../images/outputcontrolstatement4.png' target='_blank'><img src='../images/outputcontrolstatement4.png' width='50%'></a><br>In the above example condition is false because of that the flow of program transfered to the instruction below the <b>end if</b> statement and below it end is there, which end the program. Because of that we will see output blank.<br><b>Example 1</b><br><a href='../images/ifthenexample1.png' target='_blank'><img src='../images/ifthenexample1.png' width='50%'></a><a href='../images/outputifthenexample1.png' target='_blank'><img src='../images/outputifthenexample1.png' width='50%'></a><br><a href='../images/ifthenexample1explain.png' target='_blank'><img src='../images/ifthenexample1explain.png' width='50%'></a>"
    },
    {
        qns: "if ... else control statement",
        ans: "This is similar to <b>if ... then</b> control statement only difference is <b> else </b> part is added.<br><a href='../images/ifelsesyntax.png' target='_blank'><img src='../images/ifelsesyntax.png' width='50%'></a>.",
        exp: "<b>Example</b><br><a href='../images/evenorodd.png' target='_blank'><img src='../images/evenorodd.png' width='50%'></a><br><a href='../images/evenoroddoutput.png' target='_blank'><img src='../images/evenoroddoutput.png' width='50%'></a>"
    },
    {
        qns: "if ... elseif  control statement",
        ans: "If you want to check multiple condition, then there is one option called <b>if ... elseif </b> control statement.<br><a href='../images/elseifsyntax.png' target='_blank'><img src='../images/elseifsyntax.png' width='50%'></a><br>In the above syntax, there are multiple conditions, at first, top or first condition will get checked if it is true, then instruction(s) below that condition will get executed. If the first condition is false, next condition will get checked and this process repeated until last condition. If none of the above condition is true, then by default <b>else</b> part will get executed.",
        exp: "<b>Example </b><br><a href='../images/positiveornegativeorzero.png' target='_blank'><img src='../images/positiveornegativeorzero.png' width='50%'></a>"
    }
];

export default controlStatements;









