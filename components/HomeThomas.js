import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { db, colRef } from "../firebase";

import { Heading, Text } from "@chakra-ui/react";

const HomeThomas = () => {
  const [messages, setMessages] = useState([]);

  // @ts-ignore
  useEffect(() => {
    const getAllMessages = async () => {
      const snapshot = await getDocs(colRef);
      snapshot.forEach((doc) => {
        // @ts-ignore
        setMessages((prev) => [...prev, doc.data()]);
      });
    };

    return () => getAllMessages();
  }, []);

  const messagesMapped = messages?.map((item, id) => {
    return (
      <div className="my-4 mx-4 bg-white/75 p-4 lg:mx-96" key={id}>
        <Heading>
          {
            // @ts-ignore
            item.message
          }
        </Heading>
        <Text fontSize="xs">
          Geschreven door&nbsp;
          {
            // @ts-ignore
            item.author
          }
        </Text>
      </div>
    );
  });

  return (
    <main className="flex h-full w-screen flex-col justify-center bg-[url('/bgThomasPortrait.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('/bgThomasLandscape.png')] lg:bg-top">
      <div className="p-4"></div>
      <div className="bg-gray-500/75 p-4 text-center text-white lg:mx-96">
        <Heading>Gefeliciteerd Thomas! 🤩</Heading>

        <div className="p-4"></div>

        <Text>
          De onderstaande mensen wensen jou een héle fijne verjaardag toe!
        </Text>

        <div className="p-4"></div>

        <Text fontSize="xs" as="i">
          Gemaakt door Yin Chu
        </Text>
      </div>

      {messagesMapped}
    </main>
  );
};

export default HomeThomas;
