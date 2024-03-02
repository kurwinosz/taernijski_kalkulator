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
        Groza_seleny: new Naszyjnik("Groza_seleny","img/groza_seleny.png", false, false),
        
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
            ZbiorNaszyjnikow.Groza_seleny.isShown();
                if(activeNaszyjnikItems[3]){
                    console.log(activeNaszyjnikItems[3]);
                    activeNaszyjnikItems[3].addEventListener("click", () => {
                        ZbiorNaszyjnikow.Groza_seleny.isActive(true);
                })
                activeNaszyjnikItems[3].addEventListener("mouseover", () => {
                    ZbiorNaszyjnikow.Groza_seleny.isHovered()
                });
                activeNaszyjnikItems[3].addEventListener("mouseout", () => {
                    ZbiorNaszyjnikow.Groza_seleny.isNotHovered()
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

            /* POSTAĆ */

        }else if($currentTile == Tiles[5]){
            Dialog_container[5].innerHTML = "YOUR MOTHER";

            /* BROŃ */

        }else if($currentTile == Tiles[6]){
    
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

    
    

    



