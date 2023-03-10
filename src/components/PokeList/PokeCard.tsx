import React, { useState } from "react";
import c from "src/components/PokeList/PokeCard.module.scss";
import Image from "next/image";
import Modal from "src/components/PokeList/Modal";

const PokeCard = ({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
  totalStats,
  abilities,
}: any) => {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const mediaQueryList = window.matchMedia("(max-width:1024px)");

  // 画面サイズが1024px以下ではonMouseEnter={() => setIsShown(true)}でカーソルを合わせた時に表示されないように
  mediaQueryList.addEventListener("change", () => {
    setIsShown(false);
  });

  return (
    <div className={c.container}>
      {isShown && (
        <div className={c.show}>
          <div className={c.stat__container_title}>
            <Image
              src={image}
              alt={name}
              className={c.image_title}
              fill
              sizes="100vw"
            />
            <p className={c.poke_num}>No. {id}</p>
            <p className={c.poke_name}>{name}</p>
          </div>
          <Image
            src={image}
            alt={name}
            className={c.main_image}
            fill
            sizes="100vw"
          />
          <div className={c.stat__container}>
            <div className={c.stat__right}>
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
      )}
      <div
        className={c.right}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <Image
          src={image}
          alt={name}
          className={c.right_img}
          fill
          sizes="100vw"
        />
        <p className={c.right_id}>No. {id}</p>
        <p className={c.poke_name}>{name}</p>
      </div>
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          totalStats={totalStats}
          type={type}
          abilities={abilities}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
};

export default PokeCard;
