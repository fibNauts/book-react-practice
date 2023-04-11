import { useContext } from "react";

import { AdminFlagContext } from "./providers/AdminFlagProvider";
import { Card } from "./components/Card";



export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? (
        <span>You are Administrator.</span>
      ) : (
        <span>You are not Administrator.</span>
      )}
      <button onClick={onClickSwitch}>Change</button>
      <Card />
    </div>
  );
};
