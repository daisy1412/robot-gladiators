var playerName = window.alert("What's your robot's name?"); 
var playerHealth = 100; 
var playerAttack = 60; 

console.log(playerName, playerHealth, playerAttack); 

var enemyName = "Roborto"; 
var enemyHealth = 50; 
var enemyAttack = 12; 

var fight = function(){
    window.alert("Welcome to Robot Gladiator"); 
    playerHealth = playerHealth - enemyAttack; 
    console.log(playerName + " now has " + playerHealth + " health remaining"); 
    enemyHealth = enemyHealth - playerAttack; 
    console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining "); 

    //check enemy health
    if(enemyHealth <= 0){
        window.alert(enemyName + " has died! "); 
    }else{
        window.alert(enemyName + " still has " + enemyHealth + " health left"); 
    }
}
fight(); 

