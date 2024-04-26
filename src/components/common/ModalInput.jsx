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
      className="mt-3 mb-4 w-full p-4"
    />
  </div>
);

export default ModalInput;
