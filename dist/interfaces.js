"use strict";
var tlou = {
    title: "The Last of US",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar game to " + title + ": Uncharted, A Plague Tale, Metro");
    },
};
{
    tlou.getSimilars && tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: "The Last of US - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characteres"],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
