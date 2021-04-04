function add_user(){
    var player1_name = document.getElementById("player1_name").value;
    var player2_name = document.getElementById("player2_name").value; 

    localStorage.setItem("Player 1 Name:", player1_name); 
    localStorage.setItem("Player 2 Name:", player2_name); 

    window.location = "game_page.html"; 
}