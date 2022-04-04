import React, { Component } from 'react';
import './JobMuligheder.css';
import machånd from './images/mac+hånd.jpg'
import introGif from './images/JobMuligheder/JM.gif'
import frontEndGif from './images/JobMuligheder/frontEnd.gif'
import backEndGif from './images/JobMuligheder/backEndGif.gif'
import systemUdviklerGif from './images/JobMuligheder/systemUdviklerGif.gif'
import fullStackGif from './images/JobMuligheder/fullStackGif.gif'
import spilUdviklerGif from './images/JobMuligheder/spilUdviklerGif.gif'
import cyberSikkerhedGif from './images/JobMuligheder/cyberSikkerhedGif.gif'
import databaseAdministratorGif from './images/JobMuligheder/databaseAdministratorGif.gif'
import itKonsulentGif from './images/JobMuligheder/itKonsulentGif.gif'
import projektlederGif from './images/JobMuligheder/projektlederGif.gif'



export class JobMuligheder extends Component {
    static displayName = JobMuligheder.name;
  
    componentDidMount() {
      window.scrollTo(0, 0);
    } 

    render() {
      return (
            <div>
              <div className="overskriftdiv" >
                <secText className="overskriftJob">Karriere i Software</secText>
                  <p className="introOverskrift"> Hvad kan du egentlig arbejde med indenfor programmering og software? Er det hele bare computerarbejde?
                  Vi har her samlet nogle forskellige muligheder der er indenfor en karriere i programmering. Du kan blandt andet læse om at være udvikler, projektleder eller designer og mange flere. 
                  Det er kun fantasien der sætter grænser for hvilke jobs du kan få, og der er mange flere end dem vi nævner her, men måske du kan finde inspiration til din fremtidige karriere her.</p>
                  <img className="jobMulighedGif "src={introGif} alt="jobMulighedGif" />
              </div>

            <div className="historieOrange">
              <h1 className="overskriftHøjre">Systemudvikler</h1>
              <div className="indhold">
              <p className="beskrivelseLys"> 
                Som computer programmør er du med til at skabe nye software, hjemmesider og andre applikationer,
                ligeledes er man med til at sørge for at disse køre og virker som de skal. Her er man med til at skrive ny kode,
                men man er også med til at teste kode for fejl eller bugs, og bruger tid på at opdaterert og opskalere allerede
                eksiterende programmer. At være programmør er ikke et job der kræver en speciel uddannelse, da mange også er selvlærte.
                En systemudvikler er en programmør som beskæftiger sig med mere styresystemnære programmering.
              </p>
              <img className="gifKvadrat" src={systemUdviklerGif} alt=""/>
              </div>
              <div className="faktaOmJob">
              <p className="fakta">Gennemsnitsløn: 34.000 kr.</p>
              <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
              <p className="fakta">Mest almindelige programmeringssprog: Java, Python, C, C++, C#</p>
              </div>
            </div>

            <div className="historieLys">
              <h1 className="overskriftVenstre">Back-End udvikler</h1>
              <div className="indhold">
              <img className="gifAflang" src={backEndGif} alt=""/>
                <p className="beskrivelseMørk"> 
                Som back-end uvikler arbejder man med det bagvedliggende på en hjemmeside eller applikation,
                dvs. alt det en bruger ikke kan se på hjemmesiden.
                Som back-end udvikler er du med til at bygge koden får databasen og programmet til at snakke sammen.
                Her er man med til veligeholdese alt det bagvedliggende på en hjemmeside, det betyder blandt andet:
                database, server, og apps der styre det man som bruger ikke ser på hjemmesiden. 
                Man er med til at byegge logikken og integrationen af aktiviteter der er på hjemmesiden, 
                som at skrive API´er, oprette libraries, og arbejde med system komponenter.
                </p>
                </div>
              <div className="faktaOmJob">
              <p className="fakta">Gennemsnitsløn: 35.000 kr.</p>
              <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
              <p className="fakta">Mest almindelige programmeringssprog: MySQL, JavaScript, Python, C#</p>
              </div>
            </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">Front-End udvikler</h1>
              <div className="indhold">
                <p className="beskrivelseLys"> 
                En front-end uvikler bygger front-end delen af hjemmeside og applikationer.
                Det betyder at man er med til at lave alt det som en bruger kan se og interagere med
                på en given hjemmeside. Denne karrierevej er både teknisk og design-orienteret, da der
                ligger teknik i at hjemmesiden skal fungere når en bruger interagere med den, og ligeldes skal
                fungere både på mobil, tablet og pc og meget andet. Da man også her sidder med ansvar for udtrykket
                af en hjemmeside eller applikation, er det også meget designorienteret og der er rig mulighed for
                at være kreativ.
                </p>
                <img className="gifKvadrat "src={frontEndGif} alt="frontEndGif" />
              </div>
              <div className="faktaOmJob">
                <p className="fakta">Gennemsnitsløn: 29.000 kr.</p> 
                <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
                <p className="fakta">Mest almindelige programmeringssprog: HTML, JavaScript, CSS</p>
              </div>
            </div>

            <div className="historieLys">
              <h1 className="overskriftVenstre">Full-Stack Udvikler</h1>
              <div className="indhold">
              <img className="gifKvadrat" src={fullStackGif} alt=""/>
                <p className="beskrivelseMørk"> 
                 Som Full Stack developer arbejder du både med Front-End og Back-end. Det vil sige at du både 
                 arbejdet med server-siden, og alt det bagvedliggende på hjemmesider og applikationer, men du har også
                 ansvar for det visuelle af siden. Derfor har man som Full-Stack developer en bred vifte af ansvarsområder,
                 og skal besidde en egenskaber indenfor alt fra databaser tol grafisk design.
                </p> 
                </div>
                <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 36.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
                  <p className="fakta">Mest almindelige programmeringssprog: HTML, JavaScript, CSS, SQL, Java, Python</p>
                </div>
            </div>

            <div className="historieOrange">
              <h1 className="overskriftHøjre">Spil Udvikler</h1>
              <div className="indhold">
              <p className="beskrivelseLys"> 
              Som Spiludvikler er dit ansvarsområde at designer og udvikle videospil til computere, consol, og 
              mobil applikatione. Jobbet handler primært om at programmerer basis mekanikken fra de ideeer design-teamet
              kommet med. Som spiludvikler kan man også blive involveret i karakter design, level design, animaiton og testning.
              </p>
              <img className="gifAflang" src={spilUdviklerGif} alt=""/>
              </div>
              <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 37.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør, Kandidat i Spil </p>
                  <p className="fakta">Mest almindelige programmeringssprog: C++, C#, JavaScript, Java, Python</p>
                </div>
            </div>

            <div className="historieLys">
              <h1 className="overskriftVenstre">Cyber-Sikkerhed Analytiker</h1>
              <div className="indhold">
              <img className="gifAflang" src={cyberSikkerhedGif} alt=""/>
                <p className="beskrivelseMørk"> 
                Som Cyber-Sikkerhed Analytiker er man med til at sikre computer netværker mod angreb fra hackere
                og ikke-autoriserede folk det prøver at få adgang. Dette job handler derfor både om at at sikre netværket så 
                man undgår disse angreb, men også ligeledes hvad der skal gøres hvis det opstår et angreb.
                Dette gøres blandt andet ved at arbejde med firewalls, kryptering og monitorering af systemer.
                </p>
                </div>
                <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 65.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør, Kandidat i Cyber Security </p>
                  <p className="fakta">Mest almindelige programmeringssprog:</p>
                </div>
            </div>

            <div className="historiePink">
              <h1 className="overskriftHøjre">Database Administrator</h1>
              <div className="indhold">
                <p className="beskrivelseLys"> 
                En Database Administrator sørge for at databasen fungere og kører optimalt. 
                Databasen er der hvor alt data gemmes, det kan eks. være alle brugere og deres oplysninger, 
                som er tilknyttet en hjemmeside. Som Database Administrator er man med til at kreére og organisere
                systemer der lagre information og sørge for at denne information er sikker og ikke kan blive udsat for angreb.
                Man sørge også for at dataen et tilgængelig til de autoriserede brugere der skal kunne tilgå den.
                </p>
                <img className="gifKvadrat" src={databaseAdministratorGif} alt=""/>
              </div>
              <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 36.000 kr.</p> 
                  <p className="fakta">Uddannelser: Datalogi, Softwareudvikling, Data Science, Softwareingeniør</p>
                  <p className="fakta">Mest almindelige programmeringssprog: R, Python, SQL</p>
                </div>
            </div>

            <div className="historieLys">
              <h1 className="overskriftVenstre">IT Konsulent</h1>
              <div className="indhold">
              <img className="gifKvadrat" src={itKonsulentGif} alt=""/>
                <p className="beskrivelseMørk"> 
                Som IT Konsulent arbejder man med industrielle og klienter der søger hjælp og råd om 
                IT-problemer eller opgaver. Typiske projekter man optager som IT Konsulent kunne være,
                at analyserer data for en organisation; designe, installere og afprøve nye systemer
                og software, og fixe de problemer der opstår undervejs; reperere computerer og fjerne virusser.
                </p>
                </div>
                <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 45.000 kr.</p> 
                  <p className="fakta">Uddannelser: Datalogi, Softwareudvikling, Datamatiker, Softwareingeniør</p>
                  <p className="fakta">Mest almindelige programmeringssprog: Alle</p>
                </div>
            </div>

            <div className="historieOrange">
              <h1 className="overskriftHøjre">IT Projektleder</h1>
              <div className="indhold">
              <p className="beskrivelseLys"> 
               Når man arbejder som IT Projektleder har man ansvaret for at planlægge, organiserer,
               afhvikle og aflutte et projekt. Man skal have et overblik over mange områder, heriblandt: 
               risikostyring, budget, tidsofobrug. Ligeledes skal man også være sikre på at anre medlemmer 
               af projektet ved hvor projektet står, eventuelle udfordringer, og hvad der skal til for at projektet når i mål.
               Som IT Projektleder er det vigtigt at have kompetencer indenfor kommunikation, ledelse og tekniske færdigheder.
              </p>
              <img className="gifKvadrat" src={projektlederGif} alt=""/>
              </div>
              <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 38.000 kr.</p> 
                  <p className="fakta">Uddannelser: Softwareudvikling, HA.it, Datalogi, HA.pro</p>
                  <p className="fakta">Mest almindelige programmeringssprog: Ingen specifikke</p>
                </div>
            </div>

            </div>

           
      );
    }
}
