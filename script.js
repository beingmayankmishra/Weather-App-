
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

// API_KEY= "bf1c1e11da63a26595558bc958171864";

 
const API_KEY= "bf1c1e11da63a26595558bc958171864";

async function weatherdata(){

    try{
    let city="loni";
     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
     const data= await response.json();
     console.log(data);

     let newPara= document.createElement('p');
     newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;
     document.body.appendChild(newPara);

    }
    catch(error){
        console.log("bhai gand fat gaya aa ja");
    }
}

 weatherdata();