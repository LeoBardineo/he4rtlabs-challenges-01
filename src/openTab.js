const tabButton = document.querySelectorAll(".tabs-buttons button");
tabButton.forEach( (elem) => {
    elem.addEventListener("click", () =>{

        // Tira o botão e a tab que ta ativo
        let activeTab = document.querySelectorAll(".active-tab");
        activeTab.forEach( (e) => { 
            e.classList.remove("active-tab");
        });

        // Muda o botão e a tab clicado pra ativo
        elem.classList.add("active-tab");
        elem.classList.add("animation-change-color-activated");
        let tab = elem.classList[0];
        let newActiveTab = document.getElementsByClassName(tab);
        newActiveTab[1].classList.add("active-tab");
        
    })
})