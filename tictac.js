let newgamebutton=document.querySelector("#new");
let msgcontainer=document.querySelector(".msgcontainer");
let msg =document.querySelector("#msg");
//console.log('hey');
let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector("#reset");

//add cmments
let turno=true;//jab turno true hoga to o aaye ga jab turn x true hoga to x aye ga
//ik player ha x pr ik player ha o
//winning patterns store krne k liye array use ho
//winning pattern are 012,345,678,036,147,258,048,247 boxes
//2d array is array ka array
//array=[['1,2,3,4'],['4,5,6']];
//console.log(array);
const winpattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
//har box par event lisner lage ga
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clickes");
    if(turno)//agar turno true ha to box k click hone se o aaye ga
       { box.innerText='o';
        turno=false;
    }else{
        box.innerText='X';//agar turn o ki turn nhi ha to x aaye ga
        turno=true;
    }
    box.disable=true;
    checkwinner();
});

});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableboxes();
}




const checkwinner=()=>{
    for(pattern of winpattern){
        //click kare se sare pattern check or print hoge
        let position1val=boxes[pattern[0]].innerText;
        let position2val=boxes[pattern[1]].innerText;
        let position3val=boxes[pattern[2]].innerText;
    
    if (position1val !="" && position2val !="" && position3val != ""){
        if(position1val===position2val && position2val===position3val) {
            console.log("winner ",position1val);
            showwinner(position1val);
        }
    }
}
};
newgamebutton.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
