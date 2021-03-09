// boolean
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (qualquer coisa) NÃO É LEGAL
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log("FOO");
}

// null / undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;

cart = {
  car: true,
};

// Type Inference
let message2 = "mensagem";
message2 = "nova mensagem";
