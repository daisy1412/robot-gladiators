var playerName = window.prompt("What's your robot's name?"); 
var playerHealth = 100; 
var playerAttack = 10; 
var playerMoney = 10; 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50; 
var enemyAttack = 12;

var fight = function(enemyName){
 
    while(enemyHealth > 0 && playerHealth>0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
        if(promptFight == "fight" || promptFight == "FIGHT"){
            enemyHealth = enemyHealth - playerAttack; 
            console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining ");

            if(enemyHealth <= 0){
                window.alert(enemyName + " has died! "); 
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
                break;
            }else{
                window.alert(playerName + " still has " + playerHealth + " health remaining. ");
            }
        }if(promptFight == "skip" || promptFight == "SKIP"){
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
    // var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); 
    // if(promptFight == "fight" || promptFight == "FIGHT"){
        
    //     while(enemyHealth > 0 && playerHealth > 0){
    //         enemyHealth = enemyHealth - playerAttack; 
    //         console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining ");

    //         //update playerHealth
    //         playerHealth = playerHealth - enemyAttack; 
    //         console.log(playerName + " now has " + playerHealth + " health remaining");
    //     }
        
    //     if(enemyHealth <= 0 && playerHealth > 0){
    //         window.alert(enemyName + " has died! "); 
    //         console.log(playerName + " still has " + playerHealth + " health remaining. ")
    //     }else if(enemyHealth > 0 && playerHealth <= 0){
    //         window.alert(playerName + " has died! "); 
    //     }
        
    // }else if(promptFight == "skip" || promptFight == "SKIP"){
    //     var confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
    //     if (confirmSkip){
    //         playerMoney = playerMoney - 2; 
    //         window.alert(playerName + " has choosen to skip the fight. Goodbye!");
    //         console.log(playerName + " now has " + playerMoney + " money remaining");
    //     }else{
    //         fight();
    //     }
            
    // }else{
    //     window.alert("Invalid input. Choose again"); 
    // }     

        //check enemy health
    //     if(enemyHealth <= 0){
    //         window.alert(enemyName + " has died! "); 
    //     }else{
    //         window.alert(enemyName + " still has " + enemyHealth + " health left"); 
    //     }

    //     //update playerHealth
    //     playerHealth = playerHealth - enemyAttack; 
    //     console.log(playerName + " now has " + playerHealth + " health remaining");
        
    //     //check player's Health
    //     if(playerHealth <= 0){
    //         window.alert(playerHealth + " has died!"); 
    //     }else{
    //         window.alert(playerName + " still has " + playerHealth + " health remaining. ");
    //     }
    // }else if(promptFight == "skip" || promptFight == "SKIP"){
    //     var confirmSkip = window.confirm("Are you sure you'd like to quit?"); 
    //     if (confirmSkip){
    //         playerMoney = playerMoney - 2; 
    //         window.alert(playerName + " has choosen to skip the fight. Goodbye!");
    //         console.log(playerName + " now has " + playerMoney + " money remaining");
    //     }else{
    //         fight();
    //     }
            
    // }else{
    //     window.alert("Invalid input. Choose again"); 
    // }  
     
}

for(var i=0; i < enemyNames.length; i++){ 
    enemyHealth = 50; 
    if(playerHealth > 0){
        window.alert("Welcome to Robot Gladiator! Round " + (i+1)); 
        fight(enemyNames[i]);
    }else{
        window.alert("You have lost. Game over!"); 
        break; 
    }
    
}
 

