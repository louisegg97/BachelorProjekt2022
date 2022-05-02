export default function useOpgavesider() {
    return {
//Frontend opgaver
        "bf1": {
            "title": "Begynder, Opgave 1:",
            "desc": "Skriv noget tekst i normal tykkelse og noget andet fed. Lav i head en titel “Titel” og i body tagget skal teksten skrives.",
            "hint1": "For at skrive en titel kan du bruge tagget <titel></titel>",
            "hint2": "tekst skrives i et <p></p> tag",
            "hint3": "For at gøre tekst fed, brug <b></b> tagget",
            "src":"https://replit.com/@AlberteWaerens/Begynder1?lite=true"
        },

        "bf2": {
            "title": "Begynder, Opgave 3: ",
            "desc": "Lav en knap der hedder “Klik her” og udskriver “Velkommen til” i konsollen. Der skal være en titel på siden, der hedder “Knap”",
            "hint1": "Lav en knap ved at bruge tagget <button type=”button”></button>",
            "hint2": "For at give knap en tekst, skriv teksten imellem <button ...> Skriv tekst her </button>",
            "hint3": "For at udskrive “Velkommen til” i konsollen brug onclick=”console.log(’tekst’)” efter du har defineret at type er en button",
            "src":"https://replit.com/@AlberteWaerens/bf2?lite=true"
        },

        "bf3": {
            "title": "Begynder, Opgave 3: ",
            "desc": "Lav en iframe (et udsnit fra en hjemmeside) i målene: 300px i højden og 70% i bredden. Brug dette link til at lave din iframe: https://www.google.com/?client=safari. Siden skal have en titel “iFrame”",
            "hint1": "For at lave en iframe brug tagget <iframe></iframe> ",
            "hint2": "For at sætte linket ind brug src=”link” i iframe tagget",
            "hint3": "For at sætte størrelsen på iframen brug width=”x” height=”y” i iframe tagget",
            "src":"https://replit.com/@AlberteWaerens/bf3?lite=true"
        },

        "lf1": {
            "title": "Letøvet, Opgave 1: ",
            "desc": "Her skal du skrive en overskrift og en tekst. Din overskrift skal skrives i et h1 tag: <h1></h1>. Din tekst skal skrives i et p tag: <p></p> Derudover skal du nu style på det du har lavet. Dette kan gøres i en helt seperat fil der hedder en CSS-fil, men det kan også gøres direkte i den kode du skriver nu, som er en HTML-fil. Det du skal style er baggrundsfarven og farven på teksten. Dette gøres ved at skrive: style=”dinStylingHer”. Baggrundsfarven skal være bål og tekstens farve skal rød.",
            "hint1": "For at skrive en overskrift skriver du: <h1> Her er en overskrift</h1>",
            "hint2": "For at style din baggrund grøn kan du skrive: <body style=”background-color:green”>",
            "hint3": "For at style din baggrund grøn og lave din tekst pink kan du skrive: <body style=”background-color:green; color:pink”>",
            "src":"?lite=true"
        },

        "lf2": {
            "title": "Letøvet, Opgave 2: ",
            "desc": "Her skal du lave en knap der med teksten “Jeg er en knap”. Når man trykker på knappen skal der udskrives “Du har nu trykket på knappen” i konsollen. Knappen skal styles så den bliver blå, og med runde hjørner svarerne til 10px. Dette kan gøres i en helt seperat fil der hedder en CSS-fil, men det kan også gøres direkte i den kode du skriver nu, som er en HTML-fil. Dette gøres ved at skrive: style=”dinStylingHer”.",
            "hint1": "Lav en knap ved at bruge tagget <button type=”button”>navnPåKnapHer</button>",
            "hint2": "For at style din baggrund grøn kan du skrive: <body style=”background-color:green”>",
            "hint3": "For at udskrive “Du har nu trykket på knappen” i konsollen brug onclick=”console.log(’tekst’)” efter du har defineret at type er en button",
            "src":"?lite=true"
        },

        "lf3": {
            "title": "Letøvet, Opgave 3: ",
            "desc": "I denne opgave skal du lave et tekstfelt, et label, et input felt og en knap, som omhandler at tilmelde sig et nyhedsbrev på en hjemmeside. Først skal du lave et almindeligt tekstfelt med et p tag, hvor der skal stå: “Tilmeld dig nyhedsbrev”. Derefter skal du lave et form-tag, hvor der skal ligge et label-tag og et input-tag (vi har allerede lavet input-tagget for dig). I label-tagget skal der står teksten “email:”. I selve inputfeltet, skal der være nogler værdier; type=””text”, name=”email” og requried. Tilsidst skal der være en knap af tag button, med teksten: “Tilmeld”.",
            "hint1": "Du kan lave et label ved at skrive: <label>tekst:</label>",
            "hint2": "Du kan lave et inputfelt ved at skrive: <input type=”text” name=”email” required />",
            "hint3": "Du kan lave en knap med et button-tag ved at skrive: <button type=”button> Her er noget tekst</button> ",
            "src":"?lite=true"
        },

        "of1": {
            "title": "Øvet, Opgave 1: ",
            "desc": "",
            "hint1": "",
            "hint2": "",
            "hint3": "",
            "src":"https://replit.com/@AlberteWaerens/Begynder1?lite=true"
        },

        "of2": {
            "title": "Øvet, Opgave 3: ",
            "desc": "I denne opgave skal du lave en knap, hvor når der klikkes på den vil man ryge til toppen af en hjemmeside. Disse er især brugt på online-shopping hjemmeside, men f.eks. også på denne hjemmeside. Vi har startet noget af koden for dig. Vi har lavet en metode, som er funktionaliteten der skal være i knappen, så man ryger til toppen af en hjemmesiden når der klikkes på den. Du skal give metoden et passende navn. Dernæst har vi lavet lidt kode til selve knappen, du skal skrive at når der klikkes på knappen, skal den bruge metoden vi har defineret ovenover. Derefter skal du lave selve knappen med et button-tag, med teksten: “Gå til toppen”.",
            "hint1": "Et passende navn til metoden kunne være “scrollToTop”",
            "hint2": "For at fortælle at en metode skal bruges når der klikkes, kan du skrive: “onClick={scrollToTop}",
            "hint3": "For at lave en knap kan du skrive: <button>her er en knap</button>",
            "src":"?lite=true"
        },

        "of3": {
            "title": "Øvet, Opgave 3: ",
            "desc": "I denne opgave skal du lave en titel, en tekst, en tekst med tal, og en knap. Denne Opgave handler om at knappen skal have en “counter” funktion, som får et tal til at stige med én hver gang der klikkes på den. Vi har lavet mange af funktionerne for dig, men du skal selv skrive i metoden “incrementCounter()” som er her metoden for at tallet stiger med én er. For at gøre dette kan man bruge den nuværende variable og sige “+1”. Herefter skal du i return, lave en titel som hedder “Counter”  med et h-tag: <h></h>. Herefter skal du lave en tekst med et p-tag: <p></p>, med teksten “Current count:” . Dit p-tag skal undeholde et strong-tag, hvor du kalder på din variabel this.state.currentCount. Til sidst skal der være en knap af et button-tag:<button></button> med teksten “Increment”. Den skal have en onClick function, hvor der kaldes på metoden: incrementCounter.",
            "hint1": "For at kalde på den nuværende variabel skal du skrive: “this.state.currentCount”",
            "hint2": "For at kalde på din variabel i dit strong-tag kan du skrive: <strong>{this.state.currentCount}</strong>",
            "hint3": "For at få din klik funktion til knappen og kalde på din metode kan du skrive: <button onClick={this.incrementCounter}>Increment</button>",
            "src":"?lite=true"
        },

//Backend opgaver
        "bb1": {
            "title": "Begynder, Opgave 1: Hello World!",
            "desc": "Den første opgave alle spirende programmøre møde er Hello World!.\"\" En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World!. Da dette er er den første opgave så har vi allerede startet klassen op for dig, men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor: ...skal måske være noget forklaring eller link til om programmering siden",
            "hint1": "I denne opgave skal du bruge en kommando der printer en linje ud, også kaldet en string.",
            "hint2": "Når man printer Strings ud skal der \"\" rundt om dem",
            "hint3": "Kommandoen til at printe hvilket som helst ud i terminalen hedder System.out.println()",
            "src":"https://replit.com/@AlberteWaerens/HelloWorld?lite=true"
        },
        
        "bb2": {
            "title": "Begynder, Opgave 2: ",
            "desc": "Her skal du lave en variabel, som er en `string`. En `String` kan holde et ord som f.eks. et navn John.  Her skal din variabel hedde name holde på order LadyBugs. For at oprette en string variabel, skriver man følgende: `String _variabelnav = _ønsketOrd`. Efter du har oprettet variablen, skal du printe navnet ud. For at printe ud bruges kommandoen: `System.out.println(_denØnskedeVariabel);`",
            "hint1": "Når du opretter variablen, der hedder name, kan du skrive: String name = ...;",
            "hint2": "En string skal skrives med citationstegn omrking, eks. “John”.",
            "hint3": "For at printe ud skriver man System.out.println()",
            "src":"https://replit.com/@AlberteWaerens/bb2?lite=true"
        },

        "bb3": {
            "title": "Begynder, Opgave 3: ",
            "desc": "Her skal du lave 2 variabler, som begge er af typen `int.` En int er et keyword for heltal, og det står for *integer* (heltal på engelsk). Den første variabel skal hedde nr1 og holde på tallet 10.Den anden variabel skal hedde nr2 og holde på tallet 5. Til sidst skal du printe de to variabler (10 og 5) lagt sammen, så det printede resultat bliver 15.",
            "hint1": "Når du opretter variablen, der hedder name, kan du skrive: int nr1 = ...;",
            "hint2": "For at printe ud skriver man System.out.println()",
            "hint3": "For at ligge dine variable sammen skrives nr1 + nr2",
            "src":"https://replit.com/@AlberteWaerens/bb3?lite=true"
        },

        "lb1": {
            "title": "Letøvet, Opgave 1: ",
            "desc": "Her skal du oprette et Array. Et array er en liste af variable, og i denne opgave skal det være en liste af tal, så et Array af int. For at oprette et array med int skriver du: `int[] tal = {...,...};` Du skal her have et array der heder “tal”, med værdierne 1,2,3,4,5,6,7,8,9,10. Herefter skal du alle tallene i arrayet printes ud, dette gøres ved hjælp at et for-loop, så løber igennem din liste (array), og kan printe hvert enkelt element ud. I et array har hver værdi en plads, hvor den første plads er plads 0, så plads 1 og så videre. I dit array vil tallet 1, derfor være på pladsen 0.  Man kan kalde på en værdi fra sit array ved at skrive navnet på arrayet og derefter den ønskede plads: arraynavnet[0]. For at lave et for-loop, skriver du: for (int i = _, i < _.length, i+1) { _printud}. Det første udtryk (int i = _), fortæller hvor i dit array du vil starte, vi ønsker at printe alle tal, og vi skal derfor starte fra plads 0.  Det andet udtryk (i < _.lenght) fortæller hvornår vi skal stoppe med at køre igennem arrayet. Vi ønsker at stoppe når vi har været hele arrayet igennem, dette kan vi gøre ved at skrive arrayNavn.length. Det tredje og sidste udtryk, fortæller at hver gang loopet har kørt skal vi øge værdien i med 1, og derved løber vi igennem hele arrayet (listen).",
            "hint1": "For at lave et array med int skriver man: int[] numbers = {1, 2, 3..}",
            "hint2": "For at løbe igennem arrayet med et for-loop, skriver man: for (int i = 0; i < numbers.length; i+1) {...}",
            "hint3": "For at printe alle elementer i arrayet ud skriver man: System.out.println(numbers[i])",
            "src":"https://replit.com/@AlberteWaerens/lb1?lite=true"

        },

        "lb2": {
            "title": "Letøvet, Opgave 2: ",
            "desc": "Her skal du arbejde med det der hedder `if` og `else` kommandoer. If og else, bruges når der er flere mulige udfald af dit program. Her skal du bruge det til at tjekke, om int 20 er større end int 10. Når man bruger if else kommandoer skrives det på følgende måde:if (_statementManVilTjekke) _gørNoget; else _gørNogetAndet; . Du skal først oprette en variabel som er en int med navn n1, og som holder på værdien 20. Derefter skal du oprette en anden variabel som også er en int med navn nr2, og som holder på værdien 10. Nu skal du sammenligne de to værdier ved brug af if og else, og tjekke om nr1 er større end (>) nr2. Hvis (if) nr1 er større end nr2, skal den printe: 20 er større end 10. Hvis ikke (else), skal den printe: 20 er ikke større end 10.",
            "hint1": "Når du opretter variablen, der hedder name, kan du skrive: int nr1 = ...;",
            "hint2": "For at tjekke om en variabel er større end en anden skriver du: nr1 > nr2",
            "hint3": "For at fortælle hvad der skal ske hvis nr1 er større end nr2, kan du skrive if (nr1 > nr2) { System.out.println(...);",
            "src":"https://replit.com/@AlberteWaerens/lb2?lite=true"
        },

        "lb3": {
            "title": "Letøvet, Opgave 3: ",
            "desc": "Den første opgave alle spirende programmøre møde er Hello World!. En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World!. Da dette er er den første opgave så har vi allerede startet klassen op for dig, men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor: ...skal måske være noget forklaring eller link til om programmering siden",
            "hint1": "I denne opgave skal du bruge en kommando der printer en linje ud, også kaldet en string.",
            "hint2": "Når man printer Strings ud skal der \"\" rundt om dem",
            "hint3": "Kommandoen til at printe hvilket som helst ud i terminalen hedder System.out.println()",
            "src":"https://replit.com/@AlberteWaerens/lb3?lite=true"
        },

        "ob1": {
            "title": "Øvet, Opgave 1: Arrays",
            "desc": "Denne opgave handler om Arrays. my_array1 indeholder årstallene 1999, 2009, 2019 og 2229 og my_array2 indeholder strengene 'Der' 'er' 'ti' 'års' 'mellemrum'. Skriv et java program, der først printer indholdet fra arrayene my_array1 og my_array2 og derefter sorterer indholdet fra de to arrays ",
            "hint1": "Et array, der indeholder tal instantieres: int [] array_navn og et array, der indeholder strenge instantieres: String [] array_navn",
            "hint2": "Arrays.ToString() er en java metode, der returnerer det indhold, der er i arrayet",
            "hint3": "For at sorterer indholdet i et array, kan man bruge metoden Arrays.sort().",
            "src":"https://replit.com/@AlberteWaerens/ob1?lite=true"
        },

        "ob2": {
            "title": "Øvet, Opgave 2: ",
            "desc": "Den første opgave alle spirende programmøre møde er Hello World!. En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World!. Da dette er er den første opgave så har vi allerede startet klassen op for dig, men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor: ...skal måske være noget forklaring eller link til om programmering siden",
            "hint1": "I denne opgave skal du bruge en kommando der printer en linje ud, også kaldet en string.",
            "hint2": "Når man printer Strings ud skal der \"\" rundt om dem",
            "hint3": "Kommandoen til at printe hvilket som helst ud i terminalen hedder System.out.println()",
            "src":"https://replit.com/@AlberteWaerens/ob2?lite=true"
        },

        "ob3": {
            "title": "Øvet, Opgave 3: ",
            "desc": "Den første opgave alle spirende programmøre møde er Hello World!. En opgave der helt simpelt går ud på at få din computer til at udskrive, Hello World!. Da dette er er den første opgave så har vi allerede startet klassen op for dig, men hvis du har brug for lidt mere hjælp end det så tryk på et hint nedenfor: ...skal måske være noget forklaring eller link til om programmering siden",
            "hint1": "I denne opgave skal du bruge en kommando der printer en linje ud, også kaldet en string.",
            "hint2": "Når man printer Strings ud skal der \"\" rundt om dem",
            "hint3": "Kommandoen til at printe hvilket som helst ud i terminalen hedder System.out.println()",
            "src":"https://replit.com/@AlberteWaerens/ob3?lite=true"
        },
//Database opgaver

        "bd1": {
            "title": "Begynder, Opgave 1: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "bd2": {
            "title": "Begynder, Opgave 2: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "bd3": {
            "title": "Begynder, Opgave 3: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "ld1": {
            "title": "Letøvet, Opgave 1: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "ld2": {
            "title": "Letøvet, Opgave 2: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "ld3": {
            "title": "Letøvet, Opgave 3: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },


        "od1": {
            "title": "Øvet, Opgave 1: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "od2": {
            "title": "Øvet, Opgave 2: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        "od3": {
            "title": "Øvet, Opgave 3: ",
            "desc": "I denne opgave skal du starte med at lave en overskrift inden i html filen. Du skal skrive det ind under <body>. Derefter skal du give den dette id=\"overskrift\" så du kan ændre dens farve inden i css filen. For at lave en overskrift skal du bruge <header></header> inden i .html",
            "hint1": "Skriv din tekst imellem <header id=\"overskrift\">___</header>",
            "hint2": "Du skal bruge color:;",
            "hint3": "Find en rgb kode på nettet på en farve du godt kan lide og skrive den ind",
            "src":"?lite=true"
        },

        
    };
}