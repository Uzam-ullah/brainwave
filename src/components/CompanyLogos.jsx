import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping People Create Beautiful Content at</h5>
        <ul className='flex'>
            {companyLogos.map((logo, index) =>(
                <li className="flex justify-center items-center flex-1 h-[8.5rem] " key={index}>
                    <img 
                     src={logo}
                     height={28}
                     width={134}
                     alt={logo}
                    />
                </li>

            ))}

        </ul>
         </div>
  )
}

export default CompanyLogos