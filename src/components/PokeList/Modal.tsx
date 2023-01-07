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
  abilities,
}: ITEM) => {
  return (
    <div className={classes.modal}>
      <button onClick={onClick} className={classes.modal__btn__close}></button>
      <div className={classes.modal_image_wrapper}>
        <Image
          src={image}
          alt={name}
          className={classes.modal_image}
          fill
          sizes="100vw"
        />
      </div>
      <div className={classes.stat__container}>
        {/* <div className={classes.stat__content}> */}
        <div className={c.stat__container_title}>
          <Image
            src={image}
            alt={name}
            className={c.image_title}
            fill
            sizes="100vw"
          />
          <p className={c.poke_num}>No. {id}</p>
          <p>{name}</p>
          {/* <Image
            src={pokeball}
            alt="pokeball"
            className={c.pokeball_title}
            width={30}
            height={30}
          /> */}
        </div>
        <div className={c.stat__container}>
          <div className={c.stat__right}>
            {/* <p>{type}</p> */}
            <div className={c.card_types}>
              {/* タイプは複数ある可能性があるためmap関数で全部とってくる */}
              {type.map((type: any) => {
                return (
                  <span key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </span>
                );
              })}
            </div>
            <p>
              高さ：{height}
              <span className={c.unit}> (m)</span>
            </p>
            <p>
              重さ：{weight}
              <span className={c.unit}> (kg)</span>
            </p>
            <div className={classes.abilities}>
              <p>特性：</p>

              {/* 特性は複数ある可能性があるためmap関数で全部とってくる */}
              {abilities.map((ability: any) => {
                return (
                  <span key={ability.ability.name}>{ability.ability.name}</span>
                );
              })}
            </div>
          </div>
        </div>
        <div className={c.base_stats}>
          <div>
            {statsName.map((stats: string, index: number) => (
              <p className={c.stats} key={index}>
                {stats}
              </p>
            ))}
            <p className={c.total_stats}>TotalStats</p>
          </div>
          <div>
            {stats.map((stats: number, index: number) => (
              <div className={c.bar_graph_wrap} key={index}>
                <div className={c.graph} style={{ width: stats - 25 + "%" }}>
                  <span className={c.number}>{stats}</span>
                </div>
              </div>
            ))}
            <p className={c.total_stats}>{totalStats}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
