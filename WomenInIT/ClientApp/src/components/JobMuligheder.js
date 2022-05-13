import React, { Component } from 'react';
import './JobMulighederNav.css';
import './JobMuligheder.css';
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
    constructor(props) {
      super(props);
      this.scrollToSystemUdvikler = React.createRef();
      this.scrollToBackend = React.createRef();
      this.scrollToFrontend = React.createRef();
      this.scrollToFullstack = React.createRef();
      this.scrollToSpil = React.createRef();
      this.scrollToCyber = React.createRef();
      this.scrollToDatabase = React.createRef();
      this.scrollToProjektleder = React.createRef();
    
    }
  
    
    componentDidMount() {
      window.scrollTo(0, 0);
    } 


    render() {
      return (
            <div>
              <div className="overskriftdiv" id="overskriftdivJM">
                <secText className="overskriftJob">Karriere inden for Software</secText>
                  <p className="introOverskrift"> Hvad kan du egentlig arbejde med inden for programmering og software? Er det hele bare computerarbejde?
                  Vi har her samlet nogle af de karrieremuligheder, der findes inden for programmering. Du kan blandt andet læse om at være udvikler, projektleder eller designer. 
                  Det er kun fantasien, der sætter grænser for, hvilke jobs du kan få, og der er mange flere end dem, vi nævner her, men du kan måske finde inspiration til din fremtidige karriere her.</p>
                  <img className="jobMulighedGif "src={introGif} alt="jobMulighedGif" />
              </div>

              <div class="nav" >
                <nav >
                  <a onClick={()=> this.scrollToSystemUdvikler.current.scrollIntoView()} className="a">Systemudvikler</a>
                  <a onClick={()=> this.scrollToBackend.current.scrollIntoView()} className="a">Back-end Udvikler</a>
                  <a onClick={()=> this.scrollToFrontend.current.scrollIntoView()}  className="a">Front-end Udvikler</a>
                  <a onClick={()=> this.scrollToFullstack.current.scrollIntoView()}  className="a">full-stack Udvikler</a>
                  <a onClick={()=> this.scrollToSpil.current.scrollIntoView()}  className="a">Spil Udvikler</a>
                  <a onClick={()=> this.scrollToCyber.current.scrollIntoView()}  className="a">Cyber-sikkerhed Analytiker</a>
                  <a onClick={()=> this.scrollToDatabase.current.scrollIntoView()}  className="a">Database Administrator</a>
                  <a onClick={()=> this.scrollToProjektleder.current.scrollIntoView()}  className="a">IT Projektleder</a>
                </nav>
              </div>

            <div ref={this.scrollToSystemUdvikler} className="historieOrange">
              <h1 className="overskriftHøjre">Systemudvikler</h1>
              <div className="indhold">
              <p className="beskrivelseLys"> 
                Som computerprogrammør er du med til at skabe nye software, hjemmesider og andre applikationer,
                ligeledes er man med til at sørge for, at disse kører og virker, som de skal. Her er man med til at skrive ny kode,
                men man er også med til at teste kode for fejl eller bugs, og bruger tid på at opdaterert og opskalere allerede
                eksisterende programmer. At være programmør er ikke et job, der kræver en speciel uddannelse, da mange også er selvlærte.
                En systemudvikler er en programmør, som beskæftiger sig med mere styresystemnære programmering.
              </p>
              <img className="gifKvadrat" src={systemUdviklerGif} alt=""/>
              </div>
              <div className="faktaOmJob">
              <p className="fakta">Gennemsnitsløn: 34.000 kr.</p>
              <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
              <p className="fakta">Mest almindelige programmeringssprog: Java, Python, C, C++, C#</p>
              </div>
            </div>

            <div ref={this.scrollToBackend} className="historieLys">
              <h1 className="overskriftVenstre">Back-end-udvikler</h1>
              <div className="indhold">
              <img className="gifAflang" src={backEndGif} alt=""/>
                <p className="beskrivelseMørk"> 
                Som back-end-uvikler arbejder man med det bagvedliggende på en hjemmeside eller applikation,
                dvs. alt det, en bruger ikke kan se på hjemmesiden.
                Som back-end-udvikler er du med til at bygge koden, der får databasen og programmet til at snakke sammen.
                Her er man med til at vedigeholde alt det bagvedliggende på en hjemmeside, det betyder blandt andet:
                database, server, og apps, der styre det, man som bruger ikke ser på hjemmesiden. 
                Man er med til at byegge logikken og integrationen af de aktiviteter, der er på hjemmesiden, 
                såsom at skrive API´er, oprette libraries, og arbejde med system-komponenter.
                </p>
                </div>
              <div className="faktaOmJob">
              <p className="fakta">Gennemsnitsløn: 35.000 kr.</p>
              <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
              <p className="fakta">Mest almindelige programmeringssprog: MySQL, JavaScript, Python, C#</p>
              </div>
            </div>

            <div ref={this.scrollToFrontend} className="historiePink">
              <h1 className="overskriftHøjre">Front-End-udvikler</h1>
              <div className="indhold">
                <p className="beskrivelseLys"> 
                En front-end-uvikler bygger front-end-delen af hjemmeside og applikationer.
                Det betyder, at man er med til at lave alt det, som en bruger kan se og interagere med
                på en given hjemmeside. Denne karrierevej er både teknisk og design-orienteret, da der
                ligger teknik i, at hjemmesiden skal fungere, når en bruger interagerer med den, og ligeledes skal
                fungere både på mobil, tablet, pc og meget andet. Da man også her sidder med ansvar for udtrykket
                af en hjemmeside eller applikation, er det også meget designorienteret, og der er rig mulighed for
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

            <div ref={this.scrollToFullstack} className="historieLys">
              <h1 className="overskriftVenstre">Full Stack-udvikler</h1>
              <div className="indhold">
              <img className="gifKvadrat" src={fullStackGif} alt=""/>
                <p className="beskrivelseMørk"> 
                 Som Full Stack-udvikler arbejder du både med Front-end og Back-end. Det vil sige, at du både 
                 arbejder med server-siden, og alt det bagvedliggende på hjemmesider og applikationer, men du har også
                 ansvar for den visuelle del af siden. Derfor har man som Full Stack-udvikler en bred vifte af ansvarsområder,
                 og skal besidde flere egenskaber inden for alt fra databaser til grafisk design.
                </p> 
                </div>
                <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 36.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør</p>
                  <p className="fakta">Mest almindelige programmeringssprog: HTML, JavaScript, CSS, SQL, Java, Python</p>
                </div>
            </div>

            <div ref={this.scrollToSpil} className="historieOrange">
              <h1 className="overskriftHøjre">Spiludvikler</h1>
              <div className="indhold">
              <p className="beskrivelseLys"> 
              Som spiludvikler er dit ansvarsområde at designer og udvikle videospil til computere, konsoller, og 
              mobilapplikationer. Jobbet handler primært om at programmerer basis-mekanikken fra de ideeer, design-teamet
              kommer med. Som spiludvikler kan man også blive involveret i karakter-design, level-design, animaiton og testning.
              </p>
              <img className="gifAflang" src={spilUdviklerGif} alt=""/>
              </div>
              <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 37.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør, Kandidat i Spil </p>
                  <p className="fakta">Mest almindelige programmeringssprog: C++, C#, JavaScript, Java, Python</p>
                </div>
            </div>

            <div ref={this.scrollToCyber} className="historieLys">
              <h1 className="overskriftVenstre">Cybersikkerheds-nalytiker</h1>
              <div className="indhold">
              <img className="gifAflang" src={cyberSikkerhedGif} alt=""/>
                <p className="beskrivelseMørk"> 
                Som Cybersikkerheds analytiker er man med til at sikre computernetværker mod angreb fra hackere
                og ikke-autoriserede folk, der prøver at få adgang. Dette job handler derfor både om at at sikre netværket, så 
                man undgår disse angreb, men også om hvad der skal gøres, hvis det opstår et angreb.
                Dette gøres blandt andet ved at arbejde med firewalls, kryptering og monitorering af systemer.
                </p>
                </div>
                <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 65.000 kr.</p> 
                  <p className="fakta">Uddannelser: Bachelor i Datalogi, Softwareudvikling, Softwareingeniør, Kandidat i Cyber Security </p>
                  <p className="fakta">Mest almindelige programmeringssprog:</p>
                </div>
            </div>

            <div ref={this.scrollToDatabase} className="historiePink">
              <h1 className="overskriftHøjre">Databaseadministrator</h1>
              <div className="indhold">
                <p className="beskrivelseLys"> 
                En databaseadministrator sørger for, at databasen fungerer og kører optimalt. 
                Databasen er der, hvor alt data gemmes. Det kan f.eks. være alle brugerne og deres oplysninger, 
                som er tilknyttet en hjemmeside. Som databaseadministrator er man med til at kreere og organisere
                systemer, der lagrer information, og sørger for, at denne information er sikker og ikke kan blive udsat for angreb.
                Man sørger også for, at dataene er tilgængelige for de autoriserede brugere, der skal kunne tilgå dem.
                </p>
                <img className="gifKvadrat" src={databaseAdministratorGif} alt=""/>
              </div>
              <div className="faktaOmJob">
                  <p className="fakta">Gennemsnitsløn: 36.000 kr.</p> 
                  <p className="fakta">Uddannelser: Datalogi, Softwareudvikling, Data Science, Softwareingeniør</p>
                  <p className="fakta">Mest almindelige programmeringssprog: R, Python, SQL</p>
                </div>
            </div>


            <div ref={this.scrollToProjektleder} className="historieLys">
              <h1 className="overskriftHøjre">IT-projektleder</h1>
              <div className="indhold">
              <p className="beskrivelseMørk"> 
               Når man arbejder som IT-projektleder har man ansvaret for at planlægge, organisere,
               afvikle og afsutte et projekt. Man skal have et overblik over mange områder, heriblandt: 
               risikostyring, budget, tidsoforbrug. Ligeledes skal man også være sikker på, at andre medlemmer 
               af projektet ved, hvor projektet står, hvilke udfordringer der eventuelt er, og hvad der skal til for, at projektet når i mål.
               Som IT-projektleder er det vigtigt at have kompetencer inden for kommunikation, ledelse og tekniske færdigheder.
              </p>
              <img className="Lastgif" src={introGif} alt=""/>
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