import React, { useState } from "react";

function TickBoxLogin(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    props.onCheckboxChange(newValue);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Are you an agent?
      </label>
    </div>
  );
}

export default TickBoxLogin;