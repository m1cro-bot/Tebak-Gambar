let heart = 2;
let reloaded = false

const load = () => {
    const hh = document.getElementById("ht")

    hh.innerHTML = heart
}

const betul = () => {
    const a = document.getElementById("v")
    const aa = document.getElementById("benar")
    const end = document.getElementById("end")
    const hb = document.getElementById("hb")
    const la = document.getElementById("la")

    end.style.display = "block"
    hb.style.display = " block"
    la.style.display = "block"

    a.style.backgroundColor = "green"
    aa.style.display = "block"
}

const salah = (f) => {
    heart--
    const ula = document.getElementById("ula")
    const x = document.getElementById("x")
    const xx = document.getElementById("salah")
    const data = document.querySelectorAll(".x")

    const end = document.getElementById("end")
    const hs = document.getElementById("hs")
    const ul = document.getElementById("ul")

    end.style.display = "block"
    hs.style.display = " block"
    ul.style.display = "block"

    console.log(f);
    data.forEach((dc, index) => {
        const gg = document.getElementById("ht")
        console.log(dc.value);
        let gh = dc.value
        if(f == gh) {
            dc.style.backgroundColor = "red"
            if(heart<1){
                ul.style.display = "none"
                hs.style.display = "none"
                ula.style.display = "block"
                const res = document.getElementById("res")
                res.style.display = "block"
            } else {
                gg.innerHTML = heart
            }
        }
    })

    xx.style.display = "block"
}

const ulang = () => {
    const end = document.getElementById("end")
    const hs = document.getElementById("hs")
    const ul = document.getElementById("ul")

    end.style.display = "none"
    hs.style.display = " none"
    ul.style.display = "none"
}

window.onbeforeunload = function(){
    if (reloaded){
        return 'jangan kembali';
    }
    else{
        return
    }
}