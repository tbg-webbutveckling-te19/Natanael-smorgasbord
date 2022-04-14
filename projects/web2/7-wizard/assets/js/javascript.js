var mana = document.querySelector(".mana")

var hp = document.querySelector(".hp")

var spellCast = document.querySelector(".castSpell")

var takeDmg = document.querySelector(".takeDmg")

var foundMana = document.querySelector(".manaFound")

var resetBtn = document.querySelector(".resetBtn")

var imgWizard = document.querySelector(".wizardImg")

var manaBar = document.querySelector(".manaBar")

var hpBar = document.querySelector(".hpBar")

var wizardSpell = document.querySelector(".wizardSpell")

var drinkingAnimation = document.querySelector(".drinkingAnimation")

function removeSpell(){
    wizardSpell.style.display='none'
}

function removeDrinking(){
    drinkingAnimation.style.display='none'
    if (hero.mana<140){
        hero.mana+=20
    }
    mana.innerHTML=`<span style="color: Blue">Mana: ${hero.mana}</span>`
    manaBar.style.setProperty('--width', (hero.mana/140)*100) /* Delar nuvarande mana och multiciplerar med hundra för att få ut % som sedan sätts in i mana baren */
}

var hero = {
    hp: 100,
    mana: 140,
    dmgTaken: function(){
        this.hp-=20
        hpBar.style.setProperty('--width', (this.hp))
    },
    manaFound: function(){
        if (this.mana<140){
            drinkingAnimation.style.display='block'
            setTimeout(removeDrinking, 6010)
        }
    },
    castSpell: function(){
        if (this.mana>19){
            this.mana-=20
            mana.innerHTML=`<span style="color: Blue">Mana: ${hero.mana}</span>`
            manaBar.style.setProperty('--width', (this.mana/140)*100)
            wizardSpell.style.display='block'
            setTimeout(removeSpell, 1000)
        }
        if (this.mana==0){
            mana.innerHTML=`<span style="color: Blue">Mana: ${this.mana} You're out of mana!</span>`
        }
    },
    gameOver: function(){
        hp.innerHTML=`<span>HP: ${hero.hp}</span>`
        if (this.hp<70){
            imgWizard.setAttribute("src", "assets/images/dmgd1.png")
        }
        
        if (this.hp<50){
            imgWizard.setAttribute("src", "assets/images/dmgd3.png")
        }
        if (this.hp<30){
            imgWizard.setAttribute("src", "assets/images/dmgd2.png")
        }
        if (this.hp<=0){
            imgWizard.setAttribute("src", "assets/images/dmgd4.png")
            imgWizard.classList.add("dead")
            takeDmg.classList.add("btnGameOver")
            spellCast.classList.add("btnGameOver")
            foundMana.classList.add("btnGameOver")
            resetBtn.classList.add("showResetBtn")
        }
    },
    restartGame: function(){
        this.hp=100
        this.mana=140
        imgWizard.setAttribute("src", "assets/images/wizard.png")
        hpBar.style.setProperty('--width', (this.hp))
        manaBar.style.setProperty('--width', (this.mana/140)*100)
        takeDmg.classList.remove("btnGameOver")
        spellCast.classList.remove("btnGameOver")
        foundMana.classList.remove("btnGameOver")
        resetBtn.classList.remove("showResetBtn")
        imgWizard.classList.remove("dead")
        hp.innerHTML=`<span style="color: Green">HP: ${this.hp}</span>`
        mana.innerHTML=`<span style="color: Blue">Mana: ${this.mana}</span>`
    }
}

resetBtn.addEventListener('click', function(){
    hero.restartGame()
})

takeDmg.addEventListener('click', function(){
    hero.dmgTaken()
    hero.gameOver()
})
foundMana.addEventListener('click', function(){
    hero.manaFound()
    hero.gameOver()
})
spellCast.addEventListener('click', function(){
    hero.castSpell()
    hero.gameOver()
})