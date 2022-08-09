
// menu interaction



const x = document.querySelector("#x");
const lacosaesa = document.querySelector(".la-cosa-esa-xd");
const lacosaesamov = document.querySelector(".la-cosa-esa-xd-mov");
const btnmenux = document.querySelector("#x-menu-mov");
const todomov = document.querySelector(".todo-mov");
const menus = document.querySelector(".menu");
const btnmenu = document.querySelector(".btn_menu");
const homejs = document.querySelector("#home-js");
const infojs = document.querySelector("#info-js");
const roadmapjs = document.querySelector("#roadmap-js");
const theteamjs = document.querySelector("#the-team-js");
const logojs =  document.querySelector("#logo-mov");
const xmov = document.querySelector("#x-mov");
const twitterbut = document.querySelector("#twitter");
const discordbut = document.querySelector("#discord");
const instabut = document.querySelector("#instalol");
const logo = document.querySelector(".logo");
const enter = document.querySelector("#discenter"); 
const discordia = document.querySelector("body > div.wind");

lacosaesa.remove()
lacosaesamov.remove()
 

btnmenu.addEventListener("click", (e)=>{
    todomov.style.visibility = "visible"
    menus.style.visibility = "hidden"
    discordia.style.visibility = "visible"

});

btnmenux.addEventListener("click", (e)=>{
    todomov.style.visibility = "hidden"
    menus.style.visibility = "visible"
})


homejs.addEventListener("click",(e)=>{
    window.open("https://www.camber.club","_self")

});


roadmapjs.addEventListener("click",(e)=>{
    window.open("https://www.camber.club/conceptmap","_self")

});


theteamjs.addEventListener("click",(e)=>{    
  window.open("https://www.camber.club/team","_self")

});

infojs.addEventListener("click",(e)=>{    
  window.open("https://www.camber.club/info","_self")
});

twitterbut.addEventListener("click",(e)=>{
    window.open("https://twitter.com/camber_club","_self")

});


instabut.addEventListener("click",(e)=>{
    window.open("https://instagram.com/lil_yellowtang","_self")

});


discordbut.addEventListener("click",(e)=>{
    window.open("https://www.camber.club/discord","_self")

});


logo.addEventListener("click",(e)=>{
    window.open("https://www.camber.club/","_self")

});


logojs.addEventListener("click",(e)=>{
    window.open("https://www.camber.club","_self")

});


enter.addEventListener("click",(e)=>{
    window.open("https://twitter.com/camber_club","_self")
});





// metamask

const ethereumButton = document.querySelector(".btnXD")


const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};
    

function removerCaracter(texto, posicionCaracter) {
  if(texto.length) {
    if (posicionCaracter >= 0 && posicionCaracter < texto.length) {
      let parte1 = texto.substring(0, posicionCaracter);
      let parte2 = texto.substring(posicionCaracter + 41, texto.length);
      return parte1 + parte2
    } else
    return texto
  } else {
  return texto;
  }
}




async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' }).catch((err)=>
    console.log(err.code));
    const arr = accounts;
    let texto = arr.toString();

    let billetera =(removerCaracter(texto, 5));
    const si = billetera + "..."
    ethereumButton.innerHTML = si
    ethereumButton2.innerHTML = si
  }

ethereumButton.addEventListener('click', (e) => {
    
  if(isMetaMaskInstalled() == true) {
      getAccount()
    };
    if(isMetaMaskInstalled() == false) {
      window.open("https://metamask.io", "_self")
    }

  });

  const ethereumButton2 = document.querySelector(".btnmenu")

  ethereumButton2.addEventListener('click', (e) => {
    
    if(isMetaMaskInstalled() == true) {
        getAccount()
      };
      if(isMetaMaskInstalled() == false) {
        window.open("https://metamask.io", "_self")
      }
  
    });



    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active');
        });
    });
    