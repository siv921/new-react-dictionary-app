import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
  
    return( <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <div className="Definition">{props.meaning.definition} <br />
                 <small className="fst-italic">{props.meaning.example}</small></div>
                <div>
                    <Synonyms synonyms={props.meaning.synonyms} />
                </div>
                
            </div>);
}