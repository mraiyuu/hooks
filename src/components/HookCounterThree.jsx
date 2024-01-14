import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value })}
          className="border border-gray-500"
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value })}
          className="border border-gray-500"
        />
        <h1>What is your first name - {name.firstName}</h1>
        <h1>What is your last name - {name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
      </form>
    </div>
  );
};

export default HookCounterThree;
