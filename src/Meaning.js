import Synonyms from "./Synonyms";

export default function Meaning(props){
  
    return( <div className="Meaning">
                <h3>{props.meaning.partOfSpeech}</h3>
                <p>{props.meaning.definition} <br />
                 <em>{props.meaning.example}</em></p>
                <div>
                    <Synonyms synonyms={props.meaning.synonyms} />
                </div>
                
            </div>);
}