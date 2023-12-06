player1= localStorage.getItem("player1_name");
player2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score; 
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2;

function send() {
    no1 = document.getElementById("no1_input").value;
    no2 = document.getElementById("no2_input").value;
    actual_answer = parseInt(no1) * parseInt(no2);

    question_number = "<h4>" + no1 + " X "+no2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = player_question + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("no1_input").value = "";
    document.getElementById("no2_input").value = "";
}