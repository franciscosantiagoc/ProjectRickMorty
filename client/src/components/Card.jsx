import card from "./card.module.css";

export default function Card({name, status, species, gender, image, episode}){
    return(
        <div className={card.card}>
            <div className="top">
                <img className={card.photo} src={image}/>
                <h2 className={card.name}>{name}</h2>
                <span className={card.species}>{species}</span>
            </div>
            
            <div className="bot">
                <div className={card.status + " " + card[status]}></div> <span>{status}</span>
                <br/>
                <span className={card.gender}>gender: {gender}</span>
                <br/>
                <span className={card.episode}>episode: {episode.map(e => e + ", ")}</span>
            </div>
        </div>
    )
}