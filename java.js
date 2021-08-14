let turn = 1

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 20 + 1)
    let die2 = Math.floor(Math.random() * 20 + 1) 
    console.log(die1);
    console.log(die2);
    document.getElementById("test").value +="turn " + turn + " " + die1 +" " + die2 + "\n";
    turn = turn + 1
  }


//turn 1 20 20
//turn 1 20 20
//turn 1 20 20
//turn 1 20 20

