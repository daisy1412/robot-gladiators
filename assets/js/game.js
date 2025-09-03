var playerName = window.prompt("What's your robot's name?"); 
var playerHealth = 60; 
var playerAttack = 10; 
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50; 
var enemyAttack = 20;

var fight = function(enemyName){
 
    while(enemyHealth > 0 && playerHealth>0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
        if(promptFight == "fight" || promptFight == "FIGHT"){
            enemyHealth = enemyHealth - playerAttack; 
            console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining ");

            if(enemyHealth <= 0){
                window.alert(enemyName + " has died! "); 
                window.alert(playerName + " still has " + playerHealth + " health remaining. ");
                break; 
            }else{
                window.alert(enemyName + " still has " + enemyHealth + " health left"); 
            }

            //update playerHealth
            playerHealth = playerHealth - enemyAttack; 
            console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.');
            //check player's Health
            if(playerHealth <= 0){
                window.alert(playerName + " has died!"); 
                window.alert(playerName + " still has " + playerHealth + " health remaining. ");
                break;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health remaining. ");
            }
        }else if(promptFight == "skip" || promptFight == "SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
            if (confirmSkip){
                playerMoney = playerMoney - 10; 
                window.alert(playerName + " has choosen to skip the fight. Goodbye!");
                console.log(playerMoney, " player money");
                break; 
            }else{
                fight();
            }   
        }else{
            window.alert("Invalid input. Choose again"); 
        }
    }
}
var startGame = function(){
    playerAttack = 10;
    playerHealth = 100; 
    playerMoney = 10; 
    for(var i=0; i < enemyNames.length; i++){ 
        enemyHealth = 50; 
        if(playerHealth > 0){
            window.alert("Welcome to Robot Gladiator! Round " + (i+1)); 
            var pickEnemyName = enemyNames[i]; 
            fight(pickEnemyName);
            if(i < enemyNames.length -1 && playerHealth > 0){
                var shopConfirm = window.confirm("The fight is over. Would you like to visit the store before the next round?");
                //NO NEED TO WRITE ELSE BECAUSE ELSE LITERALLY DOES NOTHING
                if(shopConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost. Game over!"); 
            break; 
        }
    }
    //player now has no health or no enemies to fight. 
    endGame(); 
}
var endGame = function(){
    if(playerHealth > 0){
        window.alert("YOU WIN. You have earned " + playerMoney + " money. "); 
        var playAgain = window.confirm("Would you like to play again? "); 
        if(playAgain){
            startGame(); 
        }else{
            window.alert("Thank you for playing. See you again soon!"); 
        }
    }else{
        window.alert("Sorry, you have lost."); 
    } 
}
var shop = function(){
    console.log("enter the shop"); 
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt.toLowerCase()){
        case "refill": 
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for $7"); 
                playerHealth = playerHealth + 20; 
                playerMoney = playerMoney -7; 
                break; 
            }else{
                window.alert("You don't have enough money.");
            }      
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for $7");
                playerAttack = playerAttack + 6; 
                playerMoney = playerMoney - 7;
                break;
            }else{
                window.alert("You don't have enough money.");
            }      
        case "leave":
            window.alert("Leaving the store."); 
            break; 
        default:
            window.alert("Invalid input. Try again. ");
            shop();
            break;    //do break for consistency, not actually useful
    }
}
startGame(); 

 

