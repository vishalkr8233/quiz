var index, count = 0;
var x = [{ question: "PM OF INDIA", option1: "Narendra Modi", option2: "Rahul Gandhi", option3: "KL", option4: "LY", answer: 1 },
{ question: "2+4=?", option1: "6", option2: "0.6", option3: "66", option4: "60", answer: 1 },
{ question: "2*4=?", option1: "8", option2: "10", option3: "11", option4: "13", answer: 1 },
{ question: "4-2=?", option1: "2", option2: "1", option3: "22", option4: "1", answer: 1 },
{ question: "Capital of India", option1: "Delhi", option2: "Mumbai", option3: "Patna", option4: "Bhilai", answer: 1 },
{ question: "How mays days in a week", option1: "7", option2: "10", option3: "6", option4: "8", answer: 1 },
{ question: "10-3=?", option1: "7", option2: "5", option3: "4", option4: "3", answer: 1 },
{ question: "5*3=?", option1: "15", option2: "1", option3: "2", option4: "8", answer: 1 },
{ question: "largest planet?", option1: "Jupiter", option2: "Saturn", option3: "Earth", option4: "Mars", answer: 1 },
{ question: "King of fruits?", option1: "Mango", option2: "Banana", option3: "Apple", option4: "Grapes", answer: 1 }
]


function show(v) {
    index = v;
    document.getElementById("question").innerHTML = x[v].question;
    document.getElementById("option1").innerHTML = "<input type=radio name='a' id='a' value=1>" + x[v].option1;
    document.getElementById("option2").innerHTML = "<input type=radio name='a' id='b' value=2>" + x[v].option2;
    document.getElementById("option3").innerHTML = "<input type=radio name='a' id='c' value=3>" + x[v].option3;
    document.getElementById("option4").innerHTML = "<input type=radio name='a' id='d' value=4>" + x[v].option4;

}


function answer() {
    var m;
    if (document.getElementById("a").checked) {
        m = document.getElementById("a").value;
    }
    else if (document.getElementById("b").checked) {
        m = document.getElementById("b").value;
    }
    else if (document.getElementById("c").checked) {
        m = document.getElementById("c").value;
    }
    else {
        m = document.getElementById("d").value;
    }
    //alert(m)

    if (m == x[index].answer) {
        alert("right");
        count++;
    }
    else {
        alert("wrong");
    }

}


function finish() {
    alert(count + "/10");
}

function next() {
    show(index + 1);
}

function previous() {
    show(index - 1);
}

function next() {
    if (index >= 9) {
        show(0);
    }
    else {
        show(index + 1);
    }
}


function previous() {
    if (index == 9) {
        show(0);
    }
    else {
        show(index + 1);
    }
}