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
            (itemName);
            
    }
    function checkIfItemIsNotVisible(itemContainer){
            itemContainer.removeAttribute('data-tooltip');
    }

let currentPower = 0;
let currentKnowledge = 0;
let currentStrength = 0;
let currentAgility = 0;
let currentHp = 0;
let currentStamina = 0;
let currentMana = 0;
let basePower = 10;
let baseKnowledge = 10;
let baseStrength = 10;
let baseAgility = 10;
let baseHp = 200;
let baseStamina = 200;
let baseMana = 200;

function checkStatistics(){
    document.querySelector(".power").innerHTML = `Moc: ${basePower} | ${currentPower + basePower}`;
    document.querySelector(".knowledge").innerHTML = `Wiedza: ${baseKnowledge} | ${currentKnowledge + baseKnowledge}`;
    document.querySelector(".strength").innerHTML = `Siła: ${baseStrength} | ${currentStrength + baseStrength}`;
    document.querySelector(".agility").innerHTML = `Zręczność: ${baseAgility} | ${currentAgility + baseAgility}`;
    document.querySelector(".hp").innerHTML = `Hp: ${baseHp} | ${currentHp + baseHp}`;
    document.querySelector(".stamina").innerHTML = `Kondycja: ${baseStamina} | ${currentStamina + baseStamina}`;
    document.querySelector(".mana").innerHTML = `Mana: ${baseMana} | ${currentMana + baseMana}`;
    console.log("MOC:", currentPower, "SILA", currentStrength, "HP", currentHp);
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
let tmpItemName = "";
let tmpItem = "";
let rmBtnTmp = "";
let tmpIcon = "";
/* DIALOG */

function checkRemoveButton(icon, iconName, iconImage, item){
    if(removeButton == null && icon.style.backgroundImage != `url("img/icons/${iconImage}.png")` && removeButtonCounter === 0){
        let removeButton = document.createElement("a");
        
        removeButton.setAttribute("class", `remove-${iconName} remove-button`);
        removeButton.innerHTML = "Zdejmij";
        Dialog_container.appendChild(removeButton);
        removeButtonCounter++;
        (removeButtonCounter);
        (removeButton.className);
        
        if(removeButton.classList.contains("remove-helm-icon")){
            rmBtnTmp = "helm";
            tmpIcon = helmIcon.getAttribute("current-item");
        }
        if(removeButton.classList.contains("remove-zbroja-icon")){
            rmBtnTmp = "zbroja";
            tmpIcon = zbrojaIcon.getAttribute("current-item");
        }
        if(removeButton.classList.contains("remove-naszyjnik-icon")){
            rmBtnTmp = "naszyjnik";
            tmpIcon = naszyjnikIcon.getAttribute("current-item");
        }
        if(removeButton.classList.contains("remove-rekawice-icon")){
            rmBtnTmp = "rekawice";
            tmpIcon = rekawiceIcon.getAttribute("current-item");
        }
        if(removeButton.classList.contains("remove-peleryna-icon")){
            rmBtnTmp = "peleryna";
            tmpIcon = pelerynaIcon.getAttribute("current-item");
        }
        removeButton.addEventListener("click", () =>{
            icon.style.backgroundImage = `url("img/icons/${iconImage}.png")`;



(rmBtnTmp, tmpIcon);


if(tmpItem != rmBtnTmp && tmpItemName == tmpIcon){
    tmpItem = rmBtnTmp;
}
if(tmpItem != rmBtnTmp && tmpItemName != tmpIcon){

    tmpItem = rmBtnTmp;
    tmpItemName = tmpIcon;
}
if(tmpItemName != tmpIcon  && tmpItem == rmBtnTmp ){
    tmpItemName = tmpIcon;

}

switch (tmpItem){
    case "helm":
        tmpItem = "helm";
        tmpItemName = helmIcon.getAttribute("current-item");
        (tmpItemName);
        ZbiorHelmow[tmpItemName].isNotActive(true);
        break;
    case "zbroja":
        tmpItem = "zbroja";
        tmpItemName = zbrojaIcon.getAttribute("current-item");
        ZbiorZbroi[tmpItemName].isNotActive(true);
        break;
    case "naszyjnik":
        tmpItem = "naszyjnik";
        tmpItemName = naszyjnikIcon.getAttribute("current-item");
        ZbiorNaszyjnikow[tmpItemName].isNotActive(true);
        break;
    case "rekawice":
        tmpItem = "rekawice";
        tmpItemName = rekawiceIcon.getAttribute("current-item");
        ZbiorRekawic[tmpItemName].isNotActive(true);
        break;
    case "peleryna":
        tmpItem = "peleryna";
        tmpItemName = pelerynaIcon.getAttribute("current-item");
        ZbiorPeleryn[tmpItemName].isNotActive(true);
        break;
}                     
            Dialog.close()
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
            activeBronItems = [];
            activeSpodnieItems = [];
            activeKarwaszeItems = [];
            activeKowadloItems = [];
            activePasItems = [];
            activePierscien1Items = [];
            activePierscien2Items = [];
            activeButyItems = [];
            activeZdolnosciItems = [];
            removeButton = null;
            removeButtonCounter = 0;
        })
    }
    }


const CloseDialog = document.querySelector(".close-dialog");
const Dialog = document.querySelector(".dialog");
const Dialog_container = document.querySelector(".dialog-container");

/* OGROMNE ALERT */

class Helm{
    constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
        this.name = name;
        this.img = img;
        this.active = active;
        this.notActive = notActive;
        this.shown = shown;
        this.power = power;
        this.knowledge = knowledge;
        this.strength = strength;
        this.agility = agility;
        this.hp = hp;
        this.stamina = stamina;
        this.mana = mana;
        this.stamp = 0;
    }
    isActive(activated){

        this.active = activated;
        (this.active);("current-item");
        if(this.stamp > 1){
            this.isNotActive(true);

        }
            if(this.active === true){
                this.stamp++;
                helmIcon.style.backgroundImage = `url(${this.img})`;
                tmpIcon = helmIcon.getAttribute("current-item");
                helmIcon.setAttribute("current-item", this.name);
                tmpItemName = helmIcon.getAttribute("current-item");
                checkRemoveButton(helmIcon, "helm-icon", "helmIcon", "helm");
                if(this.stamp <= 1){
                    currentPower += this.power;
                    currentKnowledge += this.knowledge;
                    currentStrength += this.strength;
                    currentAgility += this.agility;
                    currentHp += this.hp;
                    currentStamina += this.stamina;
                    currentMana += this.mana;
                    checkStatistics();
                }
                   
            }
    if(tmpIcon !== null){
        if(tmpItemName != tmpIcon){
            tmpItemName = tmpIcon;
            ZbiorHelmow[tmpItemName].isNotActive(true);
        }    
            }
    }
    isNotActive(notActivated){
        this.notActive = notActivated;
            if(this.notActive === true){
                    this.stamp = 0;
    
                    currentPower -= this.power;
                    currentKnowledge -= this.knowledge;
                    currentStrength -= this.strength;
                    currentAgility -= this.agility;
                    currentHp -= this.hp;
                    currentStamina -= this.stamina;
                    currentMana -= this.mana;
                    checkStatistics();
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
            (this.name);
        }
        
    }
    isNotHovered(){
        if(this.shown === true){
        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
    }
}
}


const ZbiorHelmow = {
Martumal: new Helm("Martumal", "img/martumal.png", false, false, false, 8, 7, 0, 0 , 0, 0, 40),
Grzebien: new Helm("Grzebien", "img/grzebien.png", false, false, false, 0, 0, 4, 4, 30, 70, 0),
Ishelm: new Helm("Ishelm", "img/ishelm.png", false, false, false, 0, 0, 6, 10, 80, 0, 0),
Khalam: new Helm("Khalam","img/khalam.png", false, false, false, 8, 8, 0, 0, 0, 0, 60),
Czacha: new Helm("Czacha", "img/czacha.png", false, false, false, 12, 12, 0, 0, 100, 0, 0),
Gathril: new Helm("Gathril", "img/gathril.png", false, false, false, 0, 0, 0, 0, 190, 0, 0),
Ghaitarog: new Helm("Ghaitarog", "img/ghaitarog.png", false, false, false, 0, 0, 7, 9, 100, 100 ,0),
Htagan: new Helm("Htagan", "img/htagan.png", false, false, false, 20, 15, 0, 0, 250, 0, 50),
Milosc_morany: new Helm("Milosc_morany", "img/milosc_morany.png", false, false, false, 23, 28, 0, 0, 310, 0, 130),
Pamiec_morany: new Helm("Pamiec_morany", "img/pamiec_morany.png", false, false, false, 0, 0, 23, 33, 270, 100, 20),
Pysk: new Helm("Pysk", "img/pysk.png", false, false, false, 0, 0, 11, 11, 180, 100, 50),
Sigil: new Helm("Sigil", "img/sigil.png", false, false, false, 10, 10, 0, 0, 160, 0, 50)
}

class Zbroja{
    constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
        this.name = name;
        this.img = img;
        this.active = active;
        this.notActive = notActive;
        this.shown = shown;
        this.power = power;
        this.knowledge = knowledge;
        this.strength = strength;
        this.agility = agility;
        this.hp = hp;
        this.stamina = stamina;
        this.mana = mana;
        this.stamp = 0;
    }
    isActive(activated){
        this.active = activated;
        console.log(this.stamp, "STAMp");
        if(this.stamp > 1){
            this.isNotActive(true);

        }
            if(this.active === true){
                console.log(this.stamp, "STAMp ISACIVE1");
                this.stamp++;
                zbrojaIcon.style.backgroundImage = `url(${this.img})`;
                tmpIcon = zbrojaIcon.getAttribute("current-item");
                zbrojaIcon.setAttribute("current-item", this.name);
                tmpItemName = zbrojaIcon.getAttribute("current-item");
                checkRemoveButton(zbrojaIcon, "zbroja-icon", "zbrojaIcon", "zbroja");
                if(this.stamp <= 1){
                    console.log(this.stamp, "STAMp ISACTIVE");
                    currentPower += this.power;
                    currentKnowledge += this.knowledge;
                    currentStrength += this.strength;
                    currentAgility += this.agility;
                    currentHp += this.hp;
                    currentStamina += this.stamina;
                    currentMana += this.mana;
                    checkStatistics();
                }
            }
            
            console.log(tmpIcon);
        if(tmpIcon !== null){
            if(tmpItemName != tmpIcon){
                tmpItemName = tmpIcon;
                ZbiorZbroi[tmpItemName].isNotActive(true);
                }    
        }
           
    }
    isNotActive(notActivated){
        this.notActive = notActivated;
            if(this.notActive === true){
                console.log(this.stamp, "STAMp ISNOTACVIE");
                this.stamp = 0;
    
                    currentPower -= this.power;
                    currentKnowledge -= this.knowledge;
                    currentStrength -= this.strength;
                    currentAgility -= this.agility;
                    currentHp -= this.hp;
                    currentStamina -= this.stamina;
                    currentMana -= this.mana;
                    checkStatistics();
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
            (this.name);
        }
        
    }
    isNotHovered(){
        if(this.shown === true){
        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
    }
}
}

