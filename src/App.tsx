import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleClose = () => {
    setAlertVisibility(false);
  };
  return (
    <>
      {alertVisible && (
        <div>
          <Alert onClose={handleClose}>Hello World</Alert>
        </div>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </>
  );
}

export default App;
