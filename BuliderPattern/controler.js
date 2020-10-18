
import cupBulider from './Bulider.js'
import {AvaibleOptions} from './AvaibleOptions.js'
import CupBulider from './Bulider.js'





for (const key in AvaibleOptions) {
    let element = document.querySelector('#'+key)
    if(element==null){continue}

    for(const key2 in AvaibleOptions[key]){
        const option = document.createElement('option')
        option.setAttribute('value',key2)
        const Content = document.createTextNode(key2)
        option.appendChild(Content)
        element.appendChild(option) 
    }
  
}

document.querySelector('#createCup').addEventListener('click',createCup)



function createCup(){
  
    const Req= collectReq()

    let cup = new CupBulider(AvaibleOptions.Color[Req.Color],AvaibleOptions.Height[Req.Height],AvaibleOptions.Diamiter[Req.Diamiter])
    
    if(Req.Holes!=null){cup.withWithHoles(AvaibleOptions.Holes[Req.Holes])}
    if(Req.HowManyEars!=null){cup.withHowManyEars(AvaibleOptions.HowManyEars[Req.HowManyEars])}
    if(Req.Patterns!=null){cup.withPattern(AvaibleOptions.Patterns[Req.Patterns])}
    cup = cup.build()
    renderCup(cup)
}
const collectReq= ()=>{
    let entries=[]
    for (const key in AvaibleOptions) {
        let element = document.querySelector('#'+key)
        if(element==null){continue}
        let val = element.value
        entries.push([key,val])
    }
    return Object.fromEntries(entries)



}

function renderCup(cup){

    document.querySelector("#cup").innerHTML=''

   const parentElement = document.querySelector("#cup")
   const table = document.createElement('ul')
    for (const key in cup) {
    const element = document.createElement('li')
    const text = document.createTextNode(`${key}: ${cup[key]}`)
    element.appendChild(text)
    parentElement.appendChild(element)
    }

}