const main = document.querySelector("main");
const sekundviser = document.querySelector("#sekundviser");
const minuttviser = document.querySelector("#minuttviser");
const timeviser = document.querySelector("#timeviser");
const tittel = document.querySelector("#tittel");
const digitalklokke = document.querySelector("#digitalklokke");

function bevegSekundviser() {
    const dato = new Date();
    const sekund = dato.getSeconds();

    sekundviser.style.transform = `rotate(${sekund * 6}deg)`;  
}

setInterval(bevegSekundviser, 1000);
bevegSekundviser();



function bevegMinuttviser() {
    const dato = new Date();
    const minutt = dato.getMinutes();
    
    minuttviser.style.transform = `rotate(${minutt*6}deg)`;
}

setInterval(bevegMinuttviser, 1000);
bevegMinuttviser();


function bevegTimeviser() {
    const dato = new Date();
    const time = dato.getHours();

    timeviser.style.transform = `rotate(${time * 360 / 12}deg)`;
}

setInterval(bevegTimeviser, 1000);
bevegTimeviser();


for(let i=0; i<60; i++) {
    const bredde = "3px";
    const hoyde = "15px"
    const rotasjon = i * 6 + "deg";
    const avstand = 250 + "px";

    if(i % 5 === 0) {

        const div = document.createElement("div");
        div.style.transform =  `rotate(${rotasjon}) translateY(${avstand})`;
        div.style.width = bredde;
        div.style.height = hoyde;

        main.appendChild(div);
    }

    if(rotasjon==="0deg") {
        const heading1 = document.createElement("h4");
        heading1.innerText = "3"
        heading1.id = "tre";
        main.appendChild(heading1);   
    }

    if(rotasjon==="90deg") {
        const heading2 = document.createElement("h4");
        heading2.innerText = "9"
        heading2.id = "ni";
        main.appendChild(heading2);   
    }

    if(rotasjon==="180deg") {
        const heading3 = document.createElement("h4");
        heading3.innerText = "12"
        heading3.id = "tolv";
        main.appendChild(heading3);   
    }

    if(rotasjon==="270deg") {
        const heading4 = document.createElement("h4");
        heading4.innerText = "6"
        heading4.id = "seks";
        main.appendChild(heading4);   
    }
    
    const div = document.createElement("div");
    div.style.transform =  `rotate(${rotasjon}) translateY(${avstand})`;
    main.appendChild(div);

}

function visDigitalTid() {
    const dato = new Date();
    const s = dato.getSeconds();
    const m = dato.getMinutes();
    const t = dato.getHours();


    digitalklokke.innerHTML = t + " : " + m + " : " + s; 
}

setInterval(visDigitalTid,1000);
visDigitalTid();

    /*
        if(rotasjon==="90deg") {
            main.innerHTML += `
                <h4 id="ni">9</h4>
            `
        } 

        if(rotasjon==="180deg") {
            main.innerHTML += `
                <h4 id="tolv">12</h4>
            `
        }   

        if(rotasjon==="270deg") {
            main.innerHTML += `
                <h4 id="seks">6</h4>
            `
        }    
        
    }

    else {
        
        main.innerHTML += `
            <div 
                style="transform: rotate(${rotasjon}) translateY(${avstand})">
            </div>
            `
    
    }       
    }

        
        main.innerHTML += `
            <div 
                style="background-color:${farge}; width:${bredde}; height:${hoyde}; ">
            </div>
        `;
        */
        
        
