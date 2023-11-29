player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "question turn -" + player1name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2name;

function send()
{
    word = document.getElementById("question").value;
    lower_word = word.toLowerCase();

    c1 = word.charAt(1);
    length = Math.floor(word.length/2);
    c2 = word.charAt(length);
    lenght = word.length - 1;
    c3 = word.charAt(lenght);

    r1 = word.replace(c1,"_");
    r2 = r1.replace(c2,"_");
    r3 = r2.replace(c3,"_");
    console.log(r3);

    question_word = "<h4 id = 'q'>Q:"+r3+"</h4>";
    answer = "<br> Answer: <input id = 'i'>";
    button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + answer + button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("question").value = "";
}