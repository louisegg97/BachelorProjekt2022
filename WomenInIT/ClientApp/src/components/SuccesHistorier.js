import React, { Component } from 'react';
import './SuccesHistorier.css';
import AdaLovelace from './images/SuccesHistorier/AdaLovelace.jpg';
import AlberteWærens from './images/SuccesHistorier/alberteWærens.png';
import CarlaMeninsky from './images/SuccesHistorier/CarlaMeninsky.png';
import DonaBailey from './images/SuccesHistorier/DonaBailey.jpg';
import GraceHopperImage from './images/SuccesHistorier/graceHopper.jpg';
import LouiseBarkhuus from './images/SuccesHistorier/LouiseBarkhuus.png';
import MaryKennethKeller from './images/SuccesHistorier/MaryKennethKeller.png';
import PernilleBjoern from './images/SuccesHistorier/PernilleBjoern.jpg'
import PlamenaCherneva from './images/SuccesHistorier/PlamenaCherneva.jpg'
import SukiLee from './images/SuccesHistorier/SukiLee.jpg'
import IsabellaDrest from './images/SuccesHistorier/IsabellaDrest.jpg'
import LouiseGotschze from './images/SuccesHistorier/LouiseGotschze.png'
import LouiseSparf from './images/SuccesHistorier/LouiseSparf.jpeg'



export class SuccesHistorier extends Component {
  static displayName = SuccesHistorier.name;
  
  componentDidMount() {
    window.scrollTo(0, 0);
  } 
  
