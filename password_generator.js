const box = document.querySelector("#box");
const btn = document.querySelector("button");
const file_tag = document.querySelector(".fa-solid.fa-file");
let main_text = undefined;

// Password Olusturmadikca Bu tusu calistirmiyoruz
file_tag.addEventListener("click",function(event){
    event.stopPropagation()
    console.log(event.target);
    if((typeof main_text) !== "undefined"){
        alert("password copied! =>" + main_text);
    }
})


const kucuk_harfler = ["a","b","c","d","e","f"];
const buyuk_harfler = kucuk_harfler.map(function(harf){
    return harf.toUpperCase();
});
const sayilar = ["0","1","2","3","4","5"];
const isaretler = ["-","!","?","*","%","/"];


btn.addEventListener("click", function(){
    resultFunc();
})

function resultFunc(){
    let text= "";
    for (let index = 0; index < 6; index++) {

        let dizi_eleman = "";
        let sayi = generate_password();

        if(sayi === 0){
            dizi_eleman = kucuk_harfler[Math.floor(Math.random()* 6)];
        }
        if(sayi === 1){
            dizi_eleman = buyuk_harfler[Math.floor(Math.random()* 6)];
        }
        if(sayi === 2){
            dizi_eleman = sayilar[Math.floor(Math.random()* 6)];
        }
        if(sayi === 3){
            dizi_eleman = isaretler[Math.floor(Math.random()* 6)];
        }
        text += dizi_eleman;
    } 
    box.value = text;
    main_text = text;
}

function generate_password(){
    let gelen_sayi = Math.floor(Math.random() * 4);
    return gelen_sayi;
}


































