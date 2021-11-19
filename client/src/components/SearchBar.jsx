import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import form from "./form.module.css";

export default function SearchBar(){
    const [name, setName] = useState("");

    return(
        <form className={form.form} onChange={(e) => {
            setName(e.target.value)
        }}>
            <input className={form.txtSearch} type="text" placeholder="buscar por nombre"/>
            
            <Link to={`/${name}`}><input className={form.btnSearch} type="button" value="buscar"/></Link>
        </form>
    )
}