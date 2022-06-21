import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button, Heading, Text, Textarea } from "@chakra-ui/react";

import { AuthState } from "../AuthContext";
import { db, colRef } from "../firebase";

const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const [disabledForm, setDisabledForm] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [published, setPublished] = useState(false);
  const { user } = AuthState();

  useEffect(() => {
    const disabledFormLS = window.localStorage.getItem("DISABLED_FORM");
    const disabledButtonLS = window.localStorage.getItem("DISABLED_BUTTON");

    if (disabledFormLS !== null) setDisabledForm(JSON.parse(disabledFormLS));
    if (disabledButtonLS !== null)
      setDisabledButton(JSON.parse(disabledButtonLS));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("DISABLED_FORM", JSON.stringify(disabledForm));

    window.localStorage.setItem(
      "DISABLED_BUTTON",
      JSON.stringify(disabledButton)
    );
  }, [disabledForm, disabledButton]);

  useEffect(() => {
    if (message.length > 10) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [message]);

  const handleChange = (e) => {
    let writtenMessage = e.target.value;
    setMessage(writtenMessage);
  };

  const handleClick = () => {
    addDoc(colRef, {
      author: user.displayName,
      message: message,
      createdAt: serverTimestamp(),
      published: true,
    });

    setMessage("");
    setDisabledForm(true);
    setDisabledButton(true);
    setPublished(true);
    toast.success("Bericht geplaatst!");
  };

  return (
    <>
      {user ? (
        <main className="flex h-screen w-screen flex-col bg-gradient-to-b from-blue-500 via-red-500 to-amber-500 text-white lg:justify-center">
          <div className="p-4 lg:hidden"></div>

          <div className="p-4 text-center lg:mx-96">
            <Heading>Hey, {user.displayName}! 👋</Heading>

            <div className="p-4"></div>
            {!published && (
              <Text as="i" fontSize="xs">
                Let op: je kunt maar één bericht achterlaten!
              </Text>
            )}
          </div>

          <div className="p-4"></div>

          <div className="mx-4 lg:mx-96">
            <Textarea
              value={message}
              onChange={handleChange}
              placeholder="Schrijf je bericht..."
              focusBorderColor="black"
              disabled={disabledForm}
            />
          </div>

          <div className="p-4"></div>

          <div className="mx-4 flex justify-center text-black lg:mx-96">
            <Button
              colorScheme="gray"
              onClick={handleClick}
              disabled={disabledButton}
            >
              Plaatsen
            </Button>

            {/* <div className="p-4"></div> */}

            {/* <Button colorScheme="gray">Bewerken</Button> */}
          </div>

          <div className="p-4"></div>

          {disabledForm && disabledButton && (
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
