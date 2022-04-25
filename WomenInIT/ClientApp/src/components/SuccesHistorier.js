import React, { Component } from 'react';
import './SuccesHistorier.css';
import AdaLovelace from './images/SuccesHistorier/AdaLovelace.jpg';
import AlberteWærens from './images/SuccesHistorier/alberteWærens.png';
import CarlaMeninsky from './images/SuccesHistorier/CarlaMeninsky.jpg';
import DonaBailey from './images/SuccesHistorier/DonaBailey.jpg';
import GraceHopperImage from './images/SuccesHistorier/graceHopper.jpg';
import LouiseBarkhuus from './images/SuccesHistorier/LouiseBarkhuus.jpg';
import MaryKennethKeller from './images/SuccesHistorier/MaryKennethKeller.jpg';
import PernilleBjoern from './images/SuccesHistorier/PernilleBjoern.jpg'
import PlamenaCherneva from './images/SuccesHistorier/PlamenaCherneva.jpg'
import SukiLee from './images/SuccesHistorier/SukiLee.jpg'
import IsabellaDrest from './images/SuccesHistorier/IsabellaDrest.jpg'



export class SuccesHistorier extends Component {
  static displayName = SuccesHistorier.name;
  
  componentDidMount() {
    window.scrollTo(0, 0);
  } 
  
