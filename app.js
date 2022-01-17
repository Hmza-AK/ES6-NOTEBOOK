let input1=document.getElementById("input1")
let input2=document.getElementById("input2");
let myDiv=document.getElementById("myDiv");

const addbtn = () => {



if(input1.value == "" && input2.value == ""){
   alert("Nothing to show! Write any Note ")
}
else{

    let div2=document.createElement("div")
    div2.setAttribute("class", "divTxt");
    
     

    let h2=document.createElement('h2');
    let h2Txt=document.createTextNode(input1.value);
    h2.appendChild(h2Txt);
    h2.setAttribute("class", "title_01");

    // console.log(h2)

    let p=document.createElement('p');
    let pTxt=document.createTextNode(input2.value);
    p.appendChild(pTxt);
    p.setAttribute("class", "title_02");


    let editBtn = document.createElement("button");
    let ediText = document.createTextNode("Edit")
    editBtn.setAttribute("onclick", "edit(this)")
    editBtn.appendChild(ediText);
    editBtn.setAttribute("class", "BUTn butn1");


    
    let rmvBtn = document.createElement("button");
    let rmvText = document.createTextNode("Remove")
    rmvBtn.setAttribute("onclick", "remove(this)")
    rmvBtn.appendChild(rmvText);
    rmvBtn.setAttribute("class", "BUTn butn22");


    myDiv.appendChild(div2)
    div2.appendChild(h2)
    div2.appendChild(p)
    div2.appendChild(editBtn)
    div2.appendChild(rmvBtn)
    // console.log(div1)

    input1.value="";
    input2.value="";


}
    
}

const delAll=()=> {


    myDiv.innerHTML = ""

}





const edit = (e) =>{
    let protit=prompt ("Enter New Title")
    let a = e.parentNode.firstChild.innerHTML=protit
    let prodes=prompt ("Enter New Description");
    let b = e.parentNode.firstChild.nextSibling.innerHTML=prodes
    console.log(a)
    console.log(b)

}

const remove= (e) =>{
    e.parentNode.remove()
    
}