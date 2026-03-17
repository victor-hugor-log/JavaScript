let frutas = ["maça", "banana", "uva"];
let pos = frutas.indexOf("banana");
if (pos != -1) {
    frutas.splice(1,1);
    console.log(frutas)

}
else {
    console.log("Fruta não encontrada")
}
