import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/Pokédex_logo.png"


const Navbar = () => {
    return(
        <div className='h-15 p-5 flex item-left justify-left bg-red-400'>
            <Link href="/">
                <Image src={Logo} alt='Logo de pokedex'
                       width={200}
                       height={100}
                />
            </Link>

        </div>
    )
}

export default Navbar