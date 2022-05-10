import React, { Component } from 'react';
import fællesBillede from './images/OmOs/FællesBillede.png'
import isabella from './images/OmOs/isabella.png'
import louise from './images/OmOs/louise.png'
import alberte from './images/OmOs/alberte.png'
import Animation_5 from './Animation/Animation_5';



import './OmOs.css';

export class OmOs extends Component {
    static displayName = OmOs.name;
  
    
    render() {
      return (
            <div>
                <div className="overskriftdiv" >
                <secText className="overskrift">Om os</secText>
                <img className="fællesBillede" src={fællesBillede} alt=""/>
            </div>
            
            
        <div className="historieOrange">
          <h1 className="overskriftHøjre">Vores Mission</h1>
          <p className="midterTekst">Velkommen til LadyBugs!</p>
          <div className="indhold">
            <p className="beskrivelseLys"> 
            <p>Der i dag en stor overvægt af mænd på både de tekniske uddannelse og på 
            arbejdsmarkedet indenfor IT.  Der ligger flere grunde til dette, og en 
            primær grund ligger i stereotypen omkring programmering og software. 
            Denne stereotyp fører til at kvinder ikke føler sig tilaps i dette miljø 
            og mangel på selvtillid, hvis ikke de opfylder stereotypen. Et problem ligger 
            også i udvidenheden omkring programmering og IT, der giver et fordrejet billede 
            af hvad programmering og IT egentlig er.</p>
            
            <p>Vores mission er derfor at åbne verden indenfor programmering, IT og software op for kvinder, 
            og vise at det hverken er skræmmende, nørdet eller en kun en “Boys Club”.</p>
            
            <p>Derfor har du, her hos os, muligheden for at læse mere om programmering 
            og de forskellige karriere muligheder der er indenfor IT og software. 
            Du kan også læse om forskellige kvinder der har arbejdet eller uddannet sig indenfor IT, 
            og forhåbentlig blive inspireret. Vi mener det er vigtigt at man prøver en smule programmering, 
            for bedst at forstå hvad programmering handler om, og derfor har du også her muligheden 
            for at prøve kræfter med det selv. Vi har samlet en række små opgaver, som forhåbentlig kan 
            kabe en interesse for programmering hos dig.</p>
            
            <p>Vi håber på at hjælpe, primært unge kvinder, til at få en interesse indenfor IT og programmering, 
            da vi synes det er vigtigt at få flere kvinder ind i IT branchen. Meget af vores fremtid afhænger 
            af teknologien og softwaren, og vi ønsker at den bliver skabt at lige store dele mænd og kvinder 
            - da fremtiden er for os alle sammen.</p>
            </p>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Hvem er vi?</h1>
          <div className="indhold">
            <p className="beskrivelseMørk">  
            <p>Vi er 3 kvinder i midt 20’erne, som lærte at kende hinanden da vi i sommeren 2019 startede på en 
              bachelor i Softwareudvikling på IT-universitet i København. Vi havde alle 3 aldrig prøvet at programmere 
              før og startede på uddannelsen helt grønne og lettere uvidende omkring hvad programmering i bund og grund er.</p>
            
            <p>Vi har oplevet at der er en overvægt af drenge i denne branche, og det ønsker vi at ændre på. Vi har derfor lavet denne side, 
              hvor vi ønsker at introducerer dig for programmering, på en feminin og venlig måde. Vi har haft stor glæde af hinanden 
              og har hjulpet hinanden igennem uddannelse, og vi er sikre på at det kun vil være til endnu større gavn at få flere kvinder ind.</p>
            </p>
            </div>
            <Animation_5/>
           {/* <div className="omOsSamlet">
              <div className="omOsSeperat">
              <img className="personligtBillede" src={isabella} alt=""/>
              <p className="omOsTekst">Isabella Drest, 22 år</p>
              </div>

              <div className="omOsSeperat">
              <img className="personligtBillede" src={alberte} alt=""/>
              <p className="omOsTekst">Alberte Wærens, 23 år</p>
              </div>

              <div className="omOsSeperat">
              <img className="personligtBillede" src={louise} alt=""/>
              <p className="omOsTekst">Louise Götschze, 25 år</p>
              </div>

              
      </div>*/}
          </div>
        </div>

           
      );
    }
}