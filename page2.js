var player1name = localStorage.getItem("Player 1 Name:"); 
console.log("Player 1 name is " + player1name); 

var player2name = localStorage.getItem("Player 2 Name:");
console.log("Player 2 name is " + player2name);  

var player1score = 0;
var player2score = 0; 

document.getElementById("player1_name").innerHTML = player1name + ": ";
document.getElementById("player2_name").innerHTML = player2name + ": ";

document.getElementById("player1_score").innerHTML = player1score; 
document.getElementById("player2_score").innerHTML = player2score; 

document.getElementById("player_question").innerHTML = "Question turn - " + player1name; 
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2name; 

var q_turn = "player1";
var ans_turn = "player2";

function send(){
    var no1 = document.getElementById("no1").value; 
    var no2 = document.getElementById("no2").value; 

    var actual_ans = parseInt(no1) * parseInt(no2); 
    console.log(actual_ans);
    localStorage.setItem("actual_ans", actual_ans);

    var question_word = "<h4>" + no1 + " X " + no2 + " = </h4>"; 
    var input_box = "<br> Answer: <input type = 'text' id = 'input_check_box'> </br> ";
    var chk_btn = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"; 
    var row = question_word + input_box + chk_btn; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("no1").value = " "; 
    document.getElementById("no2").value = " ";  
}

function check(){
    var get_ans = document.getElementById("input_check_box").value;

    var actual_ans = localStorage.getItem("actual_ans"); 
    
    if (get_ans == actual_ans){ 
        if(a_turn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }

        else{
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }

    if (q_turn == "player1"){
        q_turn = "player2"; 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name; 
    }

    else{ 
        q_turn = "player1"; 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name; 
    }

    if (a_turn == "player1"){
        a_turn = "player2";
        document.getElementById("player_answer").innerHTMl = "Answer Turn - " + player2name;
    }

    else{
        a_turn = "player1";
        document.getElementById("player_answer").innerHTMl = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML = " "; 
}