import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? (
        <span>You are Administrator.</span>
      ) : (
        <span>You are not Administrator.</span>
      )}
      <button onClick={onClickSwitch}>Change</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
