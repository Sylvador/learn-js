let collator = new Intl.Collator(undefined, {
  sensitivity: "base"
});

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort(collator.compare)

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК