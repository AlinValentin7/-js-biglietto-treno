let name = "hello world"
console.log(name)

//calcolo del prezzo del biglietto del treno
    //chiedere all 'utente numero di Km e l'eta
        //dichiarare una variabile km
        let km
        //dichiarare una variabile eta 
        let eta
        //chidere tramite un primo promt quanti km dovra percorere l'utente
        km = prompt("quanti km vuoi fare")
        console.log(km)
        //chidere tramite un secondo promt che eta ha l'utente
        eta = prompt("quanti anni hai?")
        console.log(eta)
    //il prezzo del biglietto è definito in base ai km (0.21 € al km) e deve essere arrontondato alle prime 2 decimali
        //dichiarare una variabile perzzoBiglietto
        let perzzoBiglietto
        //clacolare qunaro costa il biglietto in base al km
        perzzoBiglietto = km * 0.21
        //arrotondiamo il prezzo alle prime 2 decimali
        perzzoBiglietto = Math.round(perzzoBiglietto * 100) / 100
    //va applicato uno sconto del 20% per i minorenni
        //dichiare una variabile chiamata sconto1
        let sconto1
        // calcolare lo sconto del 20%
        sconto1 = (perzzoBiglietto * 20 ) / 100
        // dichiare una variabile scontoMinori
        let scontoMinori 
        //calcolare lo scontoMinori
        scontoMinori = perzzoBiglietto - sconto1
    //va applicato uno sconto del 40% per gli over 65.
        //dichiare una variabile chiamata sconto2
        let sconto2
        //calcolare lo scondo del 40%
        sconto2 = (perzzoBiglietto * 40 ) / 100
        //dichiarare una variabile scontoOver
        let scontoOver
        //calcolare lo scontoOver
        scontoOver = perzzoBiglietto - sconto2
    
        //SE "eta" < di "18" aggiungere Sconto 20%
        if (eta < 18 ) {
            console.log(scontoMinori)

        }
        //SE ALTRIMENTI "eta" > di 65 aggiungere Sconto 40%
        else if (eta>65){
            console.log(scontoOver)

        }
        else{

        }
        //ALTRIMENTI no
    //stampa prezzoBiglietto  
          
        console.log(perzzoBiglietto)
        document.getElementById("prezzo").innerHTML = "Il prezzo del bigletto é " + perzzoBiglietto
       
        
        

