import { useEffect, useState } from "react"
import "../styles/Type.css"
import "../styles/Home.css"
import { Link } from "react-router-dom"
export default function TypeCard(){
const API_URL = 'https://pokeapi.co/api/v2/'

const [type, setType] = useState([])

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript


    const getType = async () => {
        try{
        const response = await fetch(`${API_URL}type/`)
        const data = await response.json()
        setType(data.results)
        } catch (error) {
            console.error("Error fetching type", error)
            }   
        }

    useEffect(() => {
        getType()
    }, [])

    return(
        <>
            <section className="Types">
            {type?.slice(0, 18).map((type, index) => (
                <Link key={index} to={`/${type.name}`} className={`type-card ${type.name}`}>
                <h3>{capitalizeFirstLetter(type.name)}</h3>
                </Link>
            ))}
            </section>
        </>
    )
}