var playerName = window.prompt("What's your robot's name?"); 
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50; 
var enemyAttack = 12;

var fight = function(enemyName){
    window.alert("Welcome to Robot Gladiator"); 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
    if(promptFight == "fight" || promptFight == "FIGHT"){
        enemyHealth = enemyHealth - playerAttack; 
        console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining ");
        //check enemy health
        if(enemyHealth <= 0){
            window.alert(enemyName + " has died! "); 
        }else{
            window.alert(enemyName + " still has " + enemyHealth + " health left"); 
        }

        //update playerHealth
        playerHealth = playerHealth - enemyAttack; 
        console.log(playerName + " now has " + playerHealth + " health remaining");
        
        //check player's Health
        if(playerHealth <= 0){
            window.alert(playerHealth + " has died!"); 
        }else{
            window.alert(playerName + " still has " + playerHealth + " health remaining. ")
        }
    }else if(promptFight == "skip" || promptFight == "SKIP"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
        if (confirmSkip){
            playerMoney = playerMoney - 2; 
            window.alert(playerName + " has choosen to skip the fight. Goodbye!");
            console.log(playerName + " now has " + playerMoney + " money remaining");
        }else{
            fight();
        }
            
    }else{
        window.alert("Invalid input. Choose again"); 
    }   
}

for(var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
 

