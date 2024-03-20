import {autoklista } from "./index.js"

export function autok(lista){
        let box = "<table class='tartalom'>"
        for (let i = 0; i < lista.length; i++) {
            box += "<tr>"
            box += `<td>  ${lista[i].marka} </td>`
            box += `<td>  ${lista[i].tipus} </td>`
            box += `<td>  ${lista[i].szin} </td>`
            box += `<td>  ${lista[i].gyartasi_ev} </td>`
            box += "</tr>";
        }
        box += "</table>"

        console.log(box);
        return box
            
}

