import React from 'react'
import './style.css'
export const Client = () => {
    const [nom,setNom] = React.useState('ESPS')
    const [ville,setVille] = React.useState('VILLE')
    const [adress,setAdress] = React.useState('ADRESS')
  const modifier = () => {
    setNom('DRT')
    setVille('TUNIS')   
    setAdress('TUNISIE')
  }
    return (
    <div>
    <h1>le nom est : {nom}</h1>
    <h1>la ville est : {ville}</h1>
    <h1>l'adresse est : {adress}</h1>
    <button onClick={ ()=> modifier ()}>modifier</button>
    </div>
  )

}
