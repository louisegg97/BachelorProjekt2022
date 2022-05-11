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
            <p>Der er og har altid været en stor overvægt af mænd på både de tekniske uddannelser og på 
            arbejdsmarkedet indenfor IT.  Der ligger flere ting til grunde for til dette, men en stor del 
            af forklaringen er den stereotype opfattelse af programmering og software, som betyder, at kvinder 
            ikke føler sig tilpas i dette miljø og kæmper med 
            mangel på selvtillid, hvis de ikke lever op til stereotypen. Problemet er
            også udvidenheden omkring programmering og IT, der giver et skævt billede 
            af, hvad programmering og IT egentlig er.</p>
            
            <p>Vores mission er derfor at åbne programmerings-, IT-og software-verdenen op for kvinder, 
            og vise, at det hverken er skræmmende, nørdet eller en “Boys Only Club”.</p>
            
            <p>Derfor kan du her hos os, muligheden for at læse mere om programmering 
            og de forskellige karrieremuligheder, der er indenfor IT og software. 
            Du kan også læse om forskellige kvinder, der har arbejdet eller uddannet sig inden for IT, 
            og forhåbentlig blive inspireret. Vi mener, det er vigtigt, at man prøver at programmere lidt 
            for bedre at kunne forstå, hvad programmering handler om, og derfor har du også her muligheden 
            for at prøve kræfter med det selv. Vi har samlet en række små opgaver, som forhåbentlig kan 
            skabe en interesse for programmering hos dig.</p>
            
            <p>Vi håber på at bidrage til, at især unge kvinder får interesse for IT og programmering, 
            da vi synes, det er vigtigt at få flere kvinder ind i IT-branchen. Meget af vores fremtid afhænger 
            af teknologi og software, og vi ønsker, at den bliver udviklet af lige store dele mænd og kvinder 
            - da fremtiden er for os alle sammen.</p>
            </p>
          </div>
        </div>

        <div className="historieLys">
          <h1 className="overskriftVenstre">Hvem er vi?</h1>
          <div className="indhold">
            <p className="beskrivelseMørk">  
            <p>Vi er tre kvinder i 20’erne, som lærte hinanden at kende, da vi i sommeren 2019 startede på en 
              bachelor i Softwareudvikling på IT-universitetet i København. Ingen af os havde prøvet at programmere 
              før, og vi startede på uddannelsen helt grønne og lettere uvidende om, hvad programmering i bund og grund er.</p>
            
            <p>Vi har oplevet, at der er en overvægt af mænd i denne branche, og det ønsker vi at ændre på. Vi har derfor lavet denne side, 
              hvor vi ønsker at introducerer dig for programmering, på en feminin og venlig måde. Vi har haft stor glæde af hinanden 
              og har hjulpet hinanden igennem uddannelsen, og vi er sikre på, at det kun vil være til endnu større gavn at få flere kvinder ind.</p>
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