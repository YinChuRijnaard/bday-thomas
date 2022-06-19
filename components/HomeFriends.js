import { Button, Heading, Text } from "@chakra-ui/react";

const HomeFriends = () => {
  return (
    <main className="flex h-screen w-screen flex-col justify-center bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat text-white lg:bg-top">
      <div className="bg-gray-500/50 p-4 text-center lg:mx-48">
        <Heading size="2xl">
          Schrijf een leuk bericht voor Thomas z&apos;n 26<sup>e</sup>{" "}
          verjaardag! 🥳
        </Heading>

        <div className="p-4"></div>
        <div className="p-4"></div>
        <div className="p-4"></div>

        <Text>
          Het is bijna Thomas z&apos;n verjaardag! 🎉 Daarom leek het mij, Yin
          Chu, een leuk idee om een kleine app te maken waar vrienden en familie
          een berichtje achter kunnen laten. Lijkt je dat leuk? Log dan snel in
          met je Google account! 😊
        </Text>
      </div>

      <div className="p-4"></div>

      <div className="flex justify-center">
        <Button colorScheme="blue">Log in en schrijf je bericht 🖊️</Button>
      </div>
    </main>
  );
};

export default HomeFriends;

// Is it OK to use a div and use Tailwind to style the Chakra children?
