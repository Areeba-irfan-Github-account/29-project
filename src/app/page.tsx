import Image from "next/image";
import RandomUser from "../components/RandomUser";

export default function Home() {
   const names = ["Thanks you ", "Sir Ameen Alam ", "Sir Asharib Ali", "Sir Ahmad Raza", "Sir Naeem"]
   return (
      <>
      <RandomUser/>
      </>
   );
}
