import Header from "./Header";

export default function Pokemon({pokemonName}){
    return(
        <>
            <Header />
            <h2>{pokemonName}</h2>
        </>
    )
}