import axios from "axios";
import { useSession } from "next-auth/react"

import Footer from "@/components/footer";
import Header from "../components/header";

export default function Home({ country }) {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await axios
    // .get("https://api.ipregistry.co/?key=s3i2dd130k57m1o4")
    .get("")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: {name: data.name, flag: data.flag.emojitwo}
      country: {name: "Morocco", flag: "https://www.seekpng.com/png/full/323-3232715_morocco-flag-png-angel-tube-station.png"}
    }
  };
}
