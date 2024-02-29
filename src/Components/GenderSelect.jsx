// src/components/GenderSelect.js
import React from 'react';

const GenderSelect = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <input className='h-5'
          type="radio"
          value="male"
          checked={value === 'male'}
          onChange={onChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={value === 'female'}
          onChange={onChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="others"
          checked={value === 'others'}
          onChange={onChange}
        />
        Other
      </label>
    </div>
  );
};

export default GenderSelect;