  render() {
    return (
      <div>
        <secText className="overskrift">Succes Historier</secText>
        <div className="topDiv">
          <secText className="introText">Der er mange seje kvinder i IT-branchen! Her kan du blive klogere på nogle af dem, og høre deres historier</secText>
          
          <div className="billede1Div">
          <img className="billede1" src={AlberteWærens} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Alberte Kjær Wærens</div>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div>

          <div className="billede2Div">
          <img className="billede2" src={CarlaMeninsky} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Carla Meninsky</div>
              <div class="skjultText">Ingeniør, softwareudvikler og advokat</div>
              </div>
          </div>
          
          
          <div className="billede3Div">
          <img className="billede3" src={LouiseBarkhuus} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Louise Barkhuus</div>
              <div class="skjultText">Professor ved IT-Universitetet</div>
              </div>
          </div>



          <div className="billede4Div">
          <img className="billede4" src={DonaBailey} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Dona Bailey</div>
              <div class="skjultText">Programmør</div>
              </div>
          </div>

          <div className="billede6Div">
          <img className="billede6" src={AdaLovelace} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Ada Lovelace</div>
              <div class="skjultText">Verdens første computerprogrammør</div>
              </div>
          </div>

          <div className="billede7Div">
          <img className="billede7" src={GraceHopperImage} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>

          <div className="billede8Div">
          <img className="billede8" src={MaryKennethKeller} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Mary Kennet hKeller</div>
              <div class="skjultText">Ph.d. i datalogi</div>
              </div>
          </div>

          <div className="billede9Div">
          <img className="billede9" src={PernilleBjoern} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Pernille Bjørn</div>
              <div class="skjultText">Professor på Datalogisk Institut</div>
              </div>
          </div>


          <div className="billede11Div">
          <img className="billede11" src={PernilleBjoern} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Louise Gyland Götschze</div>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div>

          <div className="billede10Div">
          <img className="billede10" src={SukiLee} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Suki Lee</div>
              <div class="skjultText">Videospiludvikler, softwareingeniør og projektleder</div>
              </div>
          </div>

          <div className="billede12Div">
          <img className="billede12" src={IsabellaDrest} alt=""/>
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Isabella Drest Rasmussen</div>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div>

        </div>
 
        <div className="historieOrange">
          <h1 className="overskriftHøjre" id={'section1'}>Ada Lovelace</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Ada Lovelace er blevet kaldt verdens første computerprogrammør. 
              Hvad hun gjorde, var at skrive verdens første maskinalgoritme til en tidlig computermaskine, der kun eksisterede på papir. 
              Selvfølgelig skulle nogen være den første, men Lovelace var en kvinde, og det var i 1840'erne. Lovelace var en genial matematiker. 
              Ada var kun teenager, da hun mødte Cambridge matematikprofessor Charles Babbage, som havde opfundet Difference Engine, en mekanisk computer designet at producere matematiske tabeller automatisk og fejlfrit. 
              Babbage byggede aldrig selve maskinen på grund af personlige tilbageslag og finansieringsproblemer.
              Babbage var imponeret over den geniale unge kvinde, og de korresponderede i årevis og diskuterede matematik og computere, mens han udviklede den analytiske motor. 
              I 1842 holdt Babbage en forelæsning om motoren ved universitetet i Torino. Ada, nu kendt som grevinde af Lovelace, fik til opgave at oversætte transskriptionen til engelsk. 
              Lovelace føjede sine egne noter til foredraget, som endte med at være tre gange så langt som selve transskriptionen. Den blev udgivet i 1843.
              Lovelaces notater gjorde det klart, at hun forstod den analytiske motor såvel som Babbage selv. 
              Desuden forstod hun, hvordan man fik det til at gøre de ting, computere gør. Hun foreslog datainput, der ville programmere maskinen til at beregne Bernoulli-tal, som nu betragtes som det første computerprogram. 
              Men mere end det, Lovelace var en visionær: Hun forstod, at tal kunne bruges til at repræsentere mere end blot mængder, og en maskine, der kunne manipulere tal, kunne gøres til at manipulere data repræsenteret ved tal.
               Hun forudsagde, at maskiner som den analytiske motor kunne bruges til at komponere musik, producere grafik og være nyttige for videnskaben . Som vi nu alt det gik i opfyldelse, men selvfølgelig ikke før yderligere 100 år.
              Babbage var så imponeret over Lovelaces bidrag, at han døbte hende "The Enchantress of Numbers".</p>
            <img className="billede" src={AdaLovelace} alt=""/>
          </div>
        </div>
      
        <div className="historieLys">
          <h1 className="overskriftVenstre">Alberte Kjær Wærens</h1>
          <div className="indhold">
            <img className="billede" src={AlberteWærens} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre">Carla Meninsky</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Carla Meninsky er en banebrydende ingeniør, softwareudvikler og advokat. 
            Mens hun begyndte på universitetet til hovedfag i matematik, endte hun med en grad i psykologi med speciale i visuel perception fra Stanford University i 1977. 
            Med sine lige så fremragende matematik- og kunstfærdigheder og en interesse for computeriseret animation blev hun spiludvikler, der arbejdede for Atari i 1979, hvor hun designede, 
            programmerede og skabte Warlords (1982) og Dodge'em (1980) (hun lavede også senere en specialiseret version af Dodge'em til Mercedes Benz). 
            Hun var en del af holdet, der skabte Star Raiders til Atari 2600 (1983?). 
            Efter Atari fortsatte hun sit arbejde med spil ved at skabe de tidlige værktøjer til avanceret computergrafik, der beskæftiger sig med belysning, teksturer, overflader, 3D-gengivelse og 3D-effekter. 
            I denne periode arbejdede hun for bl.a. Activision, Cadlink, Wei Tek og Sun Microsystems. Senere gik hun over til hardwarearkitekturdesign, og i 1995 startede hun sit eget firma som entreprenør, 
            dette gav hende større frihed til at vælge interessante og udfordrende opgaver og hendes kompetencer og ekspertise var meget efterspurgt, f.eks. EA, 3Dfx, Sony/Cirrus Logic. 
            I 2004 dimitterede hun jurastudiet og har siden da arbejdet som advokat.</p>
            <img className="billede" src={CarlaMeninsky} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Dona Bailey</h1>
          <div className="indhold">
            <img className="billede" src={DonaBailey} alt=""/>
            <p className="beskrivelseMørk"> Dona Bailey var den første kvindelige programmør i coin-op afdelingen hos Atari, da hun blev ansat i 1980. 
              I sin første opgave var hun programmør på et fire-personers hold for det succesrige Atari arkadespil Centipede.
              Hun blev først introduceret til computerprogrammering gennem UALRs psykologiafdeling, da psykologiforskningsstudier bruger statistisk analyse til hypotesetestning. 
              Hun lærte først SAS-programmering, som stadig var afhængig af hulkort på det tidspunkt på hendes campus, bemærker hun. 
              Senere i matematikafdelingen i sine kandidatstudier lærte hun Fortran, og hun var på det tidspunkt glad for at have adgang til at skrive på computerterminaler i stedet for at bruge hulkort til at skrive kode. 
              På kandidatskolen var Bailey glad for at opdage, at kandidatstuderende fik lov til at køre computeren til at teste programmer ved hjælp af eksperimentelle datasæt på en ugentlig basis sammenlignet med én gang pr. semester under hendes bachelorarbejde.
              Da hun første gang blev udsat for programmering, forstod hun straks ligheden mellem at skrive kode og at skrive prosa ved hjælp af ord og sprog. 
              "Maskinen analyserer, hvad man skriver i et program, og derfor skal syntaksen og kodningen være på det rigtige sted, i den rigtige rækkefølge. 
              Når du programmerer et computersprog, skal alle elementerne bruges perfekt, ellers vil koden ikke fungere korrekt. 
              Computerprogrammering er meget velordnet, og mulighederne er mere snævre, mere begrænsede, når du skriver kode, end når du skriver prosa med sprog og ord.”
              Dona Bailey blev ansat af General Motors (GM) i Goleta, Californien efter et års ph.d.-skole, og der blev hun introduceret til 6502 assembly-sprogprogrammering, 
              mens hun lærte at bruge en mikroprocessor og sensorer til at styre motorens funktioner i bilfremstilling. Mens hun arbejdede hos GM, havde Dona Bailey sin første oplevelse med at spille et arkade-videospil, Space Invaders. 
              Hun genkendte straks, hvordan den visuelle visning af spillet lignede hendes arbejde på GM-bilskærme, og hun tænkte: "Jeg kan ikke arbejde på biler for evigt, og det ville være meget sjovere at arbejde med spil."
              Der var kun gået lidt over en måned, siden hun flyttede nordpå i slutningen af ​​april og derefter begyndte at arbejde hos Atari i den første uge af juni 1980.
              I 1982 forlod Dona Bailey Atari for at arbejde for Videa, et videospilfirma grundlagt af tre tidligere Atari-ansatte, som hun havde arbejdet med i sit første år hos Atari. 
              Videa blev købt i 1983 af Nolan Bushnell, som tidligere havde grundlagt Atari, og på det tidspunkt blev virksomheden til Sente. Bailey forlod videospilindustrien i 1984.
              I 1997 flyttede Dona Bailey til Arkansas. Fra 2008 underviste hun som fakultetsmedlem i afdelingen for retorik og skrivning ved University of Arkansas i Little Rock, indtil hun gik på pension. 
              I øjeblikket skriver Bailey et manuskript baseret på hendes erfaringer med at programmere Centipede hos Atari.</p>
          </div>
        </div>

        <div className="historieOrange">
          <h1 className="overskriftHøjre" id={'section1'}>Grace Hopper</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Grace Hopper, i sin helhed Grace Murray Hopper, født Grace Brewster Murray, (født 9. december 1906, New York, New York, U.S.-død 1. januar 1992, Arlington, Virginia), 
              amerikansk matematiker og kontreadmiral i den amerikanske flåde, der var en pioner inden for udvikling af computerteknologi, og hjalp med at udvikle UNIVAC I, 
              den første kommercielle elektroniske computer, og flådeapplikationer til COBOL (common-business-oriented language).
              Efter sin eksamen fra Vassar College (B.A., 1928), gik Hopper på Yale University (M.A., 1930; Ph.D., 1934). 
              Hun underviste i matematik på Vassar, før hun kom til Naval Reserve i 1943. 
              Hun blev løjtnant og blev tildelt Bureau of Ordnance's Computation Project ved Harvard University (1944), 
              hvor hun arbejdede på Mark I, den første storstilede automatiske regnemaskine og en forløber for elektroniske computere. 
              Hun skrev den første computermanual, A Manual of Operation for the Automatic Sequence Controlled Calculator (1946), 
              som beskrev, hvordan man betjener Mark I og var den første omfattende behandling af, hvordan man programmerer en computer. 
              Hun forblev på Harvard som civil forsker, mens hun bevarede sin flådekarriere som reservist. Efter at en møl infiltrerede Mark I's kredsløb, 
              opfandt hun udtrykket bug for at henvise til uforklarlige computerfejl.</p>
            <img className="billede" src={GraceHopperImage} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Isabella Drest Rasmussen</h1>
          <div className="indhold">
            <img className="billede" src={AlberteWærens} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre">Louise Barkhuus</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Jeg er professor ved IT-Universitetet (siden juli 2021, lektor fra september 2016), 
             hvor jeg er medlem af Center for Informationssikkerhed og Tillid. Min forskning fokuserer på brugeroplevelser og privatlivsspørgsmål i relation til lokationsbaserede applikationer og sociale medier; 
             Jeg kombinerer studier af sociale mediers praksis med interaktion omkring lokationssensorteknologier for at give bedre viden om, hvordan man designer allestedsnærværende computerteknologier til hverdagens sociale aktiviteter med vægt på privatliv og sikkerhed. 
             Et af mine store projekter (2022-2024) er ReWork under DIREC-rammen; mine kolleger og jeg modtog for nylig en stor bevilling på fire universiteter for at se på fremtiden for hybridarbejde. 
             Jeg modtog også for nylig en bevilling med fokus på privatliv i multikulturelle omgivelser, med kolleger i USA.
              I løbet af 2015 og 2016 var jeg gæsteprofessor ved Cornell Tech. 
              Jeg arbejdede sammen med kolleger i Connective Media-gruppen, hvor jeg også underviste på et kandidatkursus om forskningsmetoder. 
              Jeg samarbejder stadig med forskere om projekter relateret til lokationsbaserede forbindelsesteknologier til urbane sociale praksisser såsom urban navigation såvel som anonyme sociale medier praksis.
              Mellem 2012 og 2016 var jeg lektor ved Stockholm Universitet, Afdelingen for Computer- og Systemvidenskab hvor jeg også var leder af ACT-forskningsenheden. 
              Jeg drev LX Lab for at samle forskere og studerende, der er interesserede i lokationsbaserede medier og lokationsbaserede oplevelser, for eksempel til interaktivt drama og byudforskning.
              På UCSD (2007-2011) var jeg hovedefterforsker på et NSF-finansieret projekt: "Transforming Social Science Virtual Organisations". 
              Jeg studerede de forskellige intellektuelle praksisser inden for samfundsvidenskabelig forskning og samfundsforskeres brug af kommunikationsteknologier. 
              Vi har for nylig udviklet TagPad, et værktøj til at interviewe deltagere og analysere samfundsvidenskabelige studier.
              Mit forskningsområde er menneske-computer interaktion, med særlig vægt på allestedsnærværende databehandling og privatliv.
               Mere specifikt forsøger min forskning at afdække den nye praksis og brugen af avancerede computerteknologier, såsom mobile applikationer og social software i deres oprindelige miljø. 
               Jeg konceptualiserer og udvikler disse teknologier til videre studier, og jeg studerer også eksisterende. Senest har jeg set på mobil brug af sociale medier, hvilket har ført til analyser af privatlivsopfattelse hos brugere af mobile sociale medier.</p>
            <img className="billede" src={LouiseBarkhuus} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Louise Gyland Götschze</h1>
          <div className="indhold">
            <img className="billede" src={AlberteWærens} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div className="historieOrange">
          <h1 className="overskriftHøjre" id={'section1'}>Mary Kenneth Keller</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> I 1965 var Mary Kenneth Keller den første kvinde i USA, der blev tildelt en ph.d. i datalogi, efter at have studeret matematik og fysik. 
              Tidligere havde hun aflagt sine løfter som en romersk-katolsk religiøs søster i Ohio og var i 1958 begyndt at arbejde på Dartmouth College i computercentret (dengang kun for mænd).
              Hos Dartmouth arbejdede Mary på at udvikle BASIC programmeringssproget. 
              BASIC er en måde at oversætte nuller og etaller i computerkode til noget mere intuitivt og ligetil. 
              Det er et programmeringssprog på højt niveau til generelle formål, som hjalp med at udvide computerprogrammering til ikke-matematiske og naturvidenskabelige områder, hvilket efterfølgende gav mange mennesker deres første erfaring med programmering.
              Søster Mary oprettede senere computerafdelingen på Clarke College i Iowa, som hun derefter ledede i tyve år, idet hun blev passioneret omkring potentialet for computere til at øge adgangen til information og fremme uddannelse.
              Hun forestillede sig en verden, hvor computere gjorde folk klogere og forudsagde den informationseksplosion, der ville ske årtier senere. 
              Hendes vision var forud for sin tid.
              Søster Mary arbejdede hårdt for at skabe sin egen unikke vej i livet og var en lidenskabelig fortaler for kvinder inden for databehandling. 
              Computercentret på Clarke College kaldes Keller Computer Center til hendes ære.</p>
            <img className="billede" src={MaryKennethKeller} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Pernille Bjørn</h1>
          <div className="indhold">
            <img className="billede" src={PernilleBjoern} alt=""/>
            <p className="beskrivelseMørk"> Pernille Bjørn er professor på Datalogisk Institut ved Københavns Universitet, hvor hun også er viceinstitutleder for forskning. 
              Hun var den første kvindelige professor på instituttet, da hun blev udnævnt i 2015. 
              Siden har hun arbejdet på at forstå, hvorfor der med tiden er blevet længere og længere mellem kvinderne i datalogi, der ellers oprindelig var et kvindefag.
              I 2016 begyndte Pernille Bjørn at forske i emnet ved siden af sit hovedforskningsområde, Computer Supported Cooperative Work, der handler om, hvordan mennesker samarbejder virtuelt.
              Ud over sit projekt med at løfte datalogihistoriens kvinder frem og give dem behørig credit for deres bidrag til faget, har Pernille Bjørn også arbejdet for at ændre ved den pilskæve kønsbalance på sit institut.
              For fem år siden, næsten samtidig med Pernille Bjørns ansættelse på Datalogisk Institut, var blot otte procent af de nye studerende på Datalogi kvinder. 
              I 2019 var 39 procent af de nye studerende kvinder, mens næsten 20 procent af alle de studerende var kvinder.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre">Plamena Cherneva</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Plamena Cherneva er, som navnet antyder, ikke dansker, men fra Bulgarien. 
              Hun kom til Danmark i år 2010 for at studere Webudvikling på Copenhagen Business Academy og var chokeret over, at hun var den eneste kvinde i klassen med 30 mennesker. 
              Mønstret fortsatte efter studiet, da hun fik et ”frontend developer”-job hos et dansk webbureau med omkring 30 ansatte. 
              Her var hun igen den eneste kvinde, der arbejdede med kodning. De to andre var ansat i marketing.
              Derfor gik Plamena Cherneva sammen med de to kvinder, Maria Hidalgo og Christiane Sanchez, om at stifte non-profit-organisationen Codher, som tilbyder gratis undervisning og sparring for kvinder, der er interesserede i IT og programmering, herunder kodning. 
              Til deres første event i november 2015 dukkede 50 personer op.
              Plamena Cherneva er ikke længere involveret i Codher, men arbejder i dag som business-ingeniør i virksomheden Epi-Use Nordic Og Baltic, hvor app-udvikling er en del af det daglige arbejde. 
              Hun blev først introduceret for kode som 16-17-årig i gymnasiet, da klassen fik besked på at bygge en hjemmeside.</p>
            <img className="billede" src={PlamenaCherneva} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Suki Lee</h1>
          <div className="indhold">
            <img className="billede" src={SukiLee} alt=""/>
            <p className="beskrivelseMørk"> Suki Lee er en banebrydende kvindelig videospiludvikler, softwareingeniør og succesfuld projektleder.
              Hun er uddannet fra San Jose State University med en grad i generel ingeniørvidenskab med mulighed for datalogi. 
              I løbet af sit sidste år interviewede hun Atari på campus og blev tilbudt en stilling som spilprogrammør for at starte lige efter college i august 1981. 
              Suki blev ansat til at skabe pædagogiske spil, og som en førstegenerations immigrant fra Hong Kong, var hun opdraget for at få et godt job, og med hypen om hjemmevideospil på det tidspunkt virkede Atari som et godt valg. 
              Hos Atari var Sukis første spil Math Gran Prix (1982), et pædagogisk spil, hvor spilleren er på en racerbane og skal besvare matematiske spørgsmål korrekt for at komme videre. 
              Hun fortsatte sin spiludviklerkarriere med fokus på licenserede spil f.eks. den sjældne Anders And Speedboat (1983), som kun er udgivet i Brasilien, og Obelix (1983) spillet. 
              For at udvikle disse spil designede og programmerede hun spillet; hun arbejdede også med animationsteamet om historien, grafikken og karaktererne. 
              Dette arbejde gjorde det muligt for hende at besøge Disney-studier og arbejde med animatorerne samt besøge Astrix Og Obelix-studiet i Paris, Frankrig. 
              Her havde hun mulighed for at møde Albert Uderzo.
              Suki forlod Atari i 1984 og gik på arbejde for Cadtrak Corporation, hvor hun udviklede CAD-softwarebrugergrænseflader til oliebehandlingsanlægs layout, og her avancerede hun fra montageprogrammering til Pascal. 
              I 1986 gik arbejdede hun for Apple, fortsatte i 1997 til WebTV, eCircles og derefter Palm. Efter 6 års fravær vendte hun tilbage til Apple. 
              Hos Apple fortsætter hun sit arbejde som en anerkendt og succesfuld projektleder, som blev dygtig til at arbejde med ingeniører og andre projektledere.</p>
          </div>
        </div>

       
      </div>
    );
  }


}
