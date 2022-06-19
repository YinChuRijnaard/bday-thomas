import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { Button, Heading, Text, Textarea } from "@chakra-ui/react";

import { AuthState } from "../AuthContext";
import { db, colRef } from "../firebase";

const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { user } = AuthState();

  // console.log(user);

  const handleChange = (e) => {
    let writtenMessage = e.target.value;
    setMessage(writtenMessage);
  };

  const handleClick = () => {
    addDoc(colRef, {
      author: user.displayName,
      message: message,
    });

    setMessage("");
    setDisabled(!disabled);
    toast.success("Bericht geplaatst!");
  };

  return (
    <>
      {user ? (
        <main className="flex h-screen w-screen flex-col bg-gradient-to-b from-blue-500 via-red-500 to-amber-500 text-white lg:justify-center">
          <div className="p-4 lg:hidden"></div>

          <div className="p-4 text-center lg:mx-96">
            <Heading>Hey, {user.displayName}! 👋</Heading>
          </div>

          <div className="p-4"></div>

          <div className="mx-4 lg:mx-96">
            <Textarea
              value={message}
              onChange={handleChange}
              placeholder="Schrijf je bericht..."
              focusBorderColor="black"
              disabled={disabled}
            />
          </div>

          <div className="p-4"></div>

          <div className="mx-4 flex justify-center text-black lg:mx-96">
            <Button
              colorScheme="gray"
              onClick={handleClick}
              disabled={disabled}
            >
              Plaatsen
            </Button>
            {/* <Button colorScheme="gray">Bewerken</Button> */}
          </div>

          <div className="p-4"></div>

          {disabled && (
            <div className="p-4 text-center lg:mx-96">
              <Text>
                <strong>Bedankt!</strong> <br /> Je bericht is geplaatst. Bezoek
                deze website weer op 22 juli om alle andere berichten te lezen.
              </Text>
            </div>
          )}
        </main>
      ) : (
        <main className="flex h-screen w-screen flex-col items-center justify-center lg:justify-center">
          <div className="p-4 text-center lg:mx-96">
            <Text>
              Oh oh... je moet ingelogd zijn om deze pagina te kunnen bekijken.
            </Text>

            <div className="p-4"></div>

            <Link href="/">
              <Button colorScheme="gray">Ga terug naar de homepagina</Button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default WriteMessage;
