import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Facture = () => {
    const [fact,setFact] = useState(
        {
            "numfact":100,
            "datefact":"06/03/2024",
            "mtfact":2000
        }
    )
    const handleChange=()=>{
        setFact({...fact,mtfact:3000})
    }
  return (
    <div>
        <div className='im'>
          <p>Facture Numéro : {fact.numfact}</p>
          <p>Date Facture : {fact.datefact}</p>
          <p>Montant Facture : {fact.mtfact}</p>
        </div>
        <Button variant="primary" onClick={()=> handleChange()}>Primary</Button>
    </div>

  )
  
}

export default Facture
