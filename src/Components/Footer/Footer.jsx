import { useLocation } from 'react-router-dom'
import style from './Footer.module.css'

export function Footer(){
    const location = useLocation()

    if (location.pathname !== "/"){
        return null
    }
    
    return(
        <div className={style.footer}>
           <p>@CarMarket 2024. Developer - Denis Hubenko</p>
        </div>
    )
}