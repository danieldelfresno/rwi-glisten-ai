import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import WordMark from "./WordMark";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
    const client = createClient();

    const settings = await client.getSingle("settings");
  return (
    <header>
      <NavBar settings={settings}/>
    </header>
  )
}
