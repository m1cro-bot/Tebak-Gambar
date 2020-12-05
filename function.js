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
        console.log(dc.value);
        let gh = dc.value
        if(f == gh) {
            dc.style.backgroundColor = "red"
        }
    })

    xx.style.display = "block"
}

const ulang = () => {
    location.reload()
}