// Task 3
// Generate random hex-color value;

function generateHexColor(){
    let code = "#";
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for(let i=0;i<6;i++){
        let randomValue = Math.floor(Math.random()*15); //0-15    
        code += arr[randomValue];
    }
    console.log(code);
    document.body.style.backgroundColor = code; //To make button useful -> as on click the bg color of body chnages.
}
generateHexColor();