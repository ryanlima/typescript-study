"use strict";
// boolean
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3];
var values;
values = [1, 2, 3];
// tuple
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL
var coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log("FOO");
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    car: true,
};
// Type Inference
var message2 = "mensagem";
message2 = "nova mensagem";
