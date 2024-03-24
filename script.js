const Tiles = document.querySelectorAll(".item");
    Tiles.forEach( ($currentTile) =>{
        $currentTile.addEventListener("click", () => {
            openDialog($currentTile);
        })
        
    });
    Tiles.forEach( $currentTile =>{
        $currentTile.addEventListener("mouseover", () => {
            if($currentTile.hasAttribute("current-item")){
                checkIfItemIsVisible($currentTile.getAttribute("current-item"), $currentTile);
            }
        })
        $currentTile.addEventListener("mouseout", () => {
            checkIfItemIsNotVisible($currentTile);
        })
    })
    function checkIfItemIsVisible(itemName, itemContainer){
            itemContainer.setAttribute('data-tooltip', `${itemName}`);
            console.log(itemName);
            
    }
    function checkIfItemIsNotVisible(itemContainer){
            itemContainer.removeAttribute('data-tooltip');
    }


    
    


let helmIcon = document.querySelector("#helm");
    helmIcon.style.backgroundImage = `url(img/icons/helmIcon.png)`;
    let activeHelmItems = [];
let zbrojaIcon = document.querySelector("#zbroja");
    zbrojaIcon.style.backgroundImage = `url(img/icons/zbrojaIcon.png)`;
    let activeZbrojaItems = [];
let naszyjnikIcon = document.querySelector("#naszyjnik");
    naszyjnikIcon.style.backgroundImage = `url(img/icons/naszyjnikIcon.png)`;
    let activeNaszyjnikItems = [];
let rekawiceIcon = document.querySelector("#rekawice");
    rekawiceIcon.style.backgroundImage = `url(img/icons/rekawiceIcon.png)`;
    let activeRekawiceItems = [];
let pelerynaIcon = document.querySelector("#peleryna");
    pelerynaIcon.style.backgroundImage = `url(img/icons/pelerynaIcon.png)`;
    let activePelerynaItems = [];
let bronIcon = document.querySelector("#bron");
    bronIcon.style.backgroundImage = `url(img/icons/bronIcon.png)`;
    let activeBronItems = [];
let kowadloIcon = document.querySelector("#kowadlo");
    kowadloIcon.style.backgroundImage = `url(img/icons/kowadloIcon.png)`;
    let activeKowadloItems = [];
let karwaszeIcon = document.querySelector("#karwasze");
    karwaszeIcon.style.backgroundImage = `url(img/icons/karwaszeIcon.png)`;
    let activeKarwaszeItems = [];
let spodnieIcon = document.querySelector("#spodnie");
    spodnieIcon.style.backgroundImage = `url(img/icons/spodnieIcon.png)`;
    let activeSpodnieItems = [];
let pasIcon = document.querySelector("#pas");
    pasIcon.style.backgroundImage = `url(img/icons/pasIcon.png)`;
    let activePasItems = [];
let pierscien1Icon = document.querySelector("#pierscien1");
    pierscien1Icon.style.backgroundImage = `url(img/icons/pierscien1Icon.png)`;
    let activePierscien1Items = [];
let pierscien2Icon = document.querySelector("#pierscien2");
    pierscien2Icon.style.backgroundImage = `url(img/icons/pierscien2Icon.png)`;
    let activePierscien2Items = [];
let butyIcon = document.querySelector("#buty");
    butyIcon.style.backgroundImage = `url(img/icons/butyIcon.png)`;
    let activeButyItems = [];
let zdolnosciIcon = document.querySelector("#zdolnosci");
    zdolnosciIcon.style.backgroundImage = `url(img/icons/zdolnosciIcon.png)`;
    let activeZdolnosciItems = [];



let removeButton = null;
let removeButtonCounter = 0;
/* DIALOG */

function checkRemoveButton(icon, iconName, iconImage){
    if(removeButton == null && icon.style.backgroundImage != `url("img/icons/${iconImage}.png")` && removeButtonCounter === 0){
        let removeButton = document.createElement("a");
        
        removeButton.setAttribute("class", `remove-${iconName} remove-button`);
        removeButton.innerHTML = "Zdejmij";
        Dialog_container.appendChild(removeButton);
        removeButtonCounter++;
        console.log(removeButtonCounter);
        console.log(removeButton.className);
        
        removeButton.addEventListener("click", () =>{
            icon.style.backgroundImage = `url("img/icons/${iconImage}.png")`;
            Dialog.close(); 

            //e.firstElementChild can be used. 
            let child = Dialog_container.firstElementChild;
            while (child) {
                Dialog_container.removeChild(child);
                child = Dialog_container.firstElementChild;
            }
            activeHelmItems = [];
            activeZbrojaItems = [];
            activeNaszyjnikItems = [];
            activeRekawiceItems = [];
            activePelerynaItems = [];
            removeButton = null;
            removeButtonCounter = 0;
            helmIcon.removeAttribute("current-item", iconName);
            zbrojaIcon.removeAttribute("current-item", iconName);
            naszyjnikIcon.removeAttribute("current-item", iconName);
            rekawiceIcon.removeAttribute("current-item", iconName);
            pelerynaIcon.removeAttribute("current-item", iconName);
        })
    }
    }


const CloseDialog = document.querySelector(".close-dialog");
const Dialog = document.querySelector(".dialog");
const Dialog_container = document.querySelector(".dialog-container");

/* OGROMNE ALERT */

class Helm{
    constructor(name, img, active, shown, moc, wiedza){
        this.name = name;
        this.img = img;
        this.active = active;
        this.shown = shown;
        this.moc = moc;
        this.wiedza = wiedza;
    }
    isActive(activated){
        console.log(this.active, this.name)
        this.active = activated;
        console.log(this.active);
        

            if(this.active === true){
                helmIcon.style.backgroundImage = `url(${this.img})`;
                console.log(this.img);
                helmIcon.setAttribute("current-item", this.name);
                checkRemoveButton(helmIcon, "helm-icon", "helmIcon");
            }
            if(this.active === false){
                helmIcon.style.backgroundImage = "none";
            }
    }
    
    isShown(){
        checkRemoveButton(helmIcon, "helm-icon", "helmIcon");
        let newDialogImage = document.createElement("a")
        newDialogImage.style.backgroundImage = `url(${this.img}`;
        newDialogImage.setAttribute("class", `${this.name} dialog-img`);
        Dialog_container.appendChild(newDialogImage);
        activeHelmItems.push(newDialogImage);
        
        this.shown = true;

    }
    isHovered(){
        if(this.shown === true){
            Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
            console.log(this.name);
        }
        
    }
    isNotHovered(){
        if(this.shown === true){
        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
    }
}
}


const ZbiorHelmow = {
Martumal: new Helm("Martumal", "img/martumal.png", false, false, "Moc: +8", "Wiedza: +7"),
Grzebien: new Helm("Grzebien", "img/grzebien.png", false, false, ),
Ishelm: new Helm("Ishelm", "img/ishelm.png", false, false, ),
Khalam: new Helm("Khalam","img/khalam.png", false, false, ),
Czacha: new Helm("Czacha", "img/czacha.png", false, false,),
Gathril: new Helm("Gathril", "img/gathril.png", false, false,),
Ghaitarog: new Helm("Ghaitarog", "img/ghaitarog.png", false, false,),
Htagan: new Helm("Htagan", "img/htagan.png", false, false,),
Milosc_morany: new Helm("Milosc_morany", "img/milosc_morany.png", false, false,),
Pamiec_morany: new Helm("Pamiec_morany", "img/pamiec_morany.png", false, false,),
Pysk: new Helm("Pysk", "img/pysk.png", false, false,),
Sigil: new Helm("Sigil", "img/sigil.png", false, false,)
}