  render() {
    return (
      <div>
        <secText className="overskrift">Succes historier</secText>
        <div className="topDivSuccesHistorie">
          <secText className="introText">Der er mange seje kvinder i IT-branchen! Her kan du blive klogere på nogle af dem, og høre deres historier</secText>
          
          <a href="SuccesHistorier/#AlberteKjær"><div className="billede1Div">
          <img className="billede1" src={AlberteWærens} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#AlberteKjær">Alberte Kjær Wærens</a>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#CarlaMeninsky"><div className="billede2Div">
          <img className="billede2" src={CarlaMeninsky} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#CarlaMeninsky">Carla Meninsky</a>
              <div class="skjultText">Ingeniør, softwareudvikler og advokat</div>
              </div>
          </div></a>
          
          
          <a href="SuccesHistorier/#LouiseBarkhuus"><div className="billede3Div">
          <img className="billede3" src={LouiseBarkhuus} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#LouiseBarkhuus">Louise Barkhuus</a>
              <div class="skjultText">Professor ved IT-Universitetet</div>
              </div>
          </div></a>



          <a href="SuccesHistorier/#DonaBailey"><div className="billede1Div">
          <img className="billede1" src={DonaBailey} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#DonaBailey">Dona Bailey</a>
              <div class="skjultText">Programmør</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#AdaLovelace"><div className="billede2Div">
          <img className="billede2" src={AdaLovelace} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#AdaLovelace">Ada Lovelace</a>
              <div class="skjultText">Verdens første computerprogrammør</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#GraceHopper"><div className="billede3Div">
          <img className="billede3" src={GraceHopperImage} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift"href="SuccesHistorier/#GraceHopper">Grace Hopper</a>
              <div class="skjultText">Softwareingeiør for Militæret</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#MaryKenneth"><div className="billede1Div">
          <img className="billede1" src={MaryKennethKeller} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#MaryKenneth">Mary Kennet hKeller</a>
              <div class="skjultText">Ph.d. i datalogi</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#PernilleBjørn"><div className="billede2Div">
          <img className="billede2" src={PernilleBjoern} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#PernilleBjørn">Pernille Bjørn</a>
              <div class="skjultText">Professor på Datalogisk Institut</div>
              </div>
          </div></a>


          <a href="SuccesHistorier/#LouiseGyland"><div className="billede3Div">
          <img className="billede3" src={LouiseGotschze} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#LouiseGyland">Louise Gyland Götschze</a>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#SukiLee"><div className="billede1Div">
          <img className="billede1" src={SukiLee} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/">Suki Lee</a>
              <div class="skjultText">Videospiludvikler, softwareingeniør og projektleder</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#IsabellaDrest"><div className="billede2Div">
          <img className="billede2" src={IsabellaDrest} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#IsabellaDrest">Isabella Drest</a>
              <div class="skjultText">Studerende på Softwareudvikling på ITU</div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#LouiseSparf"><div className="billede3Div" >
          <img className="billede3" src={LouiseSparf} alt=""/>
            <div className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#LouiseSparf">Louise Sparf</a>
              <div class="skjultText">bestyrelsesmedlem og ledelsesrådgiver </div>
              </div>
          </div></a>

          <a href="SuccesHistorier/#PernilleBjørn"><div className="billede2Div">
          <img className="billede2" src={PlamenaCherneva} alt=""/>
            <div  className="skjultTextDiv">
              <a class="skjultTextOverskrift" href="SuccesHistorier/#PernilleBjørn">Plamena Cherneva</a>
              <div class="skjultText">business-ingeniør og app-udvikler</div>
              </div>
          </div></a>

        </div>
 
        <div className="historieOrange">
          <h1 className="overskriftHøjre" id="AdaLovelace">Ada Lovelace</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Ada Lovelace er blevet kaldt verdens første computerprogrammør. 
              Det hun gjorde, var at skrive verdens første maskin-algoritme til en tidlig computermaskine, der kun eksisterede på papir, en computer der altså endnu ikke fandtes. 
              Selvfølgelig skulle nogen være den første, men Lovelace var en kvinde, og det var i 1840'erne, hvilket var meget uhørt. 
              Ada var kun teenager, da hun mødte Cambridge matematikprofessor Charles Babbage, som havde opfundet "Difference Engine", en mekanisk computer designet til at producere matematiske tabeller automatisk og fejlfrit. 
              Babbage byggede aldrig selve maskinen på grund af personlige tilbageslag og finansieringsproblemer.
              Babbage var imponeret over den geniale unge kvinde, og de korresponderede i årevis og diskuterede matematik og computere, mens han udviklede den analytiske motor. 
              I 1842 holdt Babbage en forelæsning om motoren ved universitetet i Torino. Ada, nu kendt som Grevinde af Lovelace, fik til opgave at oversætte transskriptionen til engelsk. 
              Lovelace føjede sine egne noter til foredraget, som endte med at være tre gange så langt som selve transskriptionen. Den blev udgivet i 1843.
              Lovelaces notater gjorde det klart, at hun forstod den analytiske motor lige så godt som Babbage selv. 
              Desuden forstod hun, hvordan man fik den til at gøre de ting, computere gør. Hun foreslog datainput, der ville programmere maskinen til at beregne Bernoulli-tal, som nu betragtes som det første computerprogram i verden. 
              Men mere end det, Lovelace var visionær: Hun forstod, at tal kunne bruges til at repræsentere mere end blot mængder, og at en maskine, der kunne manipulere tal, kunne bruges til at manipulere data repræsenteret ved tal.
              Hun forudsagde, at maskiner som den analytiske motor kunne bruges til at komponere musik, producere grafik og være nyttige for videnskaben. Som vi nu ved, skete alt dette, men selvfølgelig ikke før 100 år senere.
              Babbage var så imponeret over Lovelaces bidrag, at han døbte hende "The Enchantress of Numbers".</p>
            <img className="succesfuldeKvinderBillede" src={AdaLovelace} alt=""/>
          </div>
        </div>
      
        <div className="historieLys">
          <h1 className="overskriftVenstre" id="AlberteKjær">Alberte Kjær Wærens</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={AlberteWærens} alt=""/>
            <p className="beskrivelseMørk"> Alberte Kjær Wærens læser software udvikling på IT-universitetet i København, 
            hun er på sit 6. semester. Hun havde ikke prøvet at programmere før hun startede, men har siden folkeskolen været glad for matematik og for at løse matematiske problemer. 
            Da hun startede på gymnasiet var der én dag i 2.G, hvor man kunne prøve kræfter med forskellige valgfag. 
            Her endte hendes klasse med at skulle programmere et lille spil. 
            Det var første gang hun havde prøvet kræfter med programmering og en lille interesse blev vakt. 
            Da det så i 3.G blev tid til den årlige dag, hvor repræsentanter fra samtlige videregående uddannelser besøgte gymnasiet, var der selvfølgelig også en repræsentant fra ITU, mere specifikt software udvikling. 
            Her gik det op for Alberte, hvad en uddannelse indenfor programmering kunne føre til, og hvordan det var meget mere end bare et nørdet fag for drenge der har gamet meget. 
            I gennem sine studier på software udvikling har hun lært at programmere indenfor samtlige aspekter af IT-verdenen, men ikke mindst også hvordan man fungere i en gruppe, hvor medlemmerne har forskellig erfaring og baggrund inden for IT. 
            En viden og nogle redskaber hun kan tage med og bruge når hun bliver færdig med sin uddannelse og skal ud på arbejdsmarkedet.          
            </p>
            </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre" id="CarlaMeninsky">Carla Meninsky</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Carla Meninsky er en banebrydende ingeniør, softwareudvikler og advokat. 
            Selvom hun begyndte på universitetet med hovedfag i matematik, endte hun med en grad i psykologi med speciale i visuel perception fra Stanford University i 1977. 
            Med sine lige så fremragende matematik- og kunstfærdigheder og en interesse for computeriseret animation blev hun spiludvikler, der arbejdede for Atari i 1979, hvor hun designede, 
            programmerede og skabte Warlords (1982) og Dodge'em (1980) (hun lavede også senere en specialiseret version af Dodge'em til Mercedes Benz). 
            Hun var en del af det hold, der skabte Star Raiders til Atari 2600. 
            Efter Atari fortsatte hun sit arbejde med spil ved at skabe de tidlige værktøjer til avanceret computergrafik, der beskæftiger sig med belysning, teksturer, overflader, 3D-gengivelse og 3D-effekter. 
            I denne periode arbejdede hun for bl.a. Activision, Cadlink, Wei Tek og Sun Microsystems. Senere gik hun over til hardwarearkitekturdesign, og i 1995 startede hun sit eget firma som entrepreneur. 
            Dette gav hende større frihed til at vælge interessante og udfordrende opgaver og hendes kompetencer og ekspertise var meget efterspurgte, f.eks. EA, 3Dfx, Sony/Cirrus Logic. 
            I 2004 dimitterede hun fra jurastudiet og har siden da arbejdet som advokat.</p>
            <img className="succesfuldeKvinderBillede" src={CarlaMeninsky} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre" id="DonaBailey">Dona Bailey</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={DonaBailey} alt=""/>
            <p className="beskrivelseMørk"> Dona Bailey var den første kvindelige programmør i coin-op afdelingen hos Atari, da hun blev ansat i 1980. 
              I sin første opgave var hun programmør på et fire-personers hold for det succesrige Atari arkadespil "Centipede".
              Hun blev først indført i computerprogrammering gennem UALRs psykologiafdeling, da psykologiforskningsstudier bruger statistisk analyse til hypotesetestning. 
              Hun lærte først SAS-programmering, som stadig var afhængig af hulkort på det tidspunkt på hendes campus.
              Senere i matematikafdelingen på sine kandidatstudier lærte hun Fortran, og hun var på det tidspunkt glad for at have adgang til at skrive på computerterminaler i stedet for at bruge hulkort til at skrive kode. 
              På overbygningen var Bailey glad for at opdage, at kandidatstuderende fik lov til at køre computeren til at teste programmer ved hjælp af eksperimentelle datasæt på ugentlig basis sammenlignet med én gang pr. semester under hendes bachelorarbejde.
              Da hun første gang blev udsat for programmering, forstod hun straks ligheden mellem at skrive kode og at skrive prosa ved hjælp af ord og sprog. 
              "Maskinen analyserer, hvad man skriver i et program, og derfor skal syntaksen og kodningen være på det rigtige sted, i den rigtige rækkefølge. 
              Når du programmerer et computersprog, skal alle elementerne bruges perfekt, ellers vil koden ikke fungere korrekt. 
              Computerprogrammering er meget velordnet, og mulighederne er mere snævre, mere begrænsede, når du skriver kode, end når du skriver prosa med sprog og ord.”
              Dona Bailey blev ansat af General Motors (GM) i Goleta, Californien efter et års ph.d. studier, og der blev hun introduceret for 6502 assembly-sprogprogrammering, 
              mens hun lærte at bruge en mikroprocessor og sensorer til at styre motorens funktioner i bilfremstilling. Mens Dona Bailey arbejdede hos GM, havde hun sin første oplevelse med at spille et arkade-spil, Space Invaders. 
              Hun kunne straks se, at den visuelle visning af spillet lignede hendes arbejde på GM-bilskærme, og hun tænkte: "Jeg kan ikke arbejde med biler for evigt, og det ville være meget sjovere at arbejde med spil."
              Kun lidt over en måned, efter hun var flyttet til General Motors begyndte hun at arbejde hos Atari. Det var i juni 1980.
              I 1982 forlod Dona Bailey Atari for at arbejde for Videa, et videospilfirma grundlagt af tre tidligere Atari-ansatte, som hun havde arbejdet med i sit første år hos Atari. 
              Videa blev købt i 1983 af Nolan Bushnell, som tidligere havde grundlagt Atari, og på det tidspunkt blev virksomheden til Sente. Bailey forlod videospilindustrien i 1984.
              I 1997 flyttede hun til Arkansas. Fra 2008 underviste hun som fakultetsmedlem i afdelingen for retorik og litteraturhistorie ved University of Arkansas i Little Rock, indtil hun gik på pension. 
              I øjeblikket arbejder Bailey på et manuskript baseret på hendes erfaringer med at programmere Centipede hos Atari.</p>
          </div>
        </div>

        <div className="historieOrange">
          <h1 className="overskriftHøjre" id="GraceHopper">Grace Hopper</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Grace Murray Hopper, født Grace Brewster Murray, (født 9. december 1906, New York, U.S.A-død 1. januar 1992, Arlington, Virginia), 
              var en amerikansk matematiker og kontreadmiral i den amerikanske flåde. Hun var en pioner inden for udvikling af computerteknologi, og hjalp med at udvikle UNIVAC I, 
              den første kommercielle elektroniske computer, og flådeapplikationer til COBOL (common-business-oriented language).
              Efter sin eksamen fra Vassar College (B.A., 1928), gik Hopper på Yale University (M.A., 1930; Ph.D., 1934). 
              Hun underviste i matematik på Vassar, før hun kom til Naval Reserve i 1943. 
              Hun blev løjtnant og blev tildelt Bureau of Ordnance's Computation Project ved Harvard University (1944), 
              hvor hun arbejdede på Mark I, den første storstilede automatiske regnemaskine og en forløber for elektroniske computere. 
              Hun skrev den første computermanual, "A Manual of Operation for the Automatic Sequence Controlled Calculator" (1946), 
              som beskriver, hvordan man betjener Mark I og var den første omfattende behandling af, hvordan man programmerer en computer. 
              Hun forblev på Harvard som civil forsker, mens hun bevarede sin flådekarriere som reserveofficer. Efter at et møl infiltrerede Mark I's kredsløb, 
              opfandt hun udtrykket "bug" som henvsining il uforklarlige computerfejl.</p>
            <img className="succesfuldeKvinderBillede" src={GraceHopperImage} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre" id="IsabellaDrest">Isabella Drest</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={IsabellaDrest} alt=""/>
            <p className="beskrivelseMørk"> Isabella læser på ITU til en bachelor i Softwareudvikling og er igang med 6. semester. 
            På uddannelsen har der været stort fokus på programmering, gruppearbejde, arbejde med virksomheder og design. 
            Hun har været interesseret i alle delene, og har nydt af at denne uddannelse kan kombinere dem alle. 
            Ligeledes har hun stort fokus på at tiltrække flere kvinder til programmeringsverdenen, og håber på at kunne bringe denne vision videre gennem uddannelse og karriere. 
            Isabella havde aldrig programmeret før hun startede på universitetet, og det var en helt ny verden. 
            Interessen kom under hendes sabbatår, hvor hun boede i Paris. 
            Hun havde altid nydt at være kreativ, og troede i lang tid, at hun skulle gå den vej med en uddannelse i design. 
            Hun har også altid været glad for matematik og fandt ud af at ligeså vel som hun ønskede at kunne arbejde kreativt, ville hun gerne have noget logisk og matematisk tankegang i sin hverdag. 
            Derfor fandt hun forskellige uddannelse indenfor computerteknologi og programmering, hvor hun deltog i diverse åbent hus-arrangementer og it-camps, og fandt ud af, at man her kan kombinere det kreative med det logiske. 
            Hun er nu ved at færdiggøre sin bachelor, og har søgt ind på en kandidat i Datalogi. 
            Hun håber på en dag at komme til at arbejde med software indenfor bilindustrien og måske en dag indenfor Formel 1.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre" id="LouiseBarkhuus">Louise Barkhuus</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Louise Barkhuus er professor ved IT-Universitetet (siden juli 2021, lektor fra september 2016), 
             hvor hun er medlem af Center for Informationssikkerhed og Tillid. Hendes forskning fokuserer på brugeroplevelser og privatlivsspørgsmål i relation til lokationsbaserede applikationer og sociale medier, 
             Hun kombinerer studier af sociale mediers praksis med interaktion omkring lokationssensorteknologier for at give bedre viden om, hvordan man designer allestedsnærværende computerteknologier til hverdagens sociale aktiviteter med vægt på privatliv og sikkerhed. 
             Et af hendes store projekter (2022-2024) er ReWork under DIREC-rammen. Hendes kolleger og hun modtog for nylig en stor bevilling på fire universiteter for at se på fremtiden for hybridarbejde. 
             Louise Barkhuus modtog også for nylig en bevilling med fokus på privatliv i multikulturelle omgivelser, med kolleger i USA.
              I 2015 og 2016 var hun gæsteprofessor ved Cornell Tech. 
              Hun arbejdede sammen med kolleger i Connective Media-gruppen, hvor hun også underviste på et kandidatkursus om forskningsmetoder. 
              Hun samarbejder stadig med forskere om projekter relateret til lokationsbaserede forbindelsesteknologier til urbane sociale praksisser såsom urban navigation såvel som anonyme sociale medier praksis.
              Fra 2012 til 2016 var hun lektor ved Stockholms Universitet, på afdelingen for Computer- og Systemvidenskab, hvor hun også var leder af ACT-forskningsenheden. 
              Hun drev LX Lab for at samle forskere og studerende, der er interesserede i lokationsbaserede medier og lokationsbaserede oplevelser, for eksempel til interaktivt drama og byudforskning.
              På UCSD (2007-2011) var hun hovedforsker på et NSF-finansieret projekt: "Transforming Social Science Virtual Organisations". 
              Hun studerede de forskellige intellektuelle praksisser inden for samfundsvidenskabelig forskning og samfundsforskeres brug af kommunikationsteknologier. 
              De har for nylig udviklet TagPad, et værktøj til at interviewe deltagere og analysere samfundsvidenskabelige studier med.
              Hendes forskningsområde er menneske-computer interaktion, med særlig vægt på allestedsnærværende databehandling og privatliv.
               Mere specifikt forsøger hendes forskning at afdække den nye praksis og brugen af avancerede computerteknologier, såsom mobile applikationer og social software i deres oprindelige miljø. 
               Hun konceptualiserer og udvikler disse teknologier til videre studier, og hun studerer også eksisterende teknologier. Senest har hun set på mobil brug af sociale medier, hvilket har ført til analyser af privatlivsopfattelse hos brugere af mobile sociale medier.</p>
            <img className="LouiseB" src={LouiseBarkhuus} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre" id="LouiseGyland">Louise Gyland Götschze</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={LouiseGotschze} alt=""/>
            <p className="beskrivelseMørk"> Louise Götzsche er igang med at læse softwareudvikling 
            på ITU og er på sit 6.semsester af uddannelsen. Interessen for programmering 
            startede på hendes tidliger uddannelse, “multimediedesign” på Zealand. 
            Multimediedesign er en bred uddannelse, hvor man berører mange forskellige 
            aspekter af digital udvikling. Hun stiftede bekendtskab med kodning da de havde 
            et forløb om hjemmesidedesign, hvor hun igennem dette forløb skulle lære HTML, 
            CSS og JavaScript. Interessen for programmering startede her og hun valgte 
            derfor at søge ind på bacheloren “softwareudvikling” på ITU. 
            Nu er hun ved at færdiggøre sin bachelor og skal begynde på kandidaten “datalogi” 
            også på ITU, som er en af de overbygninger til softwareudvikling, man kan vælge. 
            Hun arbejder i GroupM som creatives and conversion assistent, hvor hun håber at 
            kunne blive fuldtidsansat, når hun er færdiguddannet.</p>
          </div>
        </div>

        <div className="historieOrange">
          <h1 className="overskriftHøjre" id="MaryKenneth">Mary Kenneth Keller</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> I 1965 var Mary Kenneth Keller den første kvinde i USA, der fik mulighed for at tage en ph.d. i datalogi, efter at have studeret matematik og fysik. 
              Tidligere havde hun aflagt løfte som nonne i Ohio og i 1958 begyndte hun at arbejde på Dartmouth College i computercentret (som dengang kun var for mænd).
              På Dartmouth arbejdede Mary på at udvikle BASIC-programmeringssproget. 
              BASIC er en måde at oversætte nuller og et-taller i computerkode til noget mere intuitivt og ligetil. 
              Det er et programmeringssprog på højt niveau til generelle formål, og det bidrog til at udvide computerprogrammering til ikke-matematiske og naturvidenskabelige områder, hvilket efterfølgende gav mange mennesker deres første erfaring med programmering.
              Søster Mary oprettede senere computerafdelingen på Clarke College i Iowa, som hun derefter ledede i tyve år, idet hun blev passioneret omkring potentialet for computere til at øge adgangen til information og fremme uddannelse.
              Hun forestillede sig en verden, hvor computere gjorde folk klogere og forudsagde den informationseksplosion, der ville ske årtier senere. 
              Hendes vision var forud for sin tid.
              Søster Mary arbejdede hårdt for at skabe sin egen unikke vej i livet og var en lidenskabelig fortaler for kvinder inden for databehandling. 
              Computercentret på Clarke College kaldes Keller Computer Center til minde om hende.</p>
            <img className="succesfuldeKvinderBillede" src={MaryKennethKeller} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre" id="PernilleBjørn">Pernille Bjørn</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={PernilleBjoern} alt=""/>
            <p className="beskrivelseMørk"> Pernille Bjørn er professor på Datalogisk Institut ved Københavns Universitet, hvor hun også er viceinstitutleder for forskning. 
              Hun var den første kvindelige professor på instituttet, da hun blev udnævnt i 2015. 
              Siden har hun arbejdet på at forstå, hvorfor der med tiden er blevet længere og længere mellem kvinderne i datalogi, der ellers oprindelig var et kvindefag.
              I 2016 begyndte Pernille Bjørn at forske i emnet ved siden af sit hovedforskningsområde, Computer Supported Cooperative Work, der handler om, hvordan mennesker samarbejder virtuelt.
              Ud over sit projekt med at løfte datalogihistoriens kvinder frem og give dem behørig credit for deres bidrag til faget, har Pernille Bjørn også arbejdet for at ændre den skæve kønsbalance på sit institut.
              For fem år siden, næsten samtidig med Pernille Bjørns ansættelse på Datalogisk Institut, var blot otte procent af de nye studerende på Datalogi kvinder. 
              I 2019 var 39 procent af de nye studerende kvinder, mens næsten 20 procent af alle de studerende var kvinder.</p>
          </div>
        </div>

        <div id="id-of-div" className="historiePink">
          <h1 className="overskriftHøjre" id="PlamenaCherneva">Plamena Cherneva</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Plamena Cherneva er fra Bulgarien. 
              Hun kom til Danmark i 2010 for at studere Webudvikling på Copenhagen Business Academy og var chokeret over, at hun var den eneste kvinde på holdet med 30 mennesker. 
              Mønstret fortsatte efter studiet, da hun fik et ”front-end developer”-job hos et dansk webbureau med omkring 30 ansatte. 
              Her var hun igen den eneste kvinde, der arbejdede med kodning. De to andre kvinder der var ansat i frimaet, arbejdede i marketing.
              Plamena Cherneva gik sammen med de to kvinder, Maria Hidalgo og Christiane Sanchez, om at stifte non-profit-organisationen Codher, som tilbyder gratis undervisning og sparring for kvinder, der er interesserede i IT og programmering, herunder kodning. 
              Til deres første event i november 2015 dukkede 50 personer op.
              Plamena Cherneva er ikke længere involveret i Codher, men arbejder i dag som business-ingeniør i virksomheden Epi-Use Nordic Og Baltic, hvor app-udvikling er en del af det daglige arbejde. 
              Hun blev første gang introduceret for kodning som 16-17-årig i gymnasiet, da klassen fik besked på at bygge en hjemmeside.</p>
            <img className="succesfuldeKvinderBillede" src={PlamenaCherneva} alt=""/>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre" id="SukiLee">Suki Lee</h1>
          <div className="indhold">
            <img className="succesfuldeKvinderBillede" src={SukiLee} alt=""/>
            <p className="beskrivelseMørk"> Suki Lee er en banebrydende videospiludvikler, softwareingeniør og succesfuld projektleder.
              Hun er uddannet fra San José State University med en grad i generel ingeniørvidenskab og datalogi. 
              Under sit sidste studieår interviewede hun Atari på campus og blev tilbudt en stilling som spilprogrammør for at starte lige efter college i august 1981. 
              Suki blev ansat til at skabe pædagogiske spil. Som førstegenerations indvandrer fra Hong Kong, var hun opdraget til at få et godt job, og med hypen om hjemmevideospil på det tidspunkt virkede Atari som et godt valg. 
              Hos Atari var Sukis første spil Math Gran Prix (1982), et pædagogisk spil, hvor spilleren er på en racerbane og skal besvare matematiske spørgsmål korrekt for at komme videre. 
              Hun fortsatte sin spiludviklerkarriere med fokus på licenserede spil, som f.eks. den sjældne Anders And Speedboat (1983), som kun er udgivet i Brasilien, og Obelix-spillet (1983). 
              For at udvikle disse spil designede og programmerede hun dem; hun arbejdede også med animationsteamet om historien, grafikken og karaktererne. 
              Dette arbejde gjorde det muligt for hende at besøge Disney-studierne og arbejde med animatorerne samt besøge Astrix og Obelix-studiet i Paris, Frankrig. 
              Suki forlod Atari i 1984 og begyndte at arbejde for Cadtrak Corporation, hvor hun udviklede CAD-softwarebrugergrænseflader til oliebehandlingsanlægs layout, og her avancerede hun fra montageprogrammering til Pascal. 
              I 1986 arbejdede hun for Apple, fortsatte i 1997 til WebTV, eCircles og derefter Palm. Efter 6 år vendte hun tilbage til Apple. 
              Hos Apple fortsætter hun nu sit arbejde som en anerkendt og succesfuld projektleder, der er dygtig til at samarbejde med ingeniører og andre projektledere.</p>
          </div>
        </div>

        <div className="historiePink">
          <h1 className="overskriftHøjre" id="LouiseSparf">Louise Sparf</h1>
          <div className="indhold">
            <p className="beskrivelseLys"> Louise Sparf er bestyrelsesmedlem og ledelsesrådgiver i 
            spændingsfeltet mellem mennesker, tech og samfund.
            Louise er uddannet [cand.it](http://cand.it/) fra ITU i 2007 og har siden arbejdet 
            på at skabe fremdrift, vækst og værdi på det danske arbejdsmarked gennem it og 
            digitalisering. I 2013 blev hun hidtil yngste underdirektør i Skattestyrelsen og 
            som 38-årig blev hun direktør, senere adm.direktør for en 100 mand stor 
            softwareudviklings-virksomhed.
            Siden 2005 har hun arbejdet på at skabe mere diversitet i it-branchen og 
            skubbet på en ny fortælling, hvor programmering, teknik og nørderi, ikke 
            er forbeholdt drengene. Hun mener, at fordomme skal af vejen, så stereotyper 
            ikke spænder ben for piger, der vil en teknisk vej. Det kræver at vi sammen 
            fortæller historien om en dynamisk og spændende branche i rivende vækst. En 
            kreativ branche, hvor det at skabe ny software og nørde teknologi, giver et 
            direkte aftryk på fremtiden, som er spændende, uforudsigelig og eksponentiel, 
            men som mangler diversitet og mangfoldighed. I starten af 00´ere  kodede Louise 
            hjemmesider, men har siden primært arbejdet med tech på strategisk- og 
            ledelsesplan, og i dag arbejder hun med at gentænke og re-designe virksomhedens 
            mindset, strukturer og mekanismer til det moderne højteknologiske arbejdsmarked.</p>
            <img className="succesfuldeKvinderBillede" src={LouiseSparf} alt=""/>
          </div>
        </div>

       
      </div>
    );
  }


}

