
// const testing=()=>{
    
//     console.log(`my name is joshua`)
// }
//  const myTime=50*50

//  setTimeout(testing,myTime)
// let myAge=15
// console.log(myAge)
// setTimeout(()=>{
//     myAge=5
//     console.log(myAge)
//    },6000)
// setTimeout(()=>{
  
//    console.log("what are you doing")

// },5000)

// let myAge1=42
// console.log(myAge1)








// let josh=5
    
// let interval=setInterval(()=>{
//     josh+=2
//     console.log(josh)
// },2000)

//  setTimeout(()=>{
// clearTimeout(interval)
// console.log("i am done")

//  },10000)

// let a3=setTimeout(()=>{
   
//     console.log("i am done")
    
//      },4000)


//      let a4=  setTimeout(()=>{
   
//         console.log("i am done2")
        
//          },5000)

//          let a5=  setTimeout(()=>{
   
//             console.log("i am done3")
            
//              },2000)


//              setTimeout(()=>{
//                 clearInterval(a5)
//              },1000)



//horoscope for joseph and oluchi
// let oluchi=Math.floor(Math.random()*100)
// let joseph=Math.floor(Math.random()*100)



// if(oluchi<70)

// {
   
//     console.log("haba now")
// }

// else{
// setTimeout(()=>{

//     console.log(`oluchi you have ${oluchi}% afection for joseph`)
// },4000)
// setTimeout(()=>{
//     console.log(`joseph you have ${joseph}% afection for oluch`)
// },6000)

// setTimeout(()=>{
//     console.log( `your total love Score is ${(joseph+oluchi)/2}%`)
// },8000)


// setTimeout(()=>{

//     if((oluchi+joseph)/2<=40){
 
//         console.log("you guys are not meant for each other")   
//     }
//     else if((oluchi+joseph)/2<=50){
     
//         console.log("you guys are manageable ,you can give it a trial")   
//     }
//     else if((oluchi+joseph)/2<=60){
//         console.log("Something fishy is going on")
//     }
//     else if((oluchi+joseph)/2<=70){
//         console.log("Wao go pick a date")
//     }
//     else{
//         console.log("Match made in heaven")
//     }



// },10000

// )}




const  traffic=()=>{
const green=setInterval(()=>{
    console.log("Go :green color")
},1000)

setTimeout(()=>{
    clearInterval(green)
    console.log("stop moving")
},11000)




setTimeout(()=>{
    const yellow=setInterval(()=>{
        console.log("ready:yellowcolor")
    },1000)

    setTimeout(()=>{
        clearInterval(yellow)
        console.log("yellow has stopped")
        
        },5000)},12000)









setTimeout(()=>{
    const red=setInterval(()=>{
        console.log("stop:red color")
    },1000)
   setTimeout(()=>{
    
clearInterval(red)
console.log("i am done running")
   },10000) 
},18000)

}







traffic()

setInterval(()=>{
    traffic()
},27000)



    
        