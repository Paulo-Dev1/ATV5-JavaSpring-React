class MobileNavbar{
    constructor(mobilemenu,menu1,navlinks){
        this.mobilemenu = document.querySelector(mobilemenu);
        this.menu1 = document.querySelector(menu1);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active"

    }

    addClickEvent(){
        this.mobilemenu.addEventeListener("click",()=>console.log
        ("heyhey"));

    }

    init(){
        if(this.mobilemenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
".mobilemenu",
".menu1",
".menu1 li",
);
mobileNavbar.init();