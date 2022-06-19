import { useState } from "react";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import { Button, Heading, Text, Textarea } from "@chakra-ui/react";
import { AuthState } from "../AuthContext";
import { db, colRef } from "../firebase";

const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const { user } = AuthState();

  // console.log(user);

  const handleChange = (e) => {
    let writtenMessage = e.target.value;
    setMessage(writtenMessage);
  };

  const handleClick = () => {
    console.log(message);

    // addDoc(collection(colRef, "bday-messages"), {
    //   author: user.displayName,
    //   message: message,
    // });

    addDoc(colRef, {
      author: user.displayName,
      message: message,
    });
  };

  return (
    <>
      {user ? (
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
            <Button colorScheme="blue" onClick={handleClick}>
              Plaats je bericht
            </Button>
          </div>
        </main>
      ) : (
        <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-300 text-black lg:justify-center">
          <div className="p-4 text-center lg:mx-48">
            <Text>
              Oh oh... je moet ingelogd zijn om deze pagina te kunnen bekijken.
            </Text>

            <div className="p-4"></div>

            <Link href="/">
              <Button colorScheme="blue">Ga terug naar de homepagina</Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default WriteMessage;
