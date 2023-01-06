import Image from "next/image";
import React from "react";
import c from "src/components/Topbar/Topbar.module.scss";
import pokeball from "public/assets/pokeball.png";
import pokeball_white from "public/assets/pokeball_white.png";
import pokemon_logo from "public/assets/pokemon_logo.png";

const Header = () => {
  return (
    <div className={c.title}>
      <div className={c.title__left}>
        <Image src={pokemon_logo} alt="pokemon_logo" width={40} height={40} />
        <div className={c.caught__seen}>
          <div className={c.caught}>
            <Image src={pokeball_white} alt="pokeball" width={30} height={30} />
            <p>438</p>
          </div>
          <div className={c.seen}>
            <Image src={pokeball} alt="pokeball" width={30} height={30} />
            <p>649</p>
          </div>
        </div>
      </div>
      <p className={c.a_z}>A -&gt; Z</p>
    </div>
  );
};

export default Header;
