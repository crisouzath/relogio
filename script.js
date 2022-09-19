setInterval(()=>{
    let data=new Date();
    let horaAtual=data.getHours()<10 ? "0"+data.getHours() : data.getHours();
    let minutoAtual=data.getMinutes()<10 ? "0"+data.getMinutes() : data.getMinutes();
    let segundoAtual=data.getSeconds()<10 ? "0"+data.getSeconds() : data.getSeconds();

    document.querySelector(".hora").style.transform = "rotate("+(horaAtual*30)+(minutoAtual/2)+"deg)";
    document.querySelector(".minuto").style.transform= "rotate("+minutoAtual*6+"deg)";
    document.querySelector(".segundo").style.transform= "rotate("+segundoAtual*6+"deg)";

    document.getElementsByTagName("p")[0].innerHTML=horaAtual+":"+minutoAtual+":"+segundoAtual;
    })