const ZbiorZbroi = {
    Bartaur: new Zbroja("Bartaur", "img/bartaur.png", false,false, false, 0, 0, 9, 8, 0, 50, 0),
    Brunnle: new Zbroja("Brunnle", "img/brunnle.png", false,false, false, 0, 0, 6, 6, 60, 80, 0),
    Diabolo: new Zbroja("Diabolo", "img/diabolo.png", false,false, false, 9, -5, 0, 0, 150, 0, 50),
    Dmorlung: new Zbroja("Dmorlung","img/dmorlung.png", false,false, false, 0, 0, 18, 18, 250, 120, 20),
    Harttraum: new Zbroja("Harttraum", "img/harttraum.png", false, false, false, 0, 0, 16, 21, 120, 30, 0),
    Nadzieja_pokolen: new Zbroja("Nadzieja_pokolen", "img/nadzieja_pokolen.png", false, false, false, 13, 20, 0, 0, 120, 0, 60),
    Opoka_bogow: new Zbroja("Opoka_bogow", "img/opoka_bogow.png", false, false, false, 0, 0, 8, 8, 80, 0, 0),
    Pancerz_komandorski: new Zbroja("Pancerz_komandorski", "img/pancerz_komandorski.png", false, false, false, 8, 10, 0, 0, 60, 0, 40),
    Salmurn: new Zbroja("Salmurn", "img/salmurn.png", false, false, false, 0, 0, 25, 34, 230, 100, 80),
    Virthil: new Zbroja("Virthil", "img/virthil.png", false, false, false, 0, 0, 0, 10, 100, 70, 0),
    Zalla: new Zbroja("Zalla", "img/zalla.png", false, false, false, 22, 37, 0, 0, 280, 30, 100),
 
    }

    class Naszyjnik{
        constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
            this.name = name;
            this.img = img;
            this.active = active;
            this.notActive = notActive;
            this.shown = shown;
            this.power = power;
            this.knowledge = knowledge;
            this.strength = strength;
            this.agility = agility;
            this.hp = hp;
            this.stamina = stamina;
            this.mana = mana;
            this.stamp = 0;
        }
        isActive(activated){

            this.active = activated;
            (this.active);("current-item");
            if(this.stamp > 1){
                this.isNotActive(true);
    
            }
                if(this.active === true){
                    this.stamp++;
                    naszyjnikIcon.style.backgroundImage = `url(${this.img})`;
                    tmpIcon = naszyjnikIcon.getAttribute("current-item");
                    naszyjnikIcon.setAttribute("current-item", this.name);
                    tmpItemName = naszyjnikIcon.getAttribute("current-item");
                    checkRemoveButton(naszyjnikIcon, "naszyjnik-icon", "naszyjnikIcon", "naszyjnik");
                    if(this.stamp <= 1){
                        currentPower += this.power;
                        currentKnowledge += this.knowledge;
                        currentStrength += this.strength;
                        currentAgility += this.agility;
                        currentHp += this.hp;
                        currentStamina += this.stamina;
                        currentMana += this.mana;
                        checkStatistics();
                    }
                       
                }
        if(tmpIcon !== null){
            if(tmpItemName != tmpIcon){
                tmpItemName = tmpIcon;
                ZbiorNaszyjnikow[tmpItemName].isNotActive(true);
            }    
                }
        }
        isNotActive(notActivated){
            this.notActive = notActivated;
                if(this.notActive === true){
                        this.stamp = 0;
        
                        currentPower -= this.power;
                        currentKnowledge -= this.knowledge;
                        currentStrength -= this.strength;
                        currentAgility -= this.agility;
                        currentHp -= this.hp;
                        currentStamina -= this.stamina;
                        currentMana -= this.mana;
                        checkStatistics();
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
                (this.name);
            }
            
        }
        isNotHovered(){
            if(this.shown === true){
            Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
        }
    }

    }

    const ZbiorNaszyjnikow = {
        Caratris: new Naszyjnik("Caratris", "img/caratris.png", false, false, false, 0, 0,0, 0, 40, 0, 0),
        Danthum: new Naszyjnik("Danthum", "img/danthum.png", false, false , false, 0, 0, 9, 9, 50, 40, 0),
        Dorbis: new Naszyjnik("Dorbis", "img/dorbis.png", false, false , false, 0, 0, 20, 20, 100, 70, 30),
        Maiarot: new Naszyjnik("Maiarot","img/maiarot.png", false, false, false, 0, 0, 0, 0, 100, 0, 0),
        Markahn: new Naszyjnik("Markahn","img/markahn.png", false, false, false, 0, 3, 0, 3, 100, 0, 0),
        Obroza_wladcy: new Naszyjnik("Obroza_wladcy","img/obroza_wladcy.png", false, false, false, 7, 0, 0, 0, 80, 0, 0),
        /* DALEJ DOKONCZYC */
        Ortasis: new Naszyjnik("Ortasis","img/ortasis.png", false, false, false, 20, 20, 0, 0, 100, 30, 70),
        Ostolbin: new Naszyjnik("Ostolbin","img/ostolbin.png", false, false, false, 6, 6,0,0, 60, 0, 100),
        Serce_seleny: new Naszyjnik("Serce_seleny","img/serce_seleny.png", false, false, false, 0, 0, 0, 0, 200, 50, 50),
        Sphaera: new Naszyjnik("Sphaera","img/sphaera.png", false, false, false, 0, 0, 8, 8, 0, 80, 0),
        Valazan: new Naszyjnik("Valazan","img/valazan.png", false, false, false, 9, 9, 0, 0, 50, 0, 40),
        Vogurun: new Naszyjnik("Vogurun","img/vogurun.png", false, false, false, 10, 10, 0, 0, 0, 0, 0),
        Zemsta_ivravula: new Naszyjnik("Zemsta_ivravula","img/zemsta_ivravula.png", false, false, false, 0, 0, 0, 0, 400, 0, 0),
        
        }

        class Rekawice{
            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                this.name = name;
                this.img = img;
                this.active = active;
                this.notActive = notActive;
                this.shown = shown;
                this.power = power;
                this.knowledge = knowledge;
                this.strength = strength;
                this.agility = agility;
                this.hp = hp;
                this.stamina = stamina;
                this.mana = mana;
                this.stamp = 0;
            }
            isActive(activated){

                this.active = activated;
                (this.active);("current-item");
                if(this.stamp > 1){
                    this.isNotActive(true);
        
                }
                    if(this.active === true){
                        this.stamp++;
                        rekawiceIcon.style.backgroundImage = `url(${this.img})`;
                        tmpIcon = rekawiceIcon.getAttribute("current-item");
                        rekawiceIcon.setAttribute("current-item", this.name);
                        tmpItemName = rekawiceIcon.getAttribute("current-item");
                        checkRemoveButton(rekawiceIcon, "rekawice-icon", "rekawiceIcon", "rekawice");
                        if(this.stamp <= 1){
                            currentPower += this.power;
                            currentKnowledge += this.knowledge;
                            currentStrength += this.strength;
                            currentAgility += this.agility;
                            currentHp += this.hp;
                            currentStamina += this.stamina;
                            currentMana += this.mana;
                            checkStatistics();
                        }
                           
                    }
            if(tmpIcon !== null){
                if(tmpItemName != tmpIcon){
                    tmpItemName = tmpIcon;
                    ZbiorRekawic[tmpItemName].isNotActive(true);
                }    
                    }
            }
            isNotActive(notActivated){
                this.notActive = notActivated;
                    if(this.notActive === true){
                            this.stamp = 0;
            
                            currentPower -= this.power;
                            currentKnowledge -= this.knowledge;
                            currentStrength -= this.strength;
                            currentAgility -= this.agility;
                            currentHp -= this.hp;
                            currentStamina -= this.stamina;
                            currentMana -= this.mana;
                            checkStatistics();
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
                    (this.name);
                }
                
            }
            isNotHovered(){
                if(this.shown === true){
                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
            }
        }
    
        }

        const ZbiorRekawic = {
            Aeterus_passio: new Rekawice("Aeterus_passio", "img/aeterus_passio.png", false, false, false, 0, 0, 30, 30, 250, 50, 0),
            Biltabandury: new Rekawice("Biltabandury", "img/biltabandury.png", false, false, false, 0, 0, 2, 12, 100, 100, 0),
            Brassary: new Rekawice("Brassary", "img/brassary.png", false, false, false, 10, 5, 0, 0, 0, 0, 60),
            Fraxy: new Rekawice("Fraxy","img/fraxy.png", false, false, false, 3, 2, 0, 0, 40, 0, 10),
            Gest_wladcy: new Rekawice("Gest_wladcy","img/gest_wladcy.png", false, false, false, 0, 0, 12, 5, 40, 20, 0),
            Pazury: new Rekawice("Pazury","img/pazury.png", false, false, false, 15, 10, 0, 0, 120, 0, 180),
            Skry_utoru: new Rekawice("Skry_utoru","img/skry_utoru.png", false, false, false, 23, 27, 0, 0, 190, 0, 160),
            Szpony_seimhi: new Rekawice("Szpony_seimhi","img/szpony_seimhi.png", false, false, false, 23, 27, 0, 0, 190, 0, 160),
            Vaekany: new Rekawice("Vaekany","img/vaekany.png", false, false, false, 10, 7, 0, 0, 20, 0, 180),
            Zadry: new Rekawice("Zadry","img/zadry.png", false, false, false, 15, 18, 0, 0, 180, 40, 0),
            
            }

            class Peleryna{
                constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                    this.name = name;
                    this.img = img;
                    this.active = active;
                    this.notActive = notActive;
                    this.shown = shown;
                    this.power = power;
                    this.knowledge = knowledge;
                    this.strength = strength;
                    this.agility = agility;
                    this.hp = hp;
                    this.stamina = stamina;
                    this.mana = mana;
                    this.stamp = 0;
                }
                isActive(activated){

                    this.active = activated;
                    (this.active);("current-item");
                    if(this.stamp > 1){
                        this.isNotActive(true);
            
                    }
                        if(this.active === true){
                            this.stamp++;
                            pelerynaIcon.style.backgroundImage = `url(${this.img})`;
                            tmpIcon = pelerynaIcon.getAttribute("current-item");
                            pelerynaIcon.setAttribute("current-item", this.name);
                            tmpItemName = pelerynaIcon.getAttribute("current-item");
                            checkRemoveButton(pelerynaIcon, "peleryna-icon", "pelerynaIcon", "peleryna");
                            if(this.stamp <= 1){
                                currentPower += this.power;
                                currentKnowledge += this.knowledge;
                                currentStrength += this.strength;
                                currentAgility += this.agility;
                                currentHp += this.hp;
                                currentStamina += this.stamina;
                                currentMana += this.mana;
                                checkStatistics();
                            }
                               
                        }
                if(tmpIcon !== null){
                    if(tmpItemName != tmpIcon){
                        tmpItemName = tmpIcon;
                        ZbiorPeleryn[tmpItemName].isNotActive(true);
                    }    
                        }
                }
                isNotActive(notActivated){
                    this.notActive = notActivated;
                        if(this.notActive === true){
                                this.stamp = 0;
                
                                currentPower -= this.power;
                                currentKnowledge -= this.knowledge;
                                currentStrength -= this.strength;
                                currentAgility -= this.agility;
                                currentHp -= this.hp;
                                currentStamina -= this.stamina;
                                currentMana -= this.mana;
                                checkStatistics();
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
                        (this.name);
                    }
                    
                }
                isNotHovered(){
                    if(this.shown === true){
                    Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                }
            }
        
            }
        const ZbiorPeleryn = {
            Admiralski_gronostaj: new Peleryna("Admiralski_gronostaj", "img/admiralski_gronostaj.png", false, false, false, 0, 0, 15, 32, 170, 130, 80),
            Angvallion: new Peleryna("Angvallion", "img/angvallion.png", false, false,  false, 0, 0, 0, 30, 100, 100, 100),
            Bryza: new Peleryna("Bryza", "img/bryza.png", false, false, false, 0, 0, 7, 9, 90, 30, 0),
            Cien_tarula: new Peleryna("Cien_tarula","img/cien_tarula.png", false, false,  false, 26, 34, 0, 0, 300, 20, 80),
            Debba: new Peleryna("Debba","img/debba.png", false, false,  false, 0, 0, 20, 0, 100, 0, 60),
            Dracorporis: new Peleryna("Dracorporis","img/dracorporis.png", false, false,  false, 20, 20, 0, 0, 100, 0, 50),
            Hanba_seleny: new Peleryna("Hanba_seleny","img/hanba_seleny.png", false, false,  false, 12, 20, 0, 0, 250, 0, 180),
            Powrot_ivravula: new Peleryna("Powrot_ivravula","img/powrot_ivravula.png", false, false,  false, 0, 0, 14, 23, 50, 0, 20),
            Tsunami: new Peleryna("Tsunami","img/tsunami.png", false, false,  false, 8, 16, 0, 0, 100, 0, 0),
            Xenothor: new Peleryna("Xenothor","img/xenothor.png", false, false,  false, 0, 0, 10, 18, 80, -30, 0),
            Nurthil: new Peleryna("Nurthil","img/nurthil.png", false, false,  false, 19, 14, 0, 0, -50, 0, 0),
                
                }

                class Bron{
                    constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                        this.name = name;
                        this.img = img;
                        this.active = active;
                        this.notActive = notActive;
                        this.shown = shown;
                        this.power = power;
                        this.knowledge = knowledge;
                        this.strength = strength;
                        this.agility = agility;
                        this.hp = hp;
                        this.stamina = stamina;
                        this.mana = mana;
                        this.stamp = 0;
                    }
                    isActive(activated){
                        (this.active, this.name)
                        this.active = activated;
                        (this.active);
                        tmpIcon = bronIcon.getAttribute("current-item");
                        if(tmpIcon !== null){
                            if(tmpItemName != tmpIcon){
                                tmpItemName = tmpIcon;
                                (tmpItemName);
                                ZbiorBroni[tmpItemName].isNotActive(true);
                                }    
                        }
                
                
                          
                
                        (this.stamp);
                        if(this.stamp >= 1){
                            this.isNotActive(true);
                
                        }
                            if(this.active === true){
                                this.stamp++;
                                bronIcon.style.backgroundImage = `url(${this.img})`;
                                (this.img);
                                bronIcon.setAttribute("current-item", this.name);
                                checkRemoveButton(bronIcon, "bron-icon", "bronIcon", "bron");
                    
                                ("MANA" + currentMana)
                                if(this.stamp <= 1){
                                    currentPower += this.power;
                                    currentKnowledge += this.knowledge;
                                    currentStrength += this.strength;
                                    currentAgility += this.agility;
                                    currentHp += this.hp;
                                    currentStamina += this.stamina;
                                    currentMana += this.mana;
                                    checkStatistics();
                                }
                                   
                            }
                    }
                    isNotActive(notActivated){
                        this.notActive = notActivated;
                            if(this.notActive === true){
                                    this.stamp = 0;
                    
                                    currentPower -= this.power;
                                    currentKnowledge -= this.knowledge;
                                    currentStrength -= this.strength;
                                    currentAgility -= this.agility;
                                    currentHp -= this.hp;
                                    currentStamina -= this.stamina;
                                    currentMana -= this.mana;
                                    checkStatistics();
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
                            (this.name);
                        }
                        
                    }
                    isNotHovered(){
                        if(this.shown === true){
                        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                    }
                }
            
                }
        
                const ZbiorBroni = {
                    Ayol: new Bron("Ayol", "img/ayol.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Batagur: new Bron("Batagur", "img/batagur.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Bol: new Bron("Bol", "img/bol.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Buoriany: new Bron("Buoriany","img/buoriany.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Ciern: new Bron("Ciern","img/ciern.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Davgretor: new Bron("Davgretor","img/davgretor.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Derengil: new Bron("Derengil","img/derengil.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Geomorph_core: new Bron("Geomorph_core","img/geomorph_core.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Gjolmar: new Bron("Gjolmar","img/gjolmar.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Istav: new Bron("Istav","img/istav.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Isverd: new Bron("Isverd","img/isverd.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Lawina: new Bron("Lawina","img/lawina.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Mallus_selenorum: new Bron("Mallus_selenorum","img/mallus_selenorum.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Ognisty_mlot: new Bron("Ognisty_mlot","img/ognisty_mlot.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Piroklast: new Bron("Piroklast","img/piroklast.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Rolrak: new Bron("Rolrak","img/rolrak.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Sidun: new Bron("Sidun","img/sidun.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Smoczy_gnat: new Bron("Smoczy_gnat","img/smoczy_gnat.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Sturprang: new Bron("Sturprang","img/sturprang.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Taehal: new Bron("Taehal","img/taehal.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Tasak: new Bron("Tasak","img/tasak.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Tezec: new Bron("Tezec","img/tezec.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Trojzab_admiralski: new Bron("Trojzab_admiralski","img/trojzab_admiralski.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Urntsul: new Bron("Urntsul","img/urntsul.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Virral: new Bron("Virral","img/virral.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Wladca_losu: new Bron("Wladca_losu","img/wladca_losu.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                        
                        }
                class Karwasze{
                    constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                        this.name = name;
                        this.img = img;
                        this.active = active;
                        this.notActive = notActive;
                        this.shown = shown;
                        this.power = power;
                        this.knowledge = knowledge;
                        this.strength = strength;
                        this.agility = agility;
                        this.hp = hp;
                        this.stamina = stamina;
                        this.mana = mana;
                        this.stamp = 0;
                    }
                    isActive(activated){
                        (this.active, this.name)
                        this.active = activated;
                        (this.active);
                        tmpIcon = karwaszeIcon.getAttribute("current-item");
                        if(tmpIcon !== null){
                            if(tmpItemName != tmpIcon){
                                tmpItemName = tmpIcon;
                                (tmpItemName);
                                ZbiorKarwaszy[tmpItemName].isNotActive(true);
                                }    
                        }
                
                
                          
                
                        (this.stamp);
                        if(this.stamp >= 1){
                            this.isNotActive(true);
                
                        }
                            if(this.active === true){
                                this.stamp++;
                                karwaszeIcon.style.backgroundImage = `url(${this.img})`;
                                (this.img);
                                karwaszeIcon.setAttribute("current-item", this.name);
                                checkRemoveButton(karwaszeIcon, "karwasze-icon", "karwaszeIcon", "karwasze");
                    
                                ("MANA" + currentMana)
                                if(this.stamp <= 1){
                                    currentPower += this.power;
                                    currentKnowledge += this.knowledge;
                                    currentStrength += this.strength;
                                    currentAgility += this.agility;
                                    currentHp += this.hp;
                                    currentStamina += this.stamina;
                                    currentMana += this.mana;
                                    checkStatistics();
                                }
                                   
                            }
                    }
                    isNotActive(notActivated){
                        this.notActive = notActivated;
                            if(this.notActive === true){
                                    this.stamp = 0;
                    
                                    currentPower -= this.power;
                                    currentKnowledge -= this.knowledge;
                                    currentStrength -= this.strength;
                                    currentAgility -= this.agility;
                                    currentHp -= this.hp;
                                    currentStamina -= this.stamina;
                                    currentMana -= this.mana;
                                    checkStatistics();
                            }
                    }
                    isShown(){
                        let newDialogImage = document.createElement("a")
                        newDialogImage.style.backgroundImage = `url(${this.img})`;
                        newDialogImage.setAttribute("class", `${this.name} dialog-img karwasze-items`);
                        Dialog_container.appendChild(newDialogImage);
                        activeKarwaszeItems.push(newDialogImage);
                        checkRemoveButton(karwaszeIcon, "karwasze-icon", "karwaszeIcon");    
                        
                        this.shown = true;
                    }
            
                    isHovered(){
                        if(this.shown === true){
                            Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                            (this.name);
                        }
                        
                    }
                    isNotHovered(){
                        if(this.shown === true){
                        Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                    }
                }
            
                }
        
                const ZbiorKarwaszy = {
                    Ariachy: new Karwasze("Ariachy", "img/ariachy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Berglisy: new Karwasze("Berglisy", "img/berglisy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Geury: new Karwasze("Geury", "img/geury.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                    Inavoxy: new Karwasze("Inavoxy","img/inavoxy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                        }

                        class Spodnie{
                            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                                this.name = name;
                                this.img = img;
                                this.active = active;
                                this.notActive = notActive;
                                this.shown = shown;
                                this.power = power;
                                this.knowledge = knowledge;
                                this.strength = strength;
                                this.agility = agility;
                                this.hp = hp;
                                this.stamina = stamina;
                                this.mana = mana;
                                this.stamp = 0;
                            }
                            isActive(activated){
                                (this.active, this.name)
                                this.active = activated;
                                (this.active);
                                tmpIcon = helmIcon.getAttribute("current-item");
                                if(tmpIcon !== null){
                                    if(tmpItemName != tmpIcon){
                                        tmpItemName = tmpIcon;
                                        (tmpItemName);
                                        ZbiorSpodni[tmpItemName].isNotActive(true);
                                        }    
                                }
                        
                        
                                  
                        
                                (this.stamp);
                                if(this.stamp >= 1){
                                    this.isNotActive(true);
                        
                                }
                                    if(this.active === true){
                                        this.stamp++;
                                        spodnieIcon.style.backgroundImage = `url(${this.img})`;
                                        (this.img);
                                        spodnieIcon.setAttribute("current-item", this.name);
                                        checkRemoveButton(spodnieIcon, "spodnie-icon", "spodnieIcon", "spodnie");
                            
                                        ("MANA" + currentMana)
                                        if(this.stamp <= 1){
                                            currentPower += this.power;
                                            currentKnowledge += this.knowledge;
                                            currentStrength += this.strength;
                                            currentAgility += this.agility;
                                            currentHp += this.hp;
                                            currentStamina += this.stamina;
                                            currentMana += this.mana;
                                            checkStatistics();
                                        }
                                           
                                    }
                            }
                            isNotActive(notActivated){
                                this.notActive = notActivated;
                                    if(this.notActive === true){
                                            this.stamp = 0;
                            
                                            currentPower -= this.power;
                                            currentKnowledge -= this.knowledge;
                                            currentStrength -= this.strength;
                                            currentAgility -= this.agility;
                                            currentHp -= this.hp;
                                            currentStamina -= this.stamina;
                                            currentMana -= this.mana;
                                            checkStatistics();
                                    }
                            }
                            isShown(){
                                let newDialogImage = document.createElement("a")
                                newDialogImage.style.backgroundImage = `url(${this.img})`;
                                newDialogImage.setAttribute("class", `${this.name} dialog-img spodnie-items`);
                                Dialog_container.appendChild(newDialogImage);
                                activeSpodnieItems.push(newDialogImage);
                                checkRemoveButton(spodnieIcon, "spodnie-icon", "spodnieIcon");    
                                
                                this.shown = true;
                            }
                    
                            isHovered(){
                                if(this.shown === true){
                                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                                    (this.name);
                                }
                                
                            }
                            isNotHovered(){
                                if(this.shown === true){
                                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                            }
                        }
                    
                        }
                
                        const ZbiorSpodni = {
                            Aquariusy: new Spodnie("Aquariusy", "img/aquariusy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Erbaile: new Spodnie("Erbaile", "img/erbaile.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Obdartusy: new Spodnie("Obdartusy", "img/obdartusy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Skiilfy: new Spodnie("Skiilfy","img/skiilfy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Temary: new Spodnie("Temary","img/temary.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Tirhel: new Spodnie("Tirhel","img/tirhel.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Udreki: new Spodnie("Udreki","img/udreki.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Varrvy: new Spodnie("Varrvy","img/varrvy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Wzorek: new Spodnie("Wzorek","img/wzorek.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Ziraki: new Spodnie("Ziraki","img/ziraki.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                                }
                        class Pas{
                            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                                this.name = name;
                                this.img = img;
                                this.active = active;
                                this.notActive = notActive;
                                this.shown = shown;
                                this.power = power;
                                this.knowledge = knowledge;
                                this.strength = strength;
                                this.agility = agility;
                                this.hp = hp;
                                this.stamina = stamina;
                                this.mana = mana;
                                this.stamp = 0;
                            }
                            isActive(activated){
                                (this.active, this.name)
                                this.active = activated;
                                (this.active);
                                tmpIcon = pasIcon.getAttribute("current-item");
                                if(tmpIcon !== null){
                                    if(tmpItemName != tmpIcon){
                                        tmpItemName = tmpIcon;
                                        (tmpItemName);
                                        ZbiorPasow[tmpItemName].isNotActive(true);
                                        }    
                                }
                        
                        
                                  
                        
                                (this.stamp);
                                if(this.stamp >= 1){
                                    this.isNotActive(true);
                        
                                }
                                    if(this.active === true){
                                        this.stamp++;
                                        pasIcon.style.backgroundImage = `url(${this.img})`;
                                        (this.img);
                                        pasIcon.setAttribute("current-item", this.name);
                                        checkRemoveButton(pasIcon, "pas-icon", "pasIcon", "pas");
                            
                                        ("MANA" + currentMana)
                                        if(this.stamp <= 1){
                                            currentPower += this.power;
                                            currentKnowledge += this.knowledge;
                                            currentStrength += this.strength;
                                            currentAgility += this.agility;
                                            currentHp += this.hp;
                                            currentStamina += this.stamina;
                                            currentMana += this.mana;
                                            checkStatistics();
                                        }
                                           
                                    }
                            }
                            isNotActive(notActivated){
                                this.notActive = notActivated;
                                    if(this.notActive === true){
                                            this.stamp = 0;
                            
                                            currentPower -= this.power;
                                            currentKnowledge -= this.knowledge;
                                            currentStrength -= this.strength;
                                            currentAgility -= this.agility;
                                            currentHp -= this.hp;
                                            currentStamina -= this.stamina;
                                            currentMana -= this.mana;
                                            checkStatistics();
                                    }
                            }
                            isShown(){
                                let newDialogImage = document.createElement("a")
                                newDialogImage.style.backgroundImage = `url(${this.img})`;
                                newDialogImage.setAttribute("class", `${this.name} dialog-img pas-items`);
                                Dialog_container.appendChild(newDialogImage);
                                activePasItems.push(newDialogImage);
                                checkRemoveButton(pasIcon, "pas-icon", "pasIcon");    
                                
                                this.shown = true;
                            }
                    
                            isHovered(){
                                if(this.shown === true){
                                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                                    (this.name);
                                }
                                
                            }
                            isNotHovered(){
                                if(this.shown === true){
                                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                            }
                        }
                    
                        }
                
                        const ZbiorPasow = {
                            Anabolik: new Pas("Anabolik", "img/anabolik.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Dagorilm: new Pas("Dagorilm", "img/dagorilm.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Exuvium: new Pas("Exuvium", "img/exuvium.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Groza_seleny: new Pas("Groza_seleny","img/groza_seleny.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Koriatula: new Pas("Koriatula","img/koriatula.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Nienawisc_draugula: new Pas("Nienawisc_draugula","img/nienawisc_draugula.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Nurt: new Pas("Nurt","img/nurt.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Promuris: new Pas("Promuris","img/promuris.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Radius_electricum: new Pas("Radius_electricum","img/radius_electricum.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Sentrion: new Pas("Sentrion","img/sentrion.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                                }
                        class Pierscien1{
                            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                                this.name = name;
                                this.img = img;
                                this.active = active;
                                this.notActive = notActive;
                                this.shown = shown;
                                this.power = power;
                                this.knowledge = knowledge;
                                this.strength = strength;
                                this.agility = agility;
                                this.hp = hp;
                                this.stamina = stamina;
                                this.mana = mana;
                                this.stamp = 0;
                            }
                            isActive(activated){
                                (this.active, this.name)
                                this.active = activated;
                                (this.active);
                                tmpIcon = pierscien1Icon.getAttribute("current-item");
                                if(tmpIcon !== null){
                                    if(tmpItemName != tmpIcon){
                                        tmpItemName = tmpIcon;
                                        (tmpItemName);
                                        ZbiorPierscieni1[tmpItemName].isNotActive(true);
                                        }    
                                }
                        
                        
                                  
                        
                                (this.stamp);
                                if(this.stamp >= 1){
                                    this.isNotActive(true);
                        
                                }
                                    if(this.active === true){
                                        this.stamp++;
                                        pierscien1Icon.style.backgroundImage = `url(${this.img})`;
                                        (this.img);
                                        pierscien1Icon.setAttribute("current-item", this.name);
                                        checkRemoveButton(pierscien1Icon, "pierscien1-icon", "pierscien1Icon", "pierscien1");
                            
                                        ("MANA" + currentMana)
                                        if(this.stamp <= 1){
                                            currentPower += this.power;
                                            currentKnowledge += this.knowledge;
                                            currentStrength += this.strength;
                                            currentAgility += this.agility;
                                            currentHp += this.hp;
                                            currentStamina += this.stamina;
                                            currentMana += this.mana;
                                            checkStatistics();
                                        }
                                           
                                    }
                            }
                            isNotActive(notActivated){
                                this.notActive = notActivated;
                                    if(this.notActive === true){
                                            this.stamp = 0;
                            
                                            currentPower -= this.power;
                                            currentKnowledge -= this.knowledge;
                                            currentStrength -= this.strength;
                                            currentAgility -= this.agility;
                                            currentHp -= this.hp;
                                            currentStamina -= this.stamina;
                                            currentMana -= this.mana;
                                            checkStatistics();
                                    }
                            }
                            isShown(){
                                let newDialogImage = document.createElement("a")
                                newDialogImage.style.backgroundImage = `url(${this.img})`;
                                newDialogImage.setAttribute("class", `${this.name} dialog-img pierscien1-items`);
                                Dialog_container.appendChild(newDialogImage);
                                activePierscien1Items.push(newDialogImage);
                                checkRemoveButton(pierscien1Icon, "pierscien1-icon", "pierscien1Icon");    
                                
                                this.shown = true;
                            }
                    
                            isHovered(){
                                if(this.shown === true){
                                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                                    (this.name);
                                }
                                
                            }
                            isNotHovered(){
                                if(this.shown === true){
                                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                            }
                        }
                    
                        }
                
                        const ZbiorPierscieni1 = {
                            Arcanscape: new Pierscien1("Arcanscape", "img/arcanscape.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Balast: new Pierscien1("Balast", "img/balast.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Basileus: new Pierscien1("Basileus", "img/basileus.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Fiskorl: new Pierscien1("Fiskorl","img/fiskorl.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Fulgur: new Pierscien1("Fulgur","img/fulgur.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Griv: new Pierscien1("Griv","img/griv.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Karlder: new Pierscien1("Karlder","img/karlder.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Mauremys: new Pierscien1("Mauremys","img/Mauremys.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Navigon: new Pierscien1("Navigon","img/Navigon.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Nit: new Pierscien1("Nit","img/Nit.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Przysiega_draugula: new Pierscien1("Przysiega_draugula","img/przysiega_draugula.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Skogan: new Pierscien1("Skogan","img/skogan.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Uguns: new Pierscien1("Uguns","img/uguns.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Zaglada_ludow: new Pierscien1("Zaglada_ludow","img/zaglada_ludow.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                                }
                        class Pierscien2{
                            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                                this.name = name;
                                this.img = img;
                                this.active = active;
                                this.notActive = notActive;
                                this.shown = shown;
                                this.power = power;
                                this.knowledge = knowledge;
                                this.strength = strength;
                                this.agility = agility;
                                this.hp = hp;
                                this.stamina = stamina;
                                this.mana = mana;
                                this.stamp = 0;
                            }
                            isActive(activated){
                                (this.active, this.name)
                                this.active = activated;
                                (this.active);
                                tmpIcon = pierscien2Icon.getAttribute("current-item");
                                if(tmpIcon !== null){
                                    if(tmpItemName != tmpIcon){
                                        tmpItemName = tmpIcon;
                                        (tmpItemName);
                                        ZbiorPierscieni2[tmpItemName].isNotActive(true);
                                        }    
                                }
                        
                        
                                  
                        
                                (this.stamp);
                                if(this.stamp >= 1){
                                    this.isNotActive(true);
                        
                                }
                                    if(this.active === true){
                                        this.stamp++;
                                        pierscien1Icon.style.backgroundImage = `url(${this.img})`;
                                        (this.img);
                                        pierscien2Icon.setAttribute("current-item", this.name);
                                        checkRemoveButton(pierscien2Icon, "pierscien2-icon", "pierscien2Icon", "pierscien2");
                            
                                        ("MANA" + currentMana)
                                        if(this.stamp <= 1){
                                            currentPower += this.power;
                                            currentKnowledge += this.knowledge;
                                            currentStrength += this.strength;
                                            currentAgility += this.agility;
                                            currentHp += this.hp;
                                            currentStamina += this.stamina;
                                            currentMana += this.mana;
                                            checkStatistics();
                                        }
                                           
                                    }
                            }
                            isNotActive(notActivated){
                                this.notActive = notActivated;
                                    if(this.notActive === true){
                                            this.stamp = 0;
                            
                                            currentPower -= this.power;
                                            currentKnowledge -= this.knowledge;
                                            currentStrength -= this.strength;
                                            currentAgility -= this.agility;
                                            currentHp -= this.hp;
                                            currentStamina -= this.stamina;
                                            currentMana -= this.mana;
                                            checkStatistics();
                                    }
                            }
                            isShown(){
                                let newDialogImage = document.createElement("a")
                                newDialogImage.style.backgroundImage = `url(${this.img})`;
                                newDialogImage.setAttribute("class", `${this.name} dialog-img pierscien2-items`);
                                Dialog_container.appendChild(newDialogImage);
                                activePierscien2Items.push(newDialogImage);
                                checkRemoveButton(pierscien2Icon, "pierscien2-icon", "pierscien2Icon");    
                                
                                this.shown = true;
                            }
                    
                            isHovered(){
                                if(this.shown === true){
                                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                                    (this.name);
                                }
                                
                            }
                            isNotHovered(){
                                if(this.shown === true){
                                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                            }
                        }
                    
                        }
                
                        const ZbiorPierscieni2 = {
                            Arcanscape: new Pierscien2("Arcanscape", "img/arcanscape.png", false, false),
                            Balast: new Pierscien2("Balast", "img/balast.png", false, false),
                            Basileus: new Pierscien2("Basileus", "img/basileus.png", false, false),
                            Fiskorl: new Pierscien2("Fiskorl","img/fiskorl.png", false, false),
                            Fulgur: new Pierscien2("Fulgur","img/fulgur.png", false, false),
                            Griv: new Pierscien2("Griv","img/griv.png", false, false),
                            Karlder: new Pierscien2("Karlder","img/karlder.png", false, false),
                            Mauremys: new Pierscien2("Mauremys","img/Mauremys.png", false, false),
                            Navigon: new Pierscien2("Navigon","img/Navigon.png", false, false),
                            Nit: new Pierscien2("Nit","img/Nit.png", false, false),
                            Przysiega_draugula: new Pierscien2("Przysiega_draugula","img/przysiega_draugula.png", false, false),
                            Skogan: new Pierscien2("Skogan","img/skogan.png", false, false),
                            Uguns: new Pierscien2("Uguns","img/uguns.png", false, false),
                            Zaglada_ludow: new Pierscien2("Zaglada_ludow","img/zaglada_ludow.png", false, false),
                                }
                        class Buty{
                            constructor(name, img, active, notActive, shown, power, knowledge, strength, agility, hp, stamina, mana){
                                this.name = name;
                                this.img = img;
                                this.active = active;
                                this.notActive = notActive;
                                this.shown = shown;
                                this.power = power;
                                this.knowledge = knowledge;
                                this.strength = strength;
                                this.agility = agility;
                                this.hp = hp;
                                this.stamina = stamina;
                                this.mana = mana;
                                this.stamp = 0;
                            }
                            isActive(activated){
                                (this.active, this.name)
                                this.active = activated;
                                (this.active);
                                tmpIcon = butyIcon.getAttribute("current-item");
                                if(tmpIcon !== null){
                                    if(tmpItemName != tmpIcon){
                                        tmpItemName = tmpIcon;
                                        (tmpItemName);
                                        ZbiorButow[tmpItemName].isNotActive(true);
                                        }    
                                }
                        
                        
                                  
                        
                                (this.stamp);
                                if(this.stamp >= 1){
                                    this.isNotActive(true);
                        
                                }
                                    if(this.active === true){
                                        this.stamp++;
                                        butyIcon.style.backgroundImage = `url(${this.img})`;
                                        (this.img);
                                        butyIcon.setAttribute("current-item", this.name);
                                        checkRemoveButton(butyIcon, "buty-icon", "butyIcon", "buty");
                            
                                        ("MANA" + currentMana)
                                        if(this.stamp <= 1){
                                            currentPower += this.power;
                                            currentKnowledge += this.knowledge;
                                            currentStrength += this.strength;
                                            currentAgility += this.agility;
                                            currentHp += this.hp;
                                            currentStamina += this.stamina;
                                            currentMana += this.mana;
                                            checkStatistics();
                                        }
                                           
                                    }
                            }
                            isNotActive(notActivated){
                                this.notActive = notActivated;
                                    if(this.notActive === true){
                                            this.stamp = 0;
                            
                                            currentPower -= this.power;
                                            currentKnowledge -= this.knowledge;
                                            currentStrength -= this.strength;
                                            currentAgility -= this.agility;
                                            currentHp -= this.hp;
                                            currentStamina -= this.stamina;
                                            currentMana -= this.mana;
                                            checkStatistics();
                                    }
                            }
                            isShown(){
                                let newDialogImage = document.createElement("a")
                                newDialogImage.style.backgroundImage = `url(${this.img})`;
                                newDialogImage.setAttribute("class", `${this.name} dialog-img buty-items`);
                                Dialog_container.appendChild(newDialogImage);
                                activeButyItems.push(newDialogImage);
                                checkRemoveButton(butyIcon, "buty-icon", "butyIcon");    
                                
                                this.shown = true;
                            }
                    
                            isHovered(){
                                if(this.shown === true){
                                    Dialog_container.querySelector(`.${this.name}`).setAttribute('data-tooltip', `${this.name}`);
                                    (this.name);
                                }
                                
                            }
                            isNotHovered(){
                                if(this.shown === true){
                                Dialog_container.querySelector(`.${this.name}`).removeAttribute('data-tooltip');
                            }
                        }
                    
                        }
                
                        const ZbiorButow = {
                            Alendry: new Buty("Alendry", "img/alendry.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Aqueniry: new Buty("Aqueniry", "img/aqueniry.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Arhauty: new Buty("Arhauty", "img/arhauty.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Cierpietniki: new Buty("Cierpietniki","img/cierpietniki.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Czengsvesy: new Buty("Czengsvesy","img/czengsvesy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Envile: new Buty("Envile","img/envile.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Jeroszki: new Buty("Jeroszki","img/jeroszki.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Lysmary: new Buty("Lysmary","img/Lysmary.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Moczary: new Buty("Moczary","img/moczary.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Tangnary: new Buty("Tangnary","img/tangnary.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Virveny: new Buty("Virveny","img/virveny.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                            Thorimmy: new Buty("Thorimmy","img/thorimmy.png", false, false,  false, 0, 0, 0, 0, 0, 0, 0),
                                }








    function openDialog($currentTile){
        Dialog.showModal();
        
         /* ZBROJA */ 
        
        if($currentTile == Tiles[0]){
            ($currentTile);
            Dialog_container.innerHTML = "<h1>Zbroja: </h1>";
            ZbiorZbroi.Bartaur.isShown();

                if(activeZbrojaItems[0]){
                    (activeZbrojaItems[0]);
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
                (activeZbrojaItems[1]);
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
                    (activeZbrojaItems[2]);
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
                    (activeZbrojaItems[3]);
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
                    (activeZbrojaItems[4]);
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
                    (activeZbrojaItems[5]);
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
                    (activeZbrojaItems[6]);
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
                    (activeZbrojaItems[7]);
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
                    (activeZbrojaItems[8]);
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
                    (activeZbrojaItems[9]);
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
                    (activeZbrojaItems[10]);
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
                (activeHelmItems[0]);
                
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
            (activeHelmItems[1]);
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
                (activeHelmItems[2]);
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
                (activeHelmItems[3]);
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
                (activeHelmItems[4]);
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
                (activeHelmItems[5]);
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
                (activeHelmItems[6]);
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
                (activeHelmItems[7]);
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
                (activeHelmItems[8]);
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
                (activeHelmItems[9]);
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
                (activeHelmItems[10]);
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
                (activeHelmItems[11]);
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
            ($currentTile);
            Dialog_container.innerHTML = "<h1>Naszyjnik: </h1>";
            ZbiorNaszyjnikow.Caratris.isShown();

                if(activeNaszyjnikItems[0]){
                    (activeNaszyjnikItems[0]);
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
                (activeNaszyjnikItems[1]);
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
                    (activeNaszyjnikItems[2]);
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
                    (activeNaszyjnikItems[3]);
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
                    (activeNaszyjnikItems[4]);
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
                    (activeNaszyjnikItems[5]);
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
                    (activeNaszyjnikItems[6]);
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
                    (activeNaszyjnikItems[7]);
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
                    (activeNaszyjnikItems[8]);
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
                    (activeNaszyjnikItems[9]);
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
                    (activeNaszyjnikItems[10]);
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
                    (activeNaszyjnikItems[11]);
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
                    (activeNaszyjnikItems[12]);
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
            ($currentTile);
            Dialog_container.innerHTML = "<h1>Rękawice: </h1>";

            ZbiorRekawic.Aeterus_passio.isShown();

                if(activeRekawiceItems[0]){
                    (activeRekawiceItems[0]);
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
                (activeRekawiceItems[1]);
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
                    (activeRekawiceItems[2]);
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
                    (activeRekawiceItems[3]);
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
                    (activeRekawiceItems[4]);
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
                    (activeRekawiceItems[5]);
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
                    (activeRekawiceItems[6]);
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
                    (activeRekawiceItems[7]);
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
                    (activeRekawiceItems[8]);
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
                    (activeRekawiceItems[9]);
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
            ($currentTile);
            Dialog_container.innerHTML = "<h1>Peleryna: </h1>";

            ZbiorPeleryn.Admiralski_gronostaj.isShown();

                if(activePelerynaItems[0]){
                    (activePelerynaItems[0]);
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
                (activePelerynaItems[1]);
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
                    (activePelerynaItems[2]);
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
                    (activePelerynaItems[3]);
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
                    (activePelerynaItems[4]);
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
                    (activePelerynaItems[5]);
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
                    (activePelerynaItems[6]);
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
                    (activePelerynaItems[7]);
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
                    (activePelerynaItems[8]);
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
                    (activePelerynaItems[9]);
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
                    (activeBronItems[0]);
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
                (activeBronItems[1]);
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
                    (activeBronItems[2]);
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
                    (activeBronItems[3]);
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
                    (activeBronItems[4]);
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
                    (activeBronItems[5]);
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
                    (activeBronItems[6]);
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
                    (activeBronItems[7]);
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
                    (activeBronItems[8]);
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
                    (activeBronItems[9]);
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
    
            

        }

        /* KARWASZE */
        
        else if($currentTile == Tiles[8]){
    
           
                Dialog_container.innerHTML = "<h1>Karwasze: </h1>";
        
        
                ZbiorKarwaszy.Ariachy.isShown();
                    if(activeKarwaszeItems[0]){
                        (activeKarwaszeItems[0]);
                        
                        activeKarwaszeItems[0].addEventListener("click", () => {
                            ZbiorKarwaszy.Ariachy.isActive(true);
        
                        })
                        activeKarwaszeItems[0].addEventListener("mouseover", () => {
                            ZbiorKarwaszy.Ariachy.isHovered()
                        });
                        activeKarwaszeItems[0].addEventListener("mouseout", () => {
                            ZbiorKarwaszy.Ariachy.isNotHovered()
                        });
                        
                    }
                ZbiorKarwaszy.Berglisy.isShown();
                if(activeKarwaszeItems[1]){
                    (activeKarwaszeItems[1]);
                    activeKarwaszeItems[1].addEventListener("click", () => {
                        ZbiorKarwaszy.Berglisy.isActive(true);
        
                    })
                    activeKarwaszeItems[1].addEventListener("mouseover", () => { 
                        ZbiorKarwaszy.Berglisy.isHovered()
                    });
                    activeKarwaszeItems[1].addEventListener("mouseout", () => { 
                        ZbiorKarwaszy.Berglisy.isNotHovered()
                    });
                    
                }
                ZbiorKarwaszy.Geury.isShown();
                    if(activeKarwaszeItems[2]){
                        (activeKarwaszeItems[2]);
                        activeKarwaszeItems[2].addEventListener("click", () => {
                            ZbiorKarwaszy.Geury.isActive(true);
        
                    })
                    activeKarwaszeItems[2].addEventListener("mouseover",() => {
                        ZbiorKarwaszy.Geury.isHovered()
                    });
                    activeKarwaszeItems[2].addEventListener("mouseout",() => {
                        ZbiorKarwaszy.Geury.isNotHovered()
                    });
                }
                ZbiorKarwaszy.Inavoxy.isShown();
                    if(activeKarwaszeItems[3]){
                        (activeKarwaszeItems[3]);
                        activeKarwaszeItems[3].addEventListener("click", () => {
                            ZbiorKarwaszy.Inavoxy.isActive(true);
        
                    })
                    activeKarwaszeItems[3].addEventListener("mouseover", () => {
                        ZbiorKarwaszy.Inavoxy.isHovered()
                    } );
                    activeKarwaszeItems[3].addEventListener("mouseout", () => {
                        ZbiorKarwaszy.Inavoxy.isNotHovered()
                    } );
            }




            

        }
        
        /* SPODNIE */

        else if($currentTile == Tiles[9]){
    
           
            Dialog_container.innerHTML = "<h1>Spodnie: </h1>";
        
        
            ZbiorSpodni.Aquariusy.isShown();
                if(activeSpodnieItems[0]){
                    (activeSpodnieItems[0]);
                    
                    activeSpodnieItems[0].addEventListener("click", () => {
                        ZbiorSpodni.Aquariusy.isActive(true);
    
                    })
                    activeSpodnieItems[0].addEventListener("mouseover", () => {
                        ZbiorSpodni.Aquariusy.isHovered()
                    });
                    activeSpodnieItems[0].addEventListener("mouseout", () => {
                        ZbiorSpodni.Aquariusy.isNotHovered()
                    });
                    
                }
            ZbiorSpodni.Erbaile.isShown();
            if(activeSpodnieItems[1]){
                (activeSpodnieItems[1]);
                activeSpodnieItems[1].addEventListener("click", () => {
                    ZbiorSpodni.Erbaile.isActive(true);
    
                })
                activeSpodnieItems[1].addEventListener("mouseover", () => { 
                    ZbiorSpodni.Erbaile.isHovered()
                });
                activeSpodnieItems[1].addEventListener("mouseout", () => { 
                    ZbiorSpodni.Erbaile.isNotHovered()
                });
                
            }
            ZbiorSpodni.Obdartusy.isShown();
                if(activeSpodnieItems[2]){
                    (activeSpodnieItems[2]);
                    activeSpodnieItems[2].addEventListener("click", () => {
                        ZbiorSpodni.Obdartusy.isActive(true);
    
                })
                activeSpodnieItems[2].addEventListener("mouseover",() => {
                    ZbiorSpodni.Obdartusy.isHovered()
                });
                activeSpodnieItems[2].addEventListener("mouseout",() => {
                    ZbiorSpodni.Obdartusy.isNotHovered()
                });
            }
            ZbiorSpodni.Skiilfy.isShown();
                if(activeSpodnieItems[3]){
                    (activeSpodnieItems[3]);
                    activeSpodnieItems[3].addEventListener("click", () => {
                        ZbiorSpodni.Skiilfy.isActive(true);
    
                })
                activeSpodnieItems[3].addEventListener("mouseover", () => {
                    ZbiorSpodni.Skiilfy.isHovered()
                } );
                activeSpodnieItems[3].addEventListener("mouseout", () => {
                    ZbiorSpodni.Skiilfy.isNotHovered()
                } );
        }
            ZbiorSpodni.Temary.isShown();
                if(activeSpodnieItems[4]){
                    (activeSpodnieItems[4]);
                    activeSpodnieItems[4].addEventListener("click", () => {
                        ZbiorSpodni.Temary.isActive(true);
    
                })
                activeSpodnieItems[4].addEventListener("mouseover", () => {
                    ZbiorSpodni.Temary.isHovered()
                } );
                activeSpodnieItems[4].addEventListener("mouseout", () => {
                    ZbiorSpodni.Temary.isNotHovered()
                } );
        }
            ZbiorSpodni.Tirhel.isShown();
                if(activeSpodnieItems[5]){
                    (activeSpodnieItems[5]);
                    activeSpodnieItems[5].addEventListener("click", () => {
                        ZbiorSpodni.Tirhel.isActive(true);
    
                })
                activeSpodnieItems[5].addEventListener("mouseover", () => {
                    ZbiorSpodni.Tirhel.isHovered()
                } );
                activeSpodnieItems[5].addEventListener("mouseout", () => {
                    ZbiorSpodni.Tirhel.isNotHovered()
                } );
        }
            ZbiorSpodni.Udreki.isShown();
                if(activeSpodnieItems[6]){
                    (activeSpodnieItems[6]);
                    activeSpodnieItems[6].addEventListener("click", () => {
                        ZbiorSpodni.Udreki.isActive(true);
    
                })
                activeSpodnieItems[6].addEventListener("mouseover", () => {
                    ZbiorSpodni.Udreki.isHovered()
                } );
                activeSpodnieItems[6].addEventListener("mouseout", () => {
                    ZbiorSpodni.Udreki.isNotHovered()
                } );
        }
            ZbiorSpodni.Varrvy.isShown();
                if(activeSpodnieItems[7]){
                    (activeSpodnieItems[7]);
                    activeSpodnieItems[7].addEventListener("click", () => {
                        ZbiorSpodni.Varrvy.isActive(true);
    
                })
                activeSpodnieItems[7].addEventListener("mouseover", () => {
                    ZbiorSpodni.Varrvy.isHovered()
                } );
                activeSpodnieItems[7].addEventListener("mouseout", () => {
                    ZbiorSpodni.Varrvy.isNotHovered()
                } );
        }
            ZbiorSpodni.Wzorek.isShown();
                if(activeSpodnieItems[8]){
                    (activeSpodnieItems[8]);
                    activeSpodnieItems[8].addEventListener("click", () => {
                        ZbiorSpodni.Wzorek.isActive(true);
    
                })
                activeSpodnieItems[8].addEventListener("mouseover", () => {
                    ZbiorSpodni.Wzorek.isHovered()
                } );
                activeSpodnieItems[8].addEventListener("mouseout", () => {
                    ZbiorSpodni.Wzorek.isNotHovered()
                } );
        }
            ZbiorSpodni.Ziraki.isShown();
                if(activeSpodnieItems[9]){
                    (activeSpodnieItems[9]);
                    activeSpodnieItems[9].addEventListener("click", () => {
                        ZbiorSpodni.Ziraki.isActive(true);
    
                })
                activeSpodnieItems[9].addEventListener("mouseover", () => {
                    ZbiorSpodni.Ziraki.isHovered()
                } );
                activeSpodnieItems[9].addEventListener("mouseout", () => {
                    ZbiorSpodni.Ziraki.isNotHovered()
                } );
        }







            

        }
        
        /* PAS */
        
        else if($currentTile == Tiles[10]){
            Dialog_container.innerHTML = "<h1>Pas: </h1>";
        
        
            ZbiorPasow.Anabolik.isShown();
                if(activePasItems[0]){
                    (activePasItems[0]);
                    
                    activePasItems[0].addEventListener("click", () => {
                        ZbiorPasow.Anabolik.isActive(true);
    
                    })
                    activePasItems[0].addEventListener("mouseover", () => {
                        ZbiorPasow.Anabolik.isHovered()
                    });
                    activePasItems[0].addEventListener("mouseout", () => {
                        ZbiorPasow.Anabolik.isNotHovered()
                    });
                    
                }
            ZbiorPasow.Dagorilm.isShown();
            if(activePasItems[1]){
                (activePasItems[1]);
                activePasItems[1].addEventListener("click", () => {
                    ZbiorPasow.Dagorilm.isActive(true);
    
                })
                activePasItems[1].addEventListener("mouseover", () => { 
                    ZbiorPasow.Dagorilm.isHovered()
                });
                activePasItems[1].addEventListener("mouseout", () => { 
                    ZbiorPasow.Dagorilm.isNotHovered()
                });
                
            }
            ZbiorPasow.Exuvium.isShown();
                if(activePasItems[2]){
                    (activePasItems[2]);
                    activePasItems[2].addEventListener("click", () => {
                        ZbiorPasow.Exuvium.isActive(true);
    
                })
                activePasItems[2].addEventListener("mouseover",() => {
                    ZbiorPasow.Exuvium.isHovered()
                });
                activePasItems[2].addEventListener("mouseout",() => {
                    ZbiorPasow.Exuvium.isNotHovered()
                });
            }
            ZbiorPasow.Koriatula.isShown();
                if(activePasItems[3]){
                    (activePasItems[3]);
                    activePasItems[3].addEventListener("click", () => {
                        ZbiorPasow.Koriatula.isActive(true);
    
                })
                activePasItems[3].addEventListener("mouseover", () => {
                    ZbiorPasow.Koriatula.isHovered()
                } );
                activePasItems[3].addEventListener("mouseout", () => {
                    ZbiorPasow.Koriatula.isNotHovered()
                } );
        }
            ZbiorPasow.Nienawisc_draugula.isShown();
                if(activePasItems[4]){
                    (activePasItems[4]);
                    activePasItems[4].addEventListener("click", () => {
                        ZbiorPasow.Nienawisc_draugula.isActive(true);
    
                })
                activePasItems[4].addEventListener("mouseover", () => {
                    ZbiorPasow.Nienawisc_draugula.isHovered()
                } );
                activePasItems[4].addEventListener("mouseout", () => {
                    ZbiorPasow.Nienawisc_draugula.isNotHovered()
                } );
        }
            ZbiorPasow.Nurt.isShown();
                if(activePasItems[5]){
                    (activePasItems[5]);
                    activePasItems[5].addEventListener("click", () => {
                        ZbiorPasow.Nurt.isActive(true);
    
                })
                activePasItems[5].addEventListener("mouseover", () => {
                    ZbiorPasow.Nurt.isHovered()
                } );
                activePasItems[5].addEventListener("mouseout", () => {
                    ZbiorPasow.Nurt.isNotHovered()
                } );
        }
            ZbiorPasow.Promuris.isShown();
                if(activePasItems[6]){
                    (activePasItems[6]);
                    activePasItems[6].addEventListener("click", () => {
                        ZbiorPasow.Promuris.isActive(true);
    
                })
                activePasItems[6].addEventListener("mouseover", () => {
                    ZbiorPasow.Promuris.isHovered()
                } );
                activePasItems[6].addEventListener("mouseout", () => {
                    ZbiorPasow.Promuris.isNotHovered()
                } );
        }
            ZbiorPasow.Radius_electricum.isShown();
                if(activePasItems[7]){
                    (activePasItems[7]);
                    activePasItems[7].addEventListener("click", () => {
                        ZbiorPasow.Radius_electricum.isActive(true);
    
                })
                activePasItems[7].addEventListener("mouseover", () => {
                    ZbiorPasow.Radius_electricum.isHovered()
                } );
                activePasItems[7].addEventListener("mouseout", () => {
                    ZbiorPasow.Radius_electricum.isNotHovered()
                } );
        }
            ZbiorPasow.Sentrion.isShown();
                if(activePasItems[8]){
                    (activePasItems[8]);
                    activePasItems[8].addEventListener("click", () => {
                        ZbiorPasow.Sentrion.isActive(true);
    
                })
                activePasItems[8].addEventListener("mouseover", () => {
                    ZbiorPasow.Sentrion.isHovered()
                } );
                activePasItems[8].addEventListener("mouseout", () => {
                    ZbiorPasow.Sentrion.isNotHovered()
                } );
        }
        }
        
        /* PIERŚCIEŃ 1 */
        
        else if($currentTile == Tiles[11]){
        
            

            Dialog_container.innerHTML = "<h1>Pierścień 1: </h1>";
        
        
            ZbiorPierscieni1.Arcanscape.isShown();
                if(activePierscien1Items[0]){
                    (activePierscien1Items[0]);
                    
                    activePierscien1Items[0].addEventListener("click", () => {
                        ZbiorPierscieni1.Arcanscape.isActive(true);
    
                    })
                    activePierscien1Items[0].addEventListener("mouseover", () => {
                        ZbiorPierscieni1.Arcanscape.isHovered()
                    });
                    activePierscien1Items[0].addEventListener("mouseout", () => {
                        ZbiorPierscieni1.Arcanscape.isNotHovered()
                    });
                    
                }
            ZbiorPierscieni1.Balast.isShown();
            if(activePierscien1Items[1]){
                (activePierscien1Items[1]);
                activePierscien1Items[1].addEventListener("click", () => {
                    ZbiorPierscieni1.Balast.isActive(true);
    
                })
                activePierscien1Items[1].addEventListener("mouseover", () => { 
                    ZbiorPierscieni1.Balast.isHovered()
                });
                activePierscien1Items[1].addEventListener("mouseout", () => { 
                    ZbiorPierscieni1.Balast.isNotHovered()
                });
                
            }
            ZbiorPierscieni1.Basileus.isShown();
                if(activePierscien1Items[2]){
                    (activePierscien1Items[2]);
                    activePierscien1Items[2].addEventListener("click", () => {
                        ZbiorPierscieni1.Basileus.isActive(true);
    
                })
                activePierscien1Items[2].addEventListener("mouseover",() => {
                    ZbiorPierscieni1.Basileus.isHovered()
                });
                activePierscien1Items[2].addEventListener("mouseout",() => {
                    ZbiorPierscieni1.Basileus.isNotHovered()
                });
            }
            ZbiorPierscieni1.Fiskorl.isShown();
                if(activePierscien1Items[3]){
                    (activePierscien1Items[3]);
                    activePierscien1Items[3].addEventListener("click", () => {
                        ZbiorPierscieni1.Fiskorl.isActive(true);
    
                })
                activePierscien1Items[3].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Fiskorl.isHovered()
                } );
                activePierscien1Items[3].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Fiskorl.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Fulgur.isShown();
                if(activePierscien1Items[4]){
                    (activePierscien1Items[4]);
                    activePierscien1Items[4].addEventListener("click", () => {
                        ZbiorPierscieni1.Fulgur.isActive(true);
    
                })
                activePierscien1Items[4].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Fulgur.isHovered()
                } );
                activePierscien1Items[4].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Fulgur.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Griv.isShown();
                if(activePierscien1Items[5]){
                    (activePierscien1Items[5]);
                    activePierscien1Items[5].addEventListener("click", () => {
                        ZbiorPierscieni1.Griv.isActive(true);
    
                })
                activePierscien1Items[5].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Griv.isHovered()
                } );
                activePierscien1Items[5].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Griv.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Karlder.isShown();
                if(activePierscien1Items[6]){
                    (activePierscien1Items[6]);
                    activePierscien1Items[6].addEventListener("click", () => {
                        ZbiorPierscieni1.Karlder.isActive(true);
    
                })
                activePierscien1Items[6].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Karlder.isHovered()
                } );
                activePierscien1Items[6].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Karlder.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Mauremys.isShown();
                if(activePierscien1Items[7]){
                    (activePierscien1Items[7]);
                    activePierscien1Items[7].addEventListener("click", () => {
                        ZbiorPierscieni1.Mauremys.isActive(true);
    
                })
                activePierscien1Items[7].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Mauremys.isHovered()
                } );
                activePierscien1Items[7].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Mauremys.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Navigon.isShown();
                if(activePierscien1Items[8]){
                    (activePierscien1Items[8]);
                    activePierscien1Items[8].addEventListener("click", () => {
                        ZbiorPierscieni1.Navigon.isActive(true);
    
                })
                activePierscien1Items[8].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Navigon.isHovered()
                } );
                activePierscien1Items[8].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Navigon.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Nit.isShown();
                if(activePierscien1Items[9]){
                    (activePierscien1Items[9]);
                    activePierscien1Items[9].addEventListener("click", () => {
                        ZbiorPierscieni1.Nit.isActive(true);
    
                })
                activePierscien1Items[9].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Nit.isHovered()
                } );
                activePierscien1Items[9].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Nit.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Przysiega_draugula.isShown();
                if(activePierscien1Items[10]){
                    (activePierscien1Items[10]);
                    activePierscien1Items[10].addEventListener("click", () => {
                        ZbiorPierscieni1.Przysiega_draugula.isActive(true);
    
                })
                activePierscien1Items[10].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Przysiega_draugula.isHovered()
                } );
                activePierscien1Items[10].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Przysiega_draugula.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Skogan.isShown();
                if(activePierscien1Items[11]){
                    (activePierscien1Items[11]);
                    activePierscien1Items[11].addEventListener("click", () => {
                        ZbiorPierscieni1.Skogan.isActive(true);
    
                })
                activePierscien1Items[11].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Skogan.isHovered()
                } );
                activePierscien1Items[11].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Skogan.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Uguns.isShown();
                if(activePierscien1Items[12]){
                    (activePierscien1Items[12]);
                    activePierscien1Items[12].addEventListener("click", () => {
                        ZbiorPierscieni1.Uguns.isActive(true);
    
                })
                activePierscien1Items[12].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Uguns.isHovered()
                } );
                activePierscien1Items[12].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Uguns.isNotHovered()
                } );
        }
            ZbiorPierscieni1.Zaglada_ludow.isShown();
                if(activePierscien1Items[13]){
                    (activePierscien1Items[13]);
                    activePierscien1Items[13].addEventListener("click", () => {
                        ZbiorPierscieni1.Zaglada_ludow.isActive(true);
    
                })
                activePierscien1Items[13].addEventListener("mouseover", () => {
                    ZbiorPierscieni1.Zaglada_ludow.isHovered()
                } );
                activePierscien1Items[13].addEventListener("mouseout", () => {
                    ZbiorPierscieni1.Zaglada_ludow.isNotHovered()
                } );
        }

        }
        
        /* PIERŚCIEŃ 2 */
        
        else if($currentTile == Tiles[12]){

            Dialog_container.innerHTML = "<h1>Pierścień 2: </h1>";
        
        
            ZbiorPierscieni2.Arcanscape.isShown();
                if(activePierscien2Items[0]){
                    (activePierscien2Items[0]);
                    
                    activePierscien2Items[0].addEventListener("click", () => {
                        ZbiorPierscieni2.Arcanscape.isActive(true);
    
                    })
                    activePierscien2Items[0].addEventListener("mouseover", () => {
                        ZbiorPierscieni2.Arcanscape.isHovered()
                    });
                    activePierscien2Items[0].addEventListener("mouseout", () => {
                        ZbiorPierscieni2.Arcanscape.isNotHovered()
                    });
                    
                }
            ZbiorPierscieni2.Balast.isShown();
            if(activePierscien2Items[1]){
                (activePierscien2Items[1]);
                activePierscien2Items[1].addEventListener("click", () => {
                    ZbiorPierscieni2.Balast.isActive(true);
    
                })
                activePierscien2Items[1].addEventListener("mouseover", () => { 
                    ZbiorPierscieni2.Balast.isHovered()
                });
                activePierscien2Items[1].addEventListener("mouseout", () => { 
                    ZbiorPierscieni2.Balast.isNotHovered()
                });
                
            }
            ZbiorPierscieni2.Basileus.isShown();
                if(activePierscien2Items[2]){
                    (activePierscien2Items[2]);
                    activePierscien2Items[2].addEventListener("click", () => {
                        ZbiorPierscieni2.Basileus.isActive(true);
    
                })
                activePierscien2Items[2].addEventListener("mouseover",() => {
                    ZbiorPierscieni2.Basileus.isHovered()
                });
                activePierscien2Items[2].addEventListener("mouseout",() => {
                    ZbiorPierscieni2.Basileus.isNotHovered()
                });
            }
            ZbiorPierscieni2.Fiskorl.isShown();
                if(activePierscien2Items[3]){
                    (activePierscien2Items[3]);
                    activePierscien2Items[3].addEventListener("click", () => {
                        ZbiorPierscieni2.Fiskorl.isActive(true);
    
                })
                activePierscien2Items[3].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Fiskorl.isHovered()
                } );
                activePierscien2Items[3].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Fiskorl.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Fulgur.isShown();
                if(activePierscien2Items[4]){
                    (activePierscien2Items[4]);
                    activePierscien2Items[4].addEventListener("click", () => {
                        ZbiorPierscieni2.Fulgur.isActive(true);
    
                })
                activePierscien2Items[4].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Fulgur.isHovered()
                } );
                activePierscien2Items[4].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Fulgur.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Griv.isShown();
                if(activePierscien2Items[5]){
                    (activePierscien2Items[5]);
                    activePierscien2Items[5].addEventListener("click", () => {
                        ZbiorPierscieni2.Griv.isActive(true);
    
                })
                activePierscien2Items[5].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Griv.isHovered()
                } );
                activePierscien2Items[5].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Griv.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Karlder.isShown();
                if(activePierscien2Items[6]){
                    (activePierscien2Items[6]);
                    activePierscien2Items[6].addEventListener("click", () => {
                        ZbiorPierscieni2.Karlder.isActive(true);
    
                })
                activePierscien2Items[6].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Karlder.isHovered()
                } );
                activePierscien2Items[6].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Karlder.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Mauremys.isShown();
                if(activePierscien2Items[7]){
                    (activePierscien2Items[7]);
                    activePierscien2Items[7].addEventListener("click", () => {
                        ZbiorPierscieni2.Mauremys.isActive(true);
    
                })
                activePierscien2Items[7].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Mauremys.isHovered()
                } );
                activePierscien2Items[7].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Mauremys.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Navigon.isShown();
                if(activePierscien2Items[8]){
                    (activePierscien2Items[8]);
                    activePierscien2Items[8].addEventListener("click", () => {
                        ZbiorPierscieni2.Navigon.isActive(true);
    
                })
                activePierscien2Items[8].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Navigon.isHovered()
                } );
                activePierscien2Items[8].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Navigon.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Nit.isShown();
                if(activePierscien2Items[9]){
                    (activePierscien2Items[9]);
                    activePierscien2Items[9].addEventListener("click", () => {
                        ZbiorPierscieni2.Nit.isActive(true);
    
                })
                activePierscien2Items[9].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Nit.isHovered()
                } );
                activePierscien2Items[9].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Nit.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Przysiega_draugula.isShown();
                if(activePierscien2Items[10]){
                    (activePierscien2Items[10]);
                    activePierscien2Items[10].addEventListener("click", () => {
                        ZbiorPierscieni2.Przysiega_draugula.isActive(true);
    
                })
                activePierscien2Items[10].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Przysiega_draugula.isHovered()
                } );
                activePierscien2Items[10].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Przysiega_draugula.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Skogan.isShown();
                if(activePierscien2Items[11]){
                    (activePierscien2Items[11]);
                    activePierscien2Items[11].addEventListener("click", () => {
                        ZbiorPierscieni2.Skogan.isActive(true);
    
                })
                activePierscien2Items[11].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Skogan.isHovered()
                } );
                activePierscien2Items[11].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Skogan.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Uguns.isShown();
                if(activePierscien2Items[12]){
                    (activePierscien2Items[12]);
                    activePierscien2Items[12].addEventListener("click", () => {
                        ZbiorPierscieni2.Uguns.isActive(true);
    
                })
                activePierscien2Items[12].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Uguns.isHovered()
                } );
                activePierscien2Items[12].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Uguns.isNotHovered()
                } );
        }
            ZbiorPierscieni2.Zaglada_ludow.isShown();
                if(activePierscien2Items[13]){
                    (activePierscien2Items[13]);
                    activePierscien2Items[13].addEventListener("click", () => {
                        ZbiorPierscieni2.Zaglada_ludow.isActive(true);
    
                })
                activePierscien2Items[13].addEventListener("mouseover", () => {
                    ZbiorPierscieni2.Zaglada_ludow.isHovered()
                } );
                activePierscien2Items[13].addEventListener("mouseout", () => {
                    ZbiorPierscieni2.Zaglada_ludow.isNotHovered()
                } );
        }

        
            

        }
        
        /* BUTY */
        
        else if($currentTile == Tiles[13]){
        
             Dialog_container.innerHTML = "<h1>Buty: </h1>";
        
        
            ZbiorButow.Alendry.isShown();
                if(activeButyItems[0]){
                    (activeButyItems[0]);
                    
                    activeButyItems[0].addEventListener("click", () => {
                        ZbiorButow.Alendry.isActive(true);
    
                    })
                    activeButyItems[0].addEventListener("mouseover", () => {
                        ZbiorButow.Alendry.isHovered()
                    });
                    activeButyItems[0].addEventListener("mouseout", () => {
                        ZbiorButow.Alendry.isNotHovered()
                    });
                    
                }
            ZbiorButow.Aqueniry.isShown();
            if(activeButyItems[1]){
                (activeButyItems[1]);
                activeButyItems[1].addEventListener("click", () => {
                    ZbiorButow.Aqueniry.isActive(true);
    
                })
                activeButyItems[1].addEventListener("mouseover", () => { 
                    ZbiorButow.Aqueniry.isHovered()
                });
                activeButyItems[1].addEventListener("mouseout", () => { 
                    ZbiorButow.Aqueniry.isNotHovered()
                });
                
            }
            ZbiorButow.Arhauty.isShown();
                if(activeButyItems[2]){
                    (activeButyItems[2]);
                    activeButyItems[2].addEventListener("click", () => {
                        ZbiorButow.Arhauty.isActive(true);
    
                })
                activeButyItems[2].addEventListener("mouseover",() => {
                    ZbiorButow.Arhauty.isHovered()
                });
                activeButyItems[2].addEventListener("mouseout",() => {
                    ZbiorButow.Arhauty.isNotHovered()
                });
            }
            ZbiorButow.Cierpietniki.isShown();
                if(activeButyItems[3]){
                    (activeButyItems[3]);
                    activeButyItems[3].addEventListener("click", () => {
                        ZbiorButow.Cierpietniki.isActive(true);
    
                })
                activeButyItems[3].addEventListener("mouseover", () => {
                    ZbiorButow.Cierpietniki.isHovered()
                } );
                activeButyItems[3].addEventListener("mouseout", () => {
                    ZbiorButow.Cierpietniki.isNotHovered()
                } );
        }
            ZbiorButow.Czengsvesy.isShown();
                if(activeButyItems[4]){
                    (activeButyItems[4]);
                    activeButyItems[4].addEventListener("click", () => {
                        ZbiorButow.Czengsvesy.isActive(true);
    
                })
                activeButyItems[4].addEventListener("mouseover", () => {
                    ZbiorButow.Czengsvesy.isHovered()
                } );
                activeButyItems[4].addEventListener("mouseout", () => {
                    ZbiorButow.Czengsvesy.isNotHovered()
                } );
        }
            ZbiorButow.Jeroszki.isShown();
                if(activeButyItems[5]){
                    (activeButyItems[5]);
                    activeButyItems[5].addEventListener("click", () => {
                        ZbiorButow.Jeroszki.isActive(true);
    
                })
                activeButyItems[5].addEventListener("mouseover", () => {
                    ZbiorButow.Jeroszki.isHovered()
                } );
                activeButyItems[5].addEventListener("mouseout", () => {
                    ZbiorButow.Jeroszki.isNotHovered()
                } );
        }
            ZbiorButow.Envile.isShown();
                if(activeButyItems[6]){
                    (activeButyItems[6]);
                    activeButyItems[6].addEventListener("click", () => {
                        ZbiorButow.Envile.isActive(true);
    
                })
                activeButyItems[6].addEventListener("mouseover", () => {
                    ZbiorButow.Envile.isHovered()
                } );
                activeButyItems[6].addEventListener("mouseout", () => {
                    ZbiorButow.Envile.isNotHovered()
                } );
        }
            ZbiorButow.Lysmary.isShown();
                if(activeButyItems[7]){
                    (activeButyItems[7]);
                    activeButyItems[7].addEventListener("click", () => {
                        ZbiorButow.Lysmary.isActive(true);
    
                })
                activeButyItems[7].addEventListener("mouseover", () => {
                    ZbiorButow.Lysmary.isHovered()
                } );
                activeButyItems[7].addEventListener("mouseout", () => {
                    ZbiorButow.Lysmary.isNotHovered()
                } );
        }
            ZbiorButow.Moczary.isShown();
                if(activeButyItems[8]){
                    (activeButyItems[8]);
                    activeButyItems[8].addEventListener("click", () => {
                        ZbiorButow.Moczary.isActive(true);
    
                })
                activeButyItems[8].addEventListener("mouseover", () => {
                    ZbiorButow.Moczary.isHovered()
                } );
                activeButyItems[8].addEventListener("mouseout", () => {
                    ZbiorButow.Moczary.isNotHovered()
                } );
        }
            ZbiorButow.Tangnary.isShown();
                if(activeButyItems[9]){
                    (activeButyItems[9]);
                    activeButyItems[9].addEventListener("click", () => {
                        ZbiorButow.Tangnary.isActive(true);
    
                })
                activeButyItems[9].addEventListener("mouseover", () => {
                    ZbiorButow.Tangnary.isHovered()
                } );
                activeButyItems[9].addEventListener("mouseout", () => {
                    ZbiorButow.Tangnary.isNotHovered()
                } );
        }
            ZbiorButow.Thorimmy.isShown();
                if(activeButyItems[10]){
                    (activeButyItems[10]);
                    activeButyItems[10].addEventListener("click", () => {
                        ZbiorButow.Thorimmy.isActive(true);
    
                })
                activeButyItems[10].addEventListener("mouseover", () => {
                    ZbiorButow.Thorimmy.isHovered()
                } );
                activeButyItems[10].addEventListener("mouseout", () => {
                    ZbiorButow.Thorimmy.isNotHovered()
                } );
        }
            ZbiorButow.Virveny.isShown();
                if(activeButyItems[11]){
                    (activeButyItems[11]);
                    activeButyItems[11].addEventListener("click", () => {
                        ZbiorButow.Virveny.isActive(true);
    
                })
                activeButyItems[11].addEventListener("mouseover", () => {
                    ZbiorButow.Virveny.isHovered()
                } );
                activeButyItems[11].addEventListener("mouseout", () => {
                    ZbiorButow.Virveny.isNotHovered()
                } );
        }

        }
        
        /* DODATKOWE ZDOLNOŚCI PANCERZA */
        
        else if($currentTile == Tiles[14]){
        

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
        activeBronItems = [];
        activeSpodnieItems = [];
        activeKarwaszeItems = [];
        activeKowadloItems = [];
        activePasItems = [];
        activePierscien1Items = [];
        activePierscien2Items = [];
        activeButyItems = [];
        activeZdolnosciItems = [];
        removeButton = null;
        removeButtonCounter = 0;
    });



    
    }



    document.addEventListener("DOMContentLoaded", checkStatistics)

    
    

    



