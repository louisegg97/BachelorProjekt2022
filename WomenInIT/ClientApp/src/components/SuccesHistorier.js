import React, { Component } from 'react';
import './SuccesHistorier.css';
import EmilieChristensen from './images/SuccesHistorier/emilieChristensen.webp';
import AdaLovelace from './images/SuccesHistorier/AdaLovelace.jpg';
import AlberteWærens from './images/SuccesHistorier/alberteWærens.png';
import CarlaMeninsky from './images/SuccesHistorier/CarlaMeninsky.jpg';
import DonaBailey from './images/SuccesHistorier/DonaBailey.jpg';
import GraceHopperImage from './images/SuccesHistorier/graceHopper.jpg';
import test1 from './images/SuccesHistorier/1.jpg';
import test2 from './images/SuccesHistorier/2.jpg';
import LouiseBarkhuus from './images/SuccesHistorier/LouiseBarkhuus.jpg';
import test4 from './images/SuccesHistorier/4.jpg';


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
          <img className="billede1" src={test1} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>

          <div className="billede2Div">
          <img className="billede2" src={test2} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>
          
          
          <div className="billede3Div">
          <img className="billede3" src={LouiseBarkhuus} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>



          <div className="billede4Div">
          <img className="billede4" src={test4} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>

          <div className="billede6Div">
          <img className="billede6" src={AdaLovelace} alt=""/>
            <div className="skjultTextDiv">
              <div class="skjultTextOverskrift" onClick="overskriftHøjre">Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div>

          <div className="billede7Div">
          <img className="billede7" src={GraceHopperImage} alt=""/>
           
            <div  className="skjultTextDiv">
              <div class="skjultTextOverskrift" >Grace Hopper</div>
              <div class="skjultText">Softwareingeiør for Militæret</div>
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
            <img className="billede" src={EmilieChristensen} alt=""/>
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
            <img className="billede" src={EmilieChristensen} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div className="historieOrange">
          <h1 className="overskriftHøjre" id={'section1'}>Mary Kenneth Keller</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
            <img className="billede" src={GraceHopperImage} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Pernille Bjørn</h1>
          <div className="indhold">
            <img className="billede" src={EmilieChristensen} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre">Plamena Cherneva</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
            <img className="billede" src={AlberteWærens} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Suki Lee</h1>
          <div className="indhold">
            <img className="billede" src={EmilieChristensen} alt=""/>
            <p className="beskrivelseMørk"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis gravida nisl, sit amet rutrum turpis elementum tempus. Sed sodales diam vel molestie consequat. Phasellus vitae sollicitudin eros. Sed ut interdum urna. In tincidunt velit vel ornare venenatis. Etiam nec neque non orci consectetur posuere. Nam non suscipit nibh. Donec venenatis nunc sit amet nunc laoreet mattis. Integer commodo orci dolor, eu faucibus diam sagittis et.
            Vivamus congue lorem dui, sit amet tincidunt leo scelerisque sed. Nullam ac semper lorem. Integer vestibulum auctor dui, quis vestibulum nulla vehicula et. Cras ac lectus est. Fusce aliquam accumsan orci, et cursus dui accumsan quis. Donec aliquam quam sit amet arcu semper, quis luctus massa tincidunt. Curabitur sagittis dui quis arcu imperdiet efficitur. Etiam consequat quam a viverra sollicitudin. Cras sit amet elit tellus. Cras quam lacus, porttitor vitae bibendum id, congue nec magna. Fusce in ligula pellentesque, tempor augue ac, bibendum neque. Sed ut leo in libero pulvinar volutpat. Nulla nibh sem, auctor et condimentum non, ultrices id nibh.
            Aenean ultrices, urna nec dapibus cursus, nisl justo rutrum diam, non aliquet risus nisl rhoncus diam. Nunc sagittis efficitur luctus. Aliquam mi dui, egestas non vestibulum id, sollicitudin non magna. Duis nec dui vel arcu scelerisque posuere at euismod sem. Mauris nisl nunc, lacinia ac nulla at, facilisis pellentesque dolor. Aliquam erat volutpat. Proin a sem nunc.</p>
          </div>
        </div>

       
      </div>
    );
  }


}
