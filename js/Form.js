class Form {
    constructor(){

    }
    display(){
        //position may be off        
        var title = createElement("H2")
        title.html("Car Racing Game");
        title.position(220,10);
        var input = createInput("name");
        input.position(200,160);
        var button = createButton("play");
        button.position(250,200);
        var greeting = createElement("H3");

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount)
            greeting.html("Hello " + name);
            greeting.position(220,220);
        })
    }
}