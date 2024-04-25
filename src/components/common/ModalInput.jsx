import React from 'react'

const ModalInput = ({ labelText, dataType, holder, addId , mindate, referecnce}) => (
  <div>
    <label className='text-gray-700 tracking-wider'>{labelText}</label>
    <br />
    <input type={dataType} placeholder={holder} min={mindate} className="mt-3 mb-4 w-full p-4" id={addId} ref={referecnce}/>
  </div>
)


export default ModalInput