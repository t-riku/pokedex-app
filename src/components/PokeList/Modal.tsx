import React from "react";
import pokeball from "public/assets/pokeball.png";
import classes from "src/components/PokeList/Modal.module.scss";
import c from "src/components/PokeList/PokeCard.module.scss";
import { ITEM } from "src/components/PokeList/PokeType";

import Image from "next/image";

const Modal = ({
  onClick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
  totalStats,
}: ITEM) => {
  return (
    <div className={classes.modal}>
      <div onClick={onClick} className={classes.modal_X}>
        X
      </div>
      <div>
        <Image
          src={image}
          alt={name}
          className={classes.modal_image}
          width={30}
          height={30}
        />
      </div>
      <div className={classes.stat__container}>
        {/* <div className={classes.stat__content}> */}
        <div className={c.stat__container_title}>
          <Image
            src={image}
            alt={name}
            className={c.image_title}
            width={30}
            height={30}
          />
          <p className={c.poke_num}>No. {id}</p>
          <p>{name}</p>
          <Image
            src={pokeball}
            alt="pokeball"
            className={c.pokeball_title}
            width={30}
            height={30}
          />
        </div>
        <div className={c.stat__container}>
          <div className={c.stat__left}>
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className={c.stat__right}>
            <p>{type}</p>
            <p>{height}0 cm</p>
            <p>{weight} 1bs</p>
          </div>
        </div>
        <div className={c.base_stats}>
          <div>
            {statsName.map((stats: string, index: number) => (
              <p className={c.stats} key={index}>
                {stats}
              </p>
            ))}
            totalStats
          </div>
          <div>
            {stats.map((stats: number, index: number) => (
              <p className={c.stats} key={index}>
                {stats}
              </p>
            ))}
            {totalStats}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
