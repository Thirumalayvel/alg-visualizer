let arr;
function Row(){
    return document.createElement('tr');
}
function Cell(){
    return document.createElement('td');   
}
function createNewRow(data){
    let row=Row();
    for(let i=0;i<data.length;i++){
        let cell=Cell();
        cell.innerHTML=data[i];
        row.appendChild(cell);
    }
  //  row.cloneNode(true);
    return row;
}
function setStyles(row,alg,states){
    switch(alg){
        case "linear":
            
            row.cells[0].setAttribute("style","background-color:green;color:white;margin:10px");
            row.cells[0].innerHTML=row.cells[0].innerHTML+"<br><center><small>target<small></center>";
            if(states.i==arr.length) return;
            row.cells[states.i+1].setAttribute("style","background-color:green;color:white;");
            row.cells[states.i+1].innerHTML=row.cells[states.i+1].innerHTML+`<br><center><small>i=${states.i}<small></center>`
        }
}
function element(name){
 return document.getElementById(name);
}
export function byId(id){
    return document.getElementById(id);
}
function add(src,target){
    target.appendChild(src);
}
function create(name,cont){
  let tag=document.createElement(name);
    tag.innerHTML=cont;
    return tag;
}
function ExplanationTemplate(alg,content){
switch(alg){
    case "linear":
        let container=document.createElement('div');
        let p=create('p','Entry condition(i&lt;arr.length):'+content.loopCond);
        if(content.loopCond==false){add(create('p',"loop exited ,number not found,-1 returned"),container)}
        else{
              add(p,container);
        add(create('p',"i="+content.i+"<br>arr[i]==target:"+content.cond),container);
        if(content.cond){
        add(create('p',"number found at index "+content.i+" ,loop breaked"),container);
       }else{
        add(create('p',"next:<br>i++"),container);
       }
      
        }
         let tr=Row();
         let td=Cell();
         td.appendChild(container);
         td.setAttribute("colspan",String(content.arr.length+1));
         add(td,tr);
         return tr;
}

}
function addInTable(row){
            let tble=document.getElementById('visualBox');
            tble.appendChild(row);
        }

export function ReflectIteration(alg,states){
    arr=states.arr;
    arr=[states.target,...arr];
    let row=createNewRow(arr);
    setStyles(row,alg,states);
    addInTable(row);
    addInTable(ExplanationTemplate(alg,states));
}
window.byId=byId;