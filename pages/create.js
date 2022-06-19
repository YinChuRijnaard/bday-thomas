import { useState } from "react";
import { Button, Heading, Textarea } from "@chakra-ui/react";

import { AuthState } from "../AuthContext";

const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const { user } = AuthState();

  // console.log(user);

  const handleChange = (e) => {
    let writtenMessage = e.target.value;
    setMessage(writtenMessage);
  };

  return (
    <main className="flex h-screen w-screen flex-col bg-gray-300 text-black lg:justify-center">
      <div className="p-4 lg:hidden"></div>

      <div className="p-4 text-center lg:mx-48">
        <Heading>Hey, {user.displayName}! 👋</Heading>
      </div>

      <div className="p-4"></div>

      <div className="mx-4 lg:mx-48">
        <Textarea
          value={message}
          onChange={handleChange}
          placeholder="Schrijf je bericht..."
          focusBorderColor="blue.500"
        />
      </div>

      <div className="p-4"></div>

      <div className="flex justify-center">
        <Button colorScheme="blue">Plaats je bericht</Button>
      </div>
    </main>
  );
};

export default WriteMessage;