class Zbroja{
    constructor(name, img, active, shown){
        this.name = name;
        this.img = img;
        this.active = active;
        this.shown = shown;
    }
    isActive(activated){
        console.log(this.active, this.name)
        this.active = activated;
        console.log(this.active);

            if(this.active === true){
                zbrojaIcon.style.backgroundImage = `url(${this.img})`;
                console.log(this.img);
                zbrojaIcon.setAttribute("current-item", this.name);
                checkRemoveButton(zbrojaIcon, "zbroja-icon", "zbrojaIcon");
                
            }
            if(this.active === false){
                zbrojaIcon.style.backgroundImage = "none";
            }
    }
    isShown(){
        let newDialogImage = document.createElement("a")
        newDialogImage.style.backgroundImage = `url(${this.img}`;
        newDialogImage.setAttribute("class", `${this.name} dialog-img`);
        Dialog_container.appendChild(newDialogImage);
        checkRemoveButton(zbrojaIcon, "zbroja-icon", "zbrojaIcon");    
        activeZbrojaItems.push(newDialogImage);

        this.shown = true;
    }

    isHovered(){
        if(this.shown === true){
            Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
            console.log(this.name);
        }
        
    }
    isNotHovered(){
        if(this.shown === true){
        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
    }
}
}

const ZbiorZbroi = {
    Bartaur: new Zbroja("Bartaur", "img/bartaur.png", false,false),
    Brunnle: new Zbroja("Brunnle", "img/brunnle.png", false,false),
    Diabolo: new Zbroja("Diabolo", "img/diabolo.png", false,false),
    Dmorlung: new Zbroja("Dmorlung","img/dmorlung.png", false,false),
    Harttraum: new Zbroja("Harttraum", "img/harttraum.png", false, false),
    Nadzieja_pokolen: new Zbroja("Nadzieja_pokolen", "img/nadzieja_pokolen.png", false, false),
    Opoka_bogow: new Zbroja("Opoka_bogow", "img/opoka_bogow.png", false, false),
    Pancerz_komandorski: new Zbroja("Pancerz_komandorski", "img/pancerz_komandorski.png", false, false),
    Salmurn: new Zbroja("Salmurn", "img/salmurn.png", false, false),
    Virthil: new Zbroja("Virthil", "img/virthil.png", false, false),
    Zalla: new Zbroja("Zalla", "img/zalla.png", false, false),
 
    }

    class Naszyjnik{
        constructor(name, img, active, shown){
            this.name = name;
            this.img = img;
            this.active = active;
            this.shown = shown;
        }
        isActive(activated){
            console.log(this.active, this.name)
            this.active = activated;
            console.log(this.active);
    
                if(this.active === true){
                    naszyjnikIcon.style.backgroundImage = `url(${this.img})`;
                    console.log(this.img);
                    checkRemoveButton(naszyjnikIcon, "naszyjnik-icon", "naszyjnikIcon");
                    naszyjnikIcon.setAttribute("current-item", this.name);
                    
                }
                if(this.active === false){
                    naszyjnikIcon.style.backgroundImage = "none";
                }
        }
        isShown(){
            let newDialogImage = document.createElement("a")
            newDialogImage.style.backgroundImage = `url(${this.img})`;
            newDialogImage.setAttribute("class", `${this.name} dialog-img`);
            Dialog_container.appendChild(newDialogImage);
            activeNaszyjnikItems.push(newDialogImage);
            checkRemoveButton(naszyjnikIcon, "naszyjnik-icon", "naszyjnikIcon");    
            
            this.shown = true;
        }

        isHovered(){
            if(this.shown === true){
                Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                console.log(this.name);
            }
            
        }
        isNotHovered(){
            if(this.shown === true){
            Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
        }
    }

    }

    const ZbiorNaszyjnikow = {
        Caratris: new Naszyjnik("Caratris", "img/caratris.png", false, false),
        Danthum: new Naszyjnik("Danthum", "img/danthum.png", false, false),
        Dorbis: new Naszyjnik("Dorbis", "img/dorbis.png", false, false),
        Maiarot: new Naszyjnik("Maiarot","img/maiarot.png", false, false),
        Markahn: new Naszyjnik("Markahn","img/markahn.png", false, false),
        Obroza_wladcy: new Naszyjnik("Obroza_wladcy","img/obroza_wladcy.png", false, false),
        Ortasis: new Naszyjnik("Ortasis","img/ortasis.png", false, false),
        Ostolbin: new Naszyjnik("Ostolbin","img/ostolbin.png", false, false),
        Serce_seleny: new Naszyjnik("Serce_seleny","img/serce_seleny.png", false, false),
        Sphaera: new Naszyjnik("Sphaera","img/sphaera.png", false, false),
        Valazan: new Naszyjnik("Valazan","img/valazan.png", false, false),
        Vogurun: new Naszyjnik("Vogurun","img/vogurun.png", false, false),
        Zemsta_ivravula: new Naszyjnik("Zemsta_ivravula","img/zemsta_ivravula.png", false, false),
        
        }

        class Rekawice{
            constructor(name, img, active, shown){
                this.name = name;
                this.img = img;
                this.active = active;
                this.shown = shown;
            }
            isActive(activated){
                console.log(this.active, this.name)
                this.active = activated;
                console.log(this.active);
        
                    if(this.active === true){
                        rekawiceIcon.style.backgroundImage = `url(${this.img})`;
                        console.log(this.img);
                        checkRemoveButton(rekawiceIcon, "rekawice-icon", "rekawiceIcon");
                        rekawiceIcon.setAttribute("current-item", this.name);
                        
                    }
                    if(this.active === false){
                        rekawiceIcon.style.backgroundImage = "none";
                    }
            }
            isShown(){
                let newDialogImage = document.createElement("a")
                newDialogImage.style.backgroundImage = `url(${this.img})`;
                newDialogImage.setAttribute("class", `${this.name} dialog-img`);
                Dialog_container.appendChild(newDialogImage);
                activeRekawiceItems.push(newDialogImage);
                checkRemoveButton(rekawiceIcon, "rekawice-icon", "rekawiceIcon");    
                
                this.shown = true;
            }
    
            isHovered(){
                if(this.shown === true){
                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                    console.log(this.name);
                }
                
            }
            isNotHovered(){
                if(this.shown === true){
                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
            }
        }
    
        }

        const ZbiorRekawic = {
            Aeterus_passio: new Rekawice("Aeterus_passio", "img/aeterus_passio.png", false, false),
            Biltabandury: new Rekawice("Biltabandury", "img/biltabandury.png", false, false),
            Brassary: new Rekawice("Brassary", "img/brassary.png", false, false),
            Fraxy: new Rekawice("Fraxy","img/fraxy.png", false, false),
            Gest_wladcy: new Rekawice("Gest_wladcy","img/gest_wladcy.png", false, false),
            Pazury: new Rekawice("Pazury","img/pazury.png", false, false),
            Skry_utoru: new Rekawice("Skry_utoru","img/skry_utoru.png", false, false),
            Szpony_seimhi: new Rekawice("Szpony_seimhi","img/szpony_seimhi.png", false, false),
            Vaekany: new Rekawice("Vaekany","img/vaekany.png", false, false),
            Zadry: new Rekawice("Zadry","img/zadry.png", false, false),
            
            }

            class Peleryna{
                constructor(name, img, active, shown){
                    this.name = name;
                    this.img = img;
                    this.active = active;
                    this.shown = shown;
                }
                isActive(activated){
                    console.log(this.active, this.name)
                    this.active = activated;
                    console.log(this.active);
            
                        if(this.active === true){
                            pelerynaIcon.style.backgroundImage = `url(${this.img})`;
                            console.log(this.img);
                            checkRemoveButton(pelerynaIcon, "peleryna-icon", "pelerynaIcon");
                            pelerynaIcon.setAttribute("current-item", this.name);
                            
                        }
                        if(this.active === false){
                            pelerynaIcon.style.backgroundImage = "none";
                        }
                }
                isShown(){
                    let newDialogImage = document.createElement("a")
                    newDialogImage.style.backgroundImage = `url(${this.img})`;
                    newDialogImage.setAttribute("class", `${this.name} dialog-img peleryna-items`);
                    Dialog_container.appendChild(newDialogImage);
                    activePelerynaItems.push(newDialogImage);
                    checkRemoveButton(pelerynaIcon, "peleryna-icon", "pelerynaIcon");    
                    
                    this.shown = true;
                }
        
                isHovered(){
                    if(this.shown === true){
                        Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                        console.log(this.name);
                    }
                    
                }
                isNotHovered(){
                    if(this.shown === true){
                    Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                }
            }
        
            }
        const ZbiorPeleryn = {
            Admiralski_gronostaj: new Peleryna("Admiralski_gronostaj", "img/admiralski_gronostaj.png", false, false),
            Angvallion: new Peleryna("Angvallion", "img/angvallion.png", false, false),
            Bryza: new Peleryna("Bryza", "img/bryza.png", false, false),
            Cien_tarula: new Peleryna("Cien_tarula","img/cien_tarula.png", false, false),
            Debba: new Peleryna("Debba","img/debba.png", false, false),
            Dracorporis: new Peleryna("Dracorporis","img/dracorporis.png", false, false),
            Hanba_seleny: new Peleryna("Hanba_seleny","img/hanba_seleny.png", false, false),
            Powrot_ivravula: new Peleryna("Powrot_ivravula","img/powrot_ivravula.png", false, false),
            Tsunami: new Peleryna("Tsunami","img/tsunami.png", false, false),
            Xenothor: new Peleryna("Xenothor","img/xenothor.png", false, false),
            Nurthil: new Peleryna("Nurthil","img/nurthil.png", false, false),
                
                }

                class Bron{
                    constructor(name, img, active, shown){
                        this.name = name;
                        this.img = img;
                        this.active = active;
                        this.shown = shown;
                    }
                    isActive(activated){
                        console.log(this.active, this.name)
                        this.active = activated;
                        console.log(this.active);
                
                            if(this.active === true){
                                bronIcon.style.backgroundImage = `url(${this.img})`;
                                console.log(this.img);
                                checkRemoveButton(bronIcon, "bron-icon", "bronIcon");
                                bronIcon.setAttribute("current-item", this.name);
                                
                            }
                            if(this.active === false){
                                bronIcon.style.backgroundImage = "none";
                            }
                    }
                    isShown(){
                        let newDialogImage = document.createElement("a")
                        newDialogImage.style.backgroundImage = `url(${this.img})`;
                        newDialogImage.setAttribute("class", `${this.name} dialog-img bron-items`);
                        Dialog_container.appendChild(newDialogImage);
                        activeBronItems.push(newDialogImage);
                        checkRemoveButton(bronIcon, "bron-icon", "bronIcon");    
                        
                        this.shown = true;
                    }
            
                    isHovered(){
                        if(this.shown === true){
                            Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                            console.log(this.name);
                        }
                        
                    }
                    isNotHovered(){
                        if(this.shown === true){
                        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                    }
                }
            
                }
        
                const ZbiorBroni = {
                    Ayol: new Bron("Ayol", "img/ayol.png", false, false),
                    Batagur: new Bron("Batagur", "img/batagur.png", false, false),
                    Bol: new Bron("Bol", "img/bol.png", false, false),
                    Buoriany: new Bron("Buoriany","img/buoriany.png", false, false),
                    Ciern: new Bron("Ciern","img/ciern.png", false, false),
                    Davgretor: new Bron("Davgretor","img/davgretor.png", false, false),
                    Derengil: new Bron("Derengil","img/derengil.png", false, false),
                    Geomorph_core: new Bron("Geomorph_core","img/geomorph_core.png", false, false),
                    Gjolmar: new Bron("Gjolmar","img/gjolmar.png", false, false),
                    Istav: new Bron("Istav","img/istav.png", false, false),
                    Isverd: new Bron("Isverd","img/isverd.png", false, false),
                    Lawina: new Bron("Lawina","img/lawina.png", false, false),
                    Mallus_selenorum: new Bron("Mallus_selenorum","img/mallus_selenorum.png", false, false),
                    Ognisty_mlot: new Bron("Ognisty_mlot","img/ognisty_mlot.png", false, false),
                    Piroklast: new Bron("Piroklast","img/piroklast.png", false, false),
                    Rolrak: new Bron("Rolrak","img/rolrak.png", false, false),
                    Sidun: new Bron("Sidun","img/sidun.png", false, false),
                    Smoczy_gnat: new Bron("Smoczy_gnat","img/smoczy_gnat.png", false, false),
                    Sturprang: new Bron("Sturprang","img/sturprang.png", false, false),
                    Taehal: new Bron("Taehal","img/taehal.png", false, false),
                    Tasak: new Bron("Tasak","img/tasak.png", false, false),
                    Tezec: new Bron("Tezec","img/tezec.png", false, false),
                    Trojzab_admiralski: new Bron("Trojzab_admiralski","img/trojzab_admiralski.png", false, false),
                    Urntsul: new Bron("Urntsul","img/urntsul.png", false, false),
                    Virral: new Bron("Virral","img/virral.png", false, false),
                    Wladca_losu: new Bron("Wladca_losu","img/wladca_losu.png", false, false),
                        
                        }



    function openDialog($currentTile){
        Dialog.showModal();
        
         /* ZBROJA */ 
        
        if($currentTile == Tiles[0]){
            console.log($currentTile);
            Dialog_container.innerHTML = "<h1>Zbroja: </h1>";
            ZbiorZbroi.Bartaur.isShown();

                if(activeZbrojaItems[0]){
                    console.log(activeZbrojaItems[0]);
                    activeZbrojaItems[0].addEventListener("click", () => {
                        ZbiorZbroi.Bartaur.isActive(true);
                    })

                    activeZbrojaItems[0].addEventListener("mouseover", () => {
                        ZbiorZbroi.Bartaur.isHovered()
                    });
                    activeZbrojaItems[0].addEventListener("mouseout", () => {
                        ZbiorZbroi.Bartaur.isNotHovered()
                    });
                    
                }
            ZbiorZbroi.Brunnle.isShown();
            if(activeZbrojaItems[1]){
                console.log(activeZbrojaItems[1]);
                activeZbrojaItems[1].addEventListener("click", () => {
                    ZbiorZbroi.Brunnle.isActive(true);
                })
                activeZbrojaItems[1].addEventListener("mouseover", () => {
                    ZbiorZbroi.Brunnle.isHovered()
                });
                activeZbrojaItems[1].addEventListener("mouseout", () => {
                    ZbiorZbroi.Brunnle.isNotHovered()
                });
                
            }
            ZbiorZbroi.Diabolo.isShown();
                if(activeZbrojaItems[2]){
                    console.log(activeZbrojaItems[2]);
                    activeZbrojaItems[2].addEventListener("click", () => {
                        ZbiorZbroi.Diabolo.isActive(true);
                })
                activeZbrojaItems[2].addEventListener("mouseover", () => {
                    ZbiorZbroi.Diabolo.isHovered()
                });
                activeZbrojaItems[2].addEventListener("mouseout", () => {
                    ZbiorZbroi.Diabolo.isNotHovered()
                });
            }
            ZbiorZbroi.Dmorlung.isShown();
                if(activeZbrojaItems[3]){
                    console.log(activeZbrojaItems[3]);
                    activeZbrojaItems[3].addEventListener("click", () => {
                        ZbiorZbroi.Dmorlung.isActive(true);
                })
                activeZbrojaItems[3].addEventListener("mouseover", () => {
                    ZbiorZbroi.Dmorlung.isHovered()
                });
                activeZbrojaItems[3].addEventListener("mouseout", () => {
                    ZbiorZbroi.Dmorlung.isNotHovered()
                });
        }
            ZbiorZbroi.Harttraum.isShown();
                if(activeZbrojaItems[4]){
                    console.log(activeZbrojaItems[4]);
                    activeZbrojaItems[4].addEventListener("click", () => {
                        ZbiorZbroi.Harttraum.isActive(true);
                })
                activeZbrojaItems[4].addEventListener("mouseover", () => {
                    ZbiorZbroi.Harttraum.isHovered()
                });
                activeZbrojaItems[4].addEventListener("mouseout", () => {
                    ZbiorZbroi.Harttraum.isNotHovered()
                });
        }
            ZbiorZbroi.Nadzieja_pokolen.isShown();
                if(activeZbrojaItems[5]){
                    console.log(activeZbrojaItems[5]);
                    activeZbrojaItems[5].addEventListener("click", () => {
                        ZbiorZbroi.Nadzieja_pokolen.isActive(true);
                })
                activeZbrojaItems[5].addEventListener("mouseover", () => {
                    ZbiorZbroi.Nadzieja_pokolen.isHovered()
                });
                activeZbrojaItems[5].addEventListener("mouseout", () => {
                    ZbiorZbroi.Nadzieja_pokolen.isNotHovered()
                });
        }
            ZbiorZbroi.Opoka_bogow.isShown();
                if(activeZbrojaItems[6]){
                    console.log(activeZbrojaItems[6]);
                    activeZbrojaItems[6].addEventListener("click", () => {
                        ZbiorZbroi.Opoka_bogow.isActive(true);
                })
                activeZbrojaItems[6].addEventListener("mouseover", () => {
                    ZbiorZbroi.Opoka_bogow.isHovered()
                });
                activeZbrojaItems[6].addEventListener("mouseout", () => {
                    ZbiorZbroi.Opoka_bogow.isNotHovered()
                });
        }
            ZbiorZbroi.Pancerz_komandorski.isShown();
                if(activeZbrojaItems[7]){
                    console.log(activeZbrojaItems[7]);
                    activeZbrojaItems[7].addEventListener("click", () => {
                        ZbiorZbroi.Pancerz_komandorski.isActive(true);
                })
                activeZbrojaItems[7].addEventListener("mouseover", () => {
                    ZbiorZbroi.Pancerz_komandorski.isHovered()
                });
                activeZbrojaItems[7].addEventListener("mouseout", () => {
                    ZbiorZbroi.Pancerz_komandorski.isNotHovered()
                });
        }
            ZbiorZbroi.Salmurn.isShown();
                if(activeZbrojaItems[8]){
                    console.log(activeZbrojaItems[8]);
                    activeZbrojaItems[8].addEventListener("click", () => {
                        ZbiorZbroi.Salmurn.isActive(true);
                })
                activeZbrojaItems[8].addEventListener("mouseover", () => {
                    ZbiorZbroi.Salmurn.isHovered()
                });
                activeZbrojaItems[8].addEventListener("mouseout", () => {
                    ZbiorZbroi.Salmurn.isNotHovered()
                });
        }
            ZbiorZbroi.Virthil.isShown();
                if(activeZbrojaItems[9]){
                    console.log(activeZbrojaItems[9]);
                    activeZbrojaItems[9].addEventListener("click", () => {
                        ZbiorZbroi.Virthil.isActive(true);
                })
                activeZbrojaItems[9].addEventListener("mouseover", () => {
                    ZbiorZbroi.Virthil.isHovered()
                });
                activeZbrojaItems[9].addEventListener("mouseout", () => {
                    ZbiorZbroi.Virthil.isNotHovered()
                });
        }
            ZbiorZbroi.Zalla.isShown();
                if(activeZbrojaItems[10]){
                    console.log(activeZbrojaItems[10]);
                    activeZbrojaItems[10].addEventListener("click", () => {
                        ZbiorZbroi.Zalla.isActive(true);
                })
                activeZbrojaItems[10].addEventListener("mouseover", () => {
                    ZbiorZbroi.Zalla.isHovered()
                });
                activeZbrojaItems[10].addEventListener("mouseout", () => {
                    ZbiorZbroi.Zalla.isNotHovered()
                });
        }
    }

    /* HEŁM */

    else if ($currentTile == Tiles[1]){
        Dialog_container.innerHTML = "<h1>Hełm: </h1>";


        ZbiorHelmow.Martumal.isShown();
            if(activeHelmItems[0]){
                console.log(activeHelmItems[0]);
                
                activeHelmItems[0].addEventListener("click", () => {
                    ZbiorHelmow.Martumal.isActive(true);

                })
                activeHelmItems[0].addEventListener("mouseover", () => {
                    ZbiorHelmow.Martumal.isHovered()
                });
                activeHelmItems[0].addEventListener("mouseout", () => {
                    ZbiorHelmow.Martumal.isNotHovered()
                });
                
            }
        ZbiorHelmow.Grzebien.isShown();
        if(activeHelmItems[1]){
            console.log(activeHelmItems[1]);
            activeHelmItems[1].addEventListener("click", () => {
                ZbiorHelmow.Grzebien.isActive(true);

            })
            activeHelmItems[1].addEventListener("mouseover", () => { 
                ZbiorHelmow.Grzebien.isHovered()
            });
            activeHelmItems[1].addEventListener("mouseout", () => { 
                ZbiorHelmow.Grzebien.isNotHovered()
            });
            
        }
        ZbiorHelmow.Ishelm.isShown();
            if(activeHelmItems[2]){
                console.log(activeHelmItems[2]);
                activeHelmItems[2].addEventListener("click", () => {
                    ZbiorHelmow.Ishelm.isActive(true);

            })
            activeHelmItems[2].addEventListener("mouseover",() => {
                ZbiorHelmow.Ishelm.isHovered()
            });
            activeHelmItems[2].addEventListener("mouseout",() => {
                ZbiorHelmow.Ishelm.isNotHovered()
            });
        }
        ZbiorHelmow.Khalam.isShown();
            if(activeHelmItems[3]){
                console.log(activeHelmItems[3]);
                activeHelmItems[3].addEventListener("click", () => {
                    ZbiorHelmow.Khalam.isActive(true);

            })
            activeHelmItems[3].addEventListener("mouseover", () => {
                ZbiorHelmow.Khalam.isHovered()
            } );
            activeHelmItems[3].addEventListener("mouseout", () => {
                ZbiorHelmow.Khalam.isNotHovered()
            } );
    }
        ZbiorHelmow.Czacha.isShown();
            if(activeHelmItems[4]){
                console.log(activeHelmItems[4]);
                activeHelmItems[4].addEventListener("click", () => {
                    ZbiorHelmow.Czacha.isActive(true);

            })
            activeHelmItems[4].addEventListener("mouseover", () => {
                ZbiorHelmow.Czacha.isHovered()
            } );
            activeHelmItems[4].addEventListener("mouseout", () => {
                ZbiorHelmow.Czacha.isNotHovered()
            } );
    }
        ZbiorHelmow.Gathril.isShown();
            if(activeHelmItems[5]){
                console.log(activeHelmItems[5]);
                activeHelmItems[5].addEventListener("click", () => {
                    ZbiorHelmow.Gathril.isActive(true);

            })
            activeHelmItems[5].addEventListener("mouseover", () => {
                ZbiorHelmow.Gathril.isHovered()
            } );
            activeHelmItems[5].addEventListener("mouseout", () => {
                ZbiorHelmow.Gathril.isNotHovered()
            } );
    }
        ZbiorHelmow.Ghaitarog.isShown();
            if(activeHelmItems[6]){
                console.log(activeHelmItems[6]);
                activeHelmItems[6].addEventListener("click", () => {
                    ZbiorHelmow.Ghaitarog.isActive(true);

            })
            activeHelmItems[6].addEventListener("mouseover", () => {
                ZbiorHelmow.Ghaitarog.isHovered()
            } );
            activeHelmItems[6].addEventListener("mouseout", () => {
                ZbiorHelmow.Ghaitarog.isNotHovered()
            } );
    }
        ZbiorHelmow.Htagan.isShown();
            if(activeHelmItems[7]){
                console.log(activeHelmItems[7]);
                activeHelmItems[7].addEventListener("click", () => {
                    ZbiorHelmow.Htagan.isActive(true);

            })
            activeHelmItems[7].addEventListener("mouseover", () => {
                ZbiorHelmow.Htagan.isHovered()
            } );
            activeHelmItems[7].addEventListener("mouseout", () => {
                ZbiorHelmow.Htagan.isNotHovered()
            } );
    }
        ZbiorHelmow.Milosc_morany.isShown();
            if(activeHelmItems[8]){
                console.log(activeHelmItems[8]);
                activeHelmItems[8].addEventListener("click", () => {
                    ZbiorHelmow.Milosc_morany.isActive(true);

            })
            activeHelmItems[8].addEventListener("mouseover", () => {
                ZbiorHelmow.Milosc_morany.isHovered()
            } );
            activeHelmItems[8].addEventListener("mouseout", () => {
                ZbiorHelmow.Milosc_morany.isNotHovered()
            } );
    }
        ZbiorHelmow.Pamiec_morany.isShown();
            if(activeHelmItems[9]){
                console.log(activeHelmItems[9]);
                activeHelmItems[9].addEventListener("click", () => {
                    ZbiorHelmow.Pamiec_morany.isActive(true);

            })
            activeHelmItems[9].addEventListener("mouseover", () => {
                ZbiorHelmow.Pamiec_morany.isHovered()
            } );
            activeHelmItems[9].addEventListener("mouseout", () => {
                ZbiorHelmow.Pamiec_morany.isNotHovered()
            } );
    }
        ZbiorHelmow.Pysk.isShown();
            if(activeHelmItems[10]){
                console.log(activeHelmItems[10]);
                activeHelmItems[10].addEventListener("click", () => {
                    ZbiorHelmow.Pysk.isActive(true);

            })
            activeHelmItems[10].addEventListener("mouseover", () => {
                ZbiorHelmow.Pysk.isHovered()
            } );
            activeHelmItems[10].addEventListener("mouseout", () => {
                ZbiorHelmow.Pysk.isNotHovered()
            } );
    }
        ZbiorHelmow.Sigil.isShown();
            if(activeHelmItems[11]){
                console.log(activeHelmItems[11]);
                activeHelmItems[11].addEventListener("click", () => {
                    ZbiorHelmow.Sigil.isActive(true);

            })
            activeHelmItems[11].addEventListener("mouseover", () => {
                ZbiorHelmow.Sigil.isHovered()
            } );
            activeHelmItems[11].addEventListener("mouseout", () => {
                ZbiorHelmow.Sigil.isNotHovered()
            } );
    }

    
}
        
        /* NASZYJNIK */

        else if($currentTile == Tiles[2]){
            console.log($currentTile);
            Dialog_container.innerHTML = "<h1>Naszyjnik: </h1>";
            ZbiorNaszyjnikow.Caratris.isShown();

                if(activeNaszyjnikItems[0]){
                    console.log(activeNaszyjnikItems[0]);
                    activeNaszyjnikItems[0].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Caratris.isActive(true);
                    })
                    activeNaszyjnikItems[0].addEventListener("mouseover", () => {
                        ZbiorNaszyjnikow.Caratris.isHovered()
                    });
                    activeNaszyjnikItems[0].addEventListener("mouseout", () => {
                        ZbiorNaszyjnikow.Caratris.isNotHovered()
                    });
                    
                }
            ZbiorNaszyjnikow.Danthum.isShown();
            if(activeNaszyjnikItems[1]){
                console.log(activeNaszyjnikItems[1]);
                activeNaszyjnikItems[1].addEventListener("click", () => {
                    ZbiorNaszyjnikow.Danthum.isActive(true);
                })
                activeNaszyjnikItems[1].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Danthum.isHovered()
                });
                activeNaszyjnikItems[1].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Danthum.isNotHovered()
                });
                
            }
            ZbiorNaszyjnikow.Dorbis.isShown();
                if(activeNaszyjnikItems[2]){
                    console.log(activeNaszyjnikItems[2]);
                    activeNaszyjnikItems[2].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Dorbis.isActive(true);
                })
                activeNaszyjnikItems[2].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Dorbis.isHovered()
                });
                activeNaszyjnikItems[2].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Dorbis.isNotHovered()
                });
            }
            ZbiorNaszyjnikow.Maiarot.isShown();
                if(activeNaszyjnikItems[3]){
                    console.log(activeNaszyjnikItems[3]);
                    activeNaszyjnikItems[3].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Maiarot.isActive(true);
                })
                activeNaszyjnikItems[3].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Maiarot.isHovered()
                });
                activeNaszyjnikItems[3].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Maiarot.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Markahn.isShown();
                if(activeNaszyjnikItems[4]){
                    console.log(activeNaszyjnikItems[4]);
                    activeNaszyjnikItems[4].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Markahn.isActive(true);
                })
                activeNaszyjnikItems[4].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Markahn.isHovered()
                });
                activeNaszyjnikItems[4].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Markahn.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Obroza_wladcy.isShown();
                if(activeNaszyjnikItems[5]){
                    console.log(activeNaszyjnikItems[5]);
                    activeNaszyjnikItems[5].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Obroza_wladcy.isActive(true);
                })
                activeNaszyjnikItems[5].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Obroza_wladcy.isHovered()
                });
                activeNaszyjnikItems[5].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Obroza_wladcy.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Ortasis.isShown();
                if(activeNaszyjnikItems[6]){
                    console.log(activeNaszyjnikItems[6]);
                    activeNaszyjnikItems[6].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Ortasis.isActive(true);
                })
                activeNaszyjnikItems[6].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Ortasis.isHovered()
                });
                activeNaszyjnikItems[6].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Ortasis.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Ostolbin.isShown();
                if(activeNaszyjnikItems[7]){
                    console.log(activeNaszyjnikItems[7]);
                    activeNaszyjnikItems[7].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Ostolbin.isActive(true);
                })
                activeNaszyjnikItems[7].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Ostolbin.isHovered()
                });
                activeNaszyjnikItems[7].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Ostolbin.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Serce_seleny.isShown();
                if(activeNaszyjnikItems[8]){
                    console.log(activeNaszyjnikItems[8]);
                    activeNaszyjnikItems[8].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Serce_seleny.isActive(true);
                })
                activeNaszyjnikItems[8].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Serce_seleny.isHovered()
                });
                activeNaszyjnikItems[8].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Serce_seleny.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Sphaera.isShown();
                if(activeNaszyjnikItems[9]){
                    console.log(activeNaszyjnikItems[9]);
                    activeNaszyjnikItems[9].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Sphaera.isActive(true);
                })
                activeNaszyjnikItems[9].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Sphaera.isHovered()
                });
                activeNaszyjnikItems[9].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Sphaera.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Valazan.isShown();
                if(activeNaszyjnikItems[10]){
                    console.log(activeNaszyjnikItems[10]);
                    activeNaszyjnikItems[10].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Valazan.isActive(true);
                })
                activeNaszyjnikItems[10].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Valazan.isHovered()
                });
                activeNaszyjnikItems[10].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Valazan.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Vogurun.isShown();
                if(activeNaszyjnikItems[11]){
                    console.log(activeNaszyjnikItems[11]);
                    activeNaszyjnikItems[11].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Vogurun.isActive(true);
                })
                activeNaszyjnikItems[11].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Vogurun.isHovered()
                });
                activeNaszyjnikItems[11].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Vogurun.isNotHovered()
                });
        }
            ZbiorNaszyjnikow.Zemsta_ivravula.isShown();
                if(activeNaszyjnikItems[12]){
                    console.log(activeNaszyjnikItems[12]);
                    activeNaszyjnikItems[12].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Zemsta_ivravula.isActive(true);
                })
                activeNaszyjnikItems[12].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Zemsta_ivravula.isHovered()
                });
                activeNaszyjnikItems[12].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Zemsta_ivravula.isNotHovered()
                });
        }

        

        
    
    }

        /* RĘKAWICE */
    
    else if($currentTile == Tiles[3]){
            console.log($currentTile);
            Dialog_container.innerHTML = "<h1>Rękawice: </h1>";

            ZbiorRekawic.Aeterus_passio.isShown();

                if(activeRekawiceItems[0]){
                    console.log(activeRekawiceItems[0]);
                    activeRekawiceItems[0].addEventListener("click", () => {
                        ZbiorRekawic.Aeterus_passio.isActive(true);
                    })
                    activeRekawiceItems[0].addEventListener("mouseover", () => {
                        ZbiorRekawic.Aeterus_passio.isHovered()
                    });
                    activeRekawiceItems[0].addEventListener("mouseout", () => {
                        ZbiorRekawic.Aeterus_passio.isNotHovered()
                    });
                    
                }

            ZbiorRekawic.Biltabandury.isShown();

            if(activeRekawiceItems[1]){
                console.log(activeRekawiceItems[1]);
                activeRekawiceItems[1].addEventListener("click", () => {
                    ZbiorRekawic.Biltabandury.isActive(true);
                })
                activeRekawiceItems[1].addEventListener("mouseover", () => {
                    ZbiorRekawic.Biltabandury.isHovered()
                });
                activeRekawiceItems[1].addEventListener("mouseout", () => {
                    ZbiorRekawic.Biltabandury.isNotHovered()
                });
                
            }

            ZbiorRekawic.Brassary.isShown();

                if(activeRekawiceItems[2]){
                    console.log(activeRekawiceItems[2]);
                    activeRekawiceItems[2].addEventListener("click", () => {
                        ZbiorRekawic.Brassary.isActive(true);
                })
                activeRekawiceItems[2].addEventListener("mouseover", () => {
                    ZbiorRekawic.Brassary.isHovered()
                });
                activeRekawiceItems[2].addEventListener("mouseout", () => {
                    ZbiorRekawic.Brassary.isNotHovered()
                });
            }

            ZbiorRekawic.Fraxy.isShown();
            
                if(activeRekawiceItems[3]){
                    console.log(activeRekawiceItems[3]);
                    activeRekawiceItems[3].addEventListener("click", () => {
                        ZbiorRekawic.Fraxy.isActive(true);
                })
                activeRekawiceItems[3].addEventListener("mouseover", () => {
                    ZbiorRekawic.Fraxy.isHovered()
                });
                activeRekawiceItems[3].addEventListener("mouseout", () => {
                    ZbiorRekawic.Fraxy.isNotHovered()
                });
        }
            ZbiorRekawic.Gest_wladcy.isShown();

                if(activeRekawiceItems[4]){
                    console.log(activeRekawiceItems[4]);
                    activeRekawiceItems[4].addEventListener("click", () => {
                        ZbiorRekawic.Gest_wladcy.isActive(true);
                })
                activeRekawiceItems[4].addEventListener("mouseover", () => {
                    ZbiorRekawic.Gest_wladcy.isHovered()
                });
                activeRekawiceItems[4].addEventListener("mouseout", () => {
                    ZbiorRekawic.Gest_wladcy.isNotHovered()
                });
        }
            ZbiorRekawic.Skry_utoru.isShown();

                if(activeRekawiceItems[5]){
                    console.log(activeRekawiceItems[5]);
                    activeRekawiceItems[5].addEventListener("click", () => {
                        ZbiorRekawic.Skry_utoru.isActive(true);
                })
                activeRekawiceItems[5].addEventListener("mouseover", () => {
                    ZbiorRekawic.Skry_utoru.isHovered()
                });
                activeRekawiceItems[5].addEventListener("mouseout", () => {
                    ZbiorRekawic.Skry_utoru.isNotHovered()
                });
        }
            ZbiorRekawic.Szpony_seimhi.isShown();

                if(activeRekawiceItems[6]){
                    console.log(activeRekawiceItems[6]);
                    activeRekawiceItems[6].addEventListener("click", () => {
                        ZbiorRekawic.Szpony_seimhi.isActive(true);
                })
                activeRekawiceItems[6].addEventListener("mouseover", () => {
                    ZbiorRekawic.Szpony_seimhi.isHovered()
                });
                activeRekawiceItems[6].addEventListener("mouseout", () => {
                    ZbiorRekawic.Szpony_seimhi.isNotHovered()
                });
        }
            ZbiorRekawic.Vaekany.isShown();

                if(activeRekawiceItems[7]){
                    console.log(activeRekawiceItems[7]);
                    activeRekawiceItems[7].addEventListener("click", () => {
                        ZbiorRekawic.Vaekany.isActive(true);
                })
                activeRekawiceItems[7].addEventListener("mouseover", () => {
                    ZbiorRekawic.Vaekany.isHovered()
                });
                activeRekawiceItems[7].addEventListener("mouseout", () => {
                    ZbiorRekawic.Vaekany.isNotHovered()
                });
        }
            ZbiorRekawic.Zadry.isShown();

                if(activeRekawiceItems[8]){
                    console.log(activeRekawiceItems[8]);
                    activeRekawiceItems[8].addEventListener("click", () => {
                        ZbiorRekawic.Zadry.isActive(true);
                })
                activeRekawiceItems[8].addEventListener("mouseover", () => {
                    ZbiorRekawic.Zadry.isHovered()
                });
                activeRekawiceItems[8].addEventListener("mouseout", () => {
                    ZbiorRekawic.Zadry.isNotHovered()
                });
        }
            ZbiorRekawic.Pazury.isShown();

                if(activeRekawiceItems[9]){
                    console.log(activeRekawiceItems[9]);
                    activeRekawiceItems[9].addEventListener("click", () => {
                        ZbiorRekawic.Pazury.isActive(true);
                })
                activeRekawiceItems[9].addEventListener("mouseover", () => {
                    ZbiorRekawic.Pazury.isHovered()
                });
                activeRekawiceItems[9].addEventListener("mouseout", () => {
                    ZbiorRekawic.Pazury.isNotHovered()
                });
        }

        
    }

      /* PELERYNA */

        else if($currentTile == Tiles[4]){
            console.log($currentTile);
            Dialog_container.innerHTML = "<h1>Peleryna: </h1>";

            ZbiorPeleryn.Admiralski_gronostaj.isShown();

                if(activePelerynaItems[0]){
                    console.log(activePelerynaItems[0]);
                    activePelerynaItems[0].addEventListener("click", () => {
                        ZbiorPeleryn.Admiralski_gronostaj.isActive(true);
                    })
                    activePelerynaItems[0].addEventListener("mouseover", () => {
                        ZbiorPeleryn.Admiralski_gronostaj.isHovered()
                    });
                    activePelerynaItems[0].addEventListener("mouseout", () => {
                        ZbiorPeleryn.Admiralski_gronostaj.isNotHovered()
                    });
                    
                }

            ZbiorPeleryn.Angvallion.isShown();
            
            if(activePelerynaItems[1]){
                console.log(activePelerynaItems[1]);
                activePelerynaItems[1].addEventListener("click", () => {
                    ZbiorPeleryn.Angvallion.isActive(true);
                })
                activePelerynaItems[1].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Angvallion.isHovered()
                });
                activePelerynaItems[1].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Angvallion.isNotHovered()
                });
                
            }

            ZbiorPeleryn.Bryza.isShown();

                if(activePelerynaItems[2]){
                    console.log(activePelerynaItems[2]);
                    activePelerynaItems[2].addEventListener("click", () => {
                        ZbiorPeleryn.Bryza.isActive(true);
                })
                activePelerynaItems[2].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Bryza.isHovered()
                });
                activePelerynaItems[2].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Bryza.isNotHovered()
                });
            }

            ZbiorPeleryn.Cien_tarula.isShown();

                if(activePelerynaItems[3]){
                    console.log(activePelerynaItems[3]);
                    activePelerynaItems[3].addEventListener("click", () => {
                        ZbiorPeleryn.Cien_tarula.isActive(true);
                })
                activePelerynaItems[3].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Cien_tarula.isHovered()
                });
                activePelerynaItems[3].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Cien_tarula.isNotHovered()
                });
        }

            ZbiorPeleryn.Debba.isShown();
            
                if(activePelerynaItems[4]){
                    console.log(activePelerynaItems[4]);
                    activePelerynaItems[4].addEventListener("click", () => {
                        ZbiorPeleryn.Debba.isActive(true);
                })
                activePelerynaItems[4].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Debba.isHovered()
                });
                activePelerynaItems[4].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Debba.isNotHovered()
                });
        }
            ZbiorPeleryn.Dracorporis.isShown();

                if(activePelerynaItems[5]){
                    console.log(activePelerynaItems[5]);
                    activePelerynaItems[5].addEventListener("click", () => {
                        ZbiorPeleryn.Dracorporis.isActive(true);
                })
                activePelerynaItems[5].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Dracorporis.isHovered()
                });
                activePelerynaItems[5].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Dracorporis.isNotHovered()
                });
        }
            ZbiorPeleryn.Nurthil.isShown();

                if(activePelerynaItems[6]){
                    console.log(activePelerynaItems[6]);
                    activePelerynaItems[6].addEventListener("click", () => {
                        ZbiorPeleryn.Nurthil.isActive(true);
                })
                activePelerynaItems[6].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Nurthil.isHovered()
                });
                activePelerynaItems[6].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Nurthil.isNotHovered()
                });
        }
            ZbiorPeleryn.Hanba_seleny.isShown();

                if(activePelerynaItems[7]){
                    console.log(activePelerynaItems[7]);
                    activePelerynaItems[7].addEventListener("click", () => {
                        ZbiorPeleryn.Hanba_seleny.isActive(true);
                })
                activePelerynaItems[7].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Hanba_seleny.isHovered()
                });
                activePelerynaItems[7].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Hanba_seleny.isNotHovered()
                });
        }
            ZbiorPeleryn.Powrot_ivravula.isShown();

                if(activePelerynaItems[8]){
                    console.log(activePelerynaItems[8]);
                    activePelerynaItems[8].addEventListener("click", () => {
                        ZbiorPeleryn.Powrot_ivravula.isActive(true);
                })
                activePelerynaItems[8].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Powrot_ivravula.isHovered()
                });
                activePelerynaItems[8].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Powrot_ivravula.isNotHovered()
                });
        }
            ZbiorPeleryn.Xenothor.isShown();

                if(activePelerynaItems[9]){
                    console.log(activePelerynaItems[9]);
                    activePelerynaItems[9].addEventListener("click", () => {
                        ZbiorPeleryn.Xenothor.isActive(true);
                })
                activePelerynaItems[9].addEventListener("mouseover", () => {
                    ZbiorPeleryn.Xenothor.isHovered()
                });
                activePelerynaItems[9].addEventListener("mouseout", () => {
                    ZbiorPeleryn.Xenothor.isNotHovered()
                });
        }

            /* POSTAĆ */

        }else if($currentTile == Tiles[5]){
/*             Dialog_container[5].innerHTML = "YOUR MOTHER"; */

            /* BROŃ */

        }else if($currentTile == Tiles[6]){
    
            Dialog_container.innerHTML = "<h1>Broń: </h1>";

            ZbiorBroni.Ayol.isShown();

                if(activeBronItems[0]){
                    console.log(activeBronItems[0]);
                    activeBronItems[0].addEventListener("click", () => {
                        ZbiorBroni.Ayol.isActive(true);
                    })
                    activeBronItems[0].addEventListener("mouseover", () => {
                        ZbiorBroni.Ayol.isHovered()
                    });
                    activeBronItems[0].addEventListener("mouseout", () => {
                        ZbiorBroni.Ayol.isNotHovered()
                    });
                    
                }

            ZbiorBroni.Batagur.isShown();
            
            if(activeBronItems[1]){
                console.log(activeBronItems[1]);
                activeBronItems[1].addEventListener("click", () => {
                    ZbiorBroni.Batagur.isActive(true);
                })
                activeBronItems[1].addEventListener("mouseover", () => {
                    ZbiorBroni.Batagur.isHovered()
                });
                activeBronItems[1].addEventListener("mouseout", () => {
                    ZbiorBroni.Batagur.isNotHovered()
                });
                
            }

            ZbiorBroni.Bol.isShown();

                if(activeBronItems[2]){
                    console.log(activeBronItems[2]);
                    activeBronItems[2].addEventListener("click", () => {
                        ZbiorBroni.Bol.isActive(true);
                })
                activeBronItems[2].addEventListener("mouseover", () => {
                    ZbiorBroni.Bol.isHovered()
                });
                activeBronItems[2].addEventListener("mouseout", () => {
                    ZbiorBroni.Bol.isNotHovered()
                });
            }

            ZbiorBroni.Buoriany.isShown();

                if(activeBronItems[3]){
                    console.log(activeBronItems[3]);
                    activeBronItems[3].addEventListener("click", () => {
                        ZbiorBroni.Buoriany.isActive(true);
                })
                activeBronItems[3].addEventListener("mouseover", () => {
                    ZbiorBroni.Buoriany.isHovered()
                });
                activeBronItems[3].addEventListener("mouseout", () => {
                    ZbiorBroni.Buoriany.isNotHovered()
                });
        }

            ZbiorBroni.Ciern.isShown();
            
                if(activeBronItems[4]){
                    console.log(activeBronItems[4]);
                    activeBronItems[4].addEventListener("click", () => {
                        ZbiorBroni.Ciern.isActive(true);
                })
                activeBronItems[4].addEventListener("mouseover", () => {
                    ZbiorBroni.Ciern.isHovered()
                });
                activeBronItems[4].addEventListener("mouseout", () => {
                    ZbiorBroni.Ciern.isNotHovered()
                });
        }
            ZbiorBroni.Davgretor.isShown();

                if(activeBronItems[5]){
                    console.log(activeBronItems[5]);
                    activeBronItems[5].addEventListener("click", () => {
                        ZbiorBroni.Davgretor.isActive(true);
                })
                activeBronItems[5].addEventListener("mouseover", () => {
                    ZbiorBroni.Davgretor.isHovered()
                });
                activeBronItems[5].addEventListener("mouseout", () => {
                    ZbiorBroni.Davgretor.isNotHovered()
                });
        }
            ZbiorBroni.Derengil.isShown();

                if(activeBronItems[6]){
                    console.log(activeBronItems[6]);
                    activeBronItems[6].addEventListener("click", () => {
                        ZbiorBroni.Derengil.isActive(true);
                })
                activeBronItems[6].addEventListener("mouseover", () => {
                    ZbiorBroni.Derengil.isHovered()
                });
                activeBronItems[6].addEventListener("mouseout", () => {
                    ZbiorBroni.Derengil.isNotHovered()
                });
        }
            ZbiorBroni.Geomorph_core.isShown();

                if(activeBronItems[7]){
                    console.log(activeBronItems[7]);
                    activeBronItems[7].addEventListener("click", () => {
                        ZbiorBroni.Geomorph_core.isActive(true);
                })
                activeBronItems[7].addEventListener("mouseover", () => {
                    ZbiorBroni.Geomorph_core.isHovered()
                });
                activeBronItems[7].addEventListener("mouseout", () => {
                    ZbiorBroni.Geomorph_core.isNotHovered()
                });
        }
            ZbiorBroni.Gjolmar.isShown();

                if(activeBronItems[8]){
                    console.log(activeBronItems[8]);
                    activeBronItems[8].addEventListener("click", () => {
                        ZbiorBroni.Gjolmar.isActive(true);
                })
                activeBronItems[8].addEventListener("mouseover", () => {
                    ZbiorBroni.Gjolmar.isHovered()
                });
                activeBronItems[8].addEventListener("mouseout", () => {
                    ZbiorBroni.Gjolmar.isNotHovered()
                });
        }
            ZbiorBroni.Istav.isShown();

                if(activeBronItems[9]){
                    console.log(activeBronItems[9]);
                    activeBronItems[9].addEventListener("click", () => {
                        ZbiorBroni.Istav.isActive(true);
                })
                activeBronItems[9].addEventListener("mouseover", () => {
                    ZbiorBroni.Istav.isHovered()
                });
                activeBronItems[9].addEventListener("mouseout", () => {
                    ZbiorBroni.Istav.isNotHovered()
                });
        }




            /* DODATKOWY PRZEDMIOT */

        }else if($currentTile == Tiles[7]){
    
            /* KARWASZE */

        }else if($currentTile == Tiles[8]){
    
            /* SPODNIE */

        }else if($currentTile == Tiles[9]){
    
            /* PAS */

        }else if($currentTile == Tiles[10]){
        
            /* PIERŚCIEŃ 1 */

        }else if($currentTile == Tiles[11]){
        
            /* PIERŚCIEŃ 2 */

        }else if($currentTile == Tiles[12]){
        
            /* BUTY */

        }else if($currentTile == Tiles[13]){
        
            /* DODATKOWE ZDOLNOŚCI PANCERZA */

        }else if($currentTile == Tiles[14]){
        

        }


       
    CloseDialog.addEventListener("click", () => {
        Dialog.close(); 

        //e.firstElementChild can be used. 
        let child = Dialog_container.firstElementChild;
        while (child) {
            Dialog_container.removeChild(child);
            child = Dialog_container.firstElementChild;
        }
        activeHelmItems = [];
        activeZbrojaItems = [];
        activeNaszyjnikItems = [];
        activeRekawiceItems = [];
        activePelerynaItems = [];
        removeButton = null;
        removeButtonCounter = 0;
    });



    
    }

    
    

    



