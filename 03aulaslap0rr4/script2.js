let texto = "berserk";
let soma = 0;
for (let i = 0; i < texto.length; i++) {
    if (texto[i].toUpperCase() == "A" || texto[i].toUpperCase() == "E" || texto[i].toUpperCase() == "I" || texto[i].toUpperCase() == "O" || texto[i].toUpperCase() == "U") {
        soma++;
    }
    else{
        console.log(texto[i] + ' não é vogal');
    }
}
console.log(soma + ' vogal(is)');