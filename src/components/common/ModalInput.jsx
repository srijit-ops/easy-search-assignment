import React from "react";

const ModalInput = ({
  labelText,
  dataType,
  holder,
  addId,
  mindate,
  referecnce,
}) => (
  <div>
    <label className="text-gray-700 tracking-wider">{labelText}</label>
    <br />
    <input
      type={dataType}
      placeholder={holder}
      min={mindate}
      id={addId}
      ref={referecnce}
      className="mt-3 mb-4 w-full px-4 py-3 border border-gray-950"
    />
  </div>
);

export default ModalInput;
