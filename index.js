import { autok } from "./fuggvenyek.js"


export const autoklista=[
    {
        marka:"audi",
        tipus:"r8",
        szin:"ezüst",
        gyartasi_ev:"2023"
    },
    {
        marka:"mercedés",
        tipus:"amg",
        szin:"fekete",
        gyartasi_ev:"2022"
    },
    {
        marka:"bmw",
        tipus:"x5",
        szin:"fekete",
        gyartasi_ev:"2022"
    },
    {
        marka:"mclaren",
        tipus:"765lt",
        szin:"narancssárga",
        gyartasi_ev:"2023"
    },
    {
        marka:"maserati",
        tipus:"ghibli",
        szin:"fehér",
        gyartasi_ev:"2021"
    }
]

const AUTO = document.querySelector(".tartalom");
let txt = autok(autoklista);
AUTO.innerHTML="<h3>Márka tipus szin gyártási év</h3>"
AUTO.innerHTML += txt;
