import React, { useState } from "react";
import c from "src/components/PokeList/PokeCard.module.scss";
import pokeball from "public/assets/pokeball.png";
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
}: any) => {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={c.container}>
      {isShown && (
        <div className={c.show}>
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
          {/* <Image src={image} alt={name} width={30} height={30} /> */}
          <Image src={image} alt={name} width={30} height={30} />
          <div className={c.stat__container}>
            <div className={c.stat__left}>
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className={c.stat__right}>
              <p>{type}</p>
              <p>
                {height}
                <span className={c.unit}> (m)</span>
              </p>
              <p>
                {weight}
                <span className={c.unit}> (kg)</span>
              </p>
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
          width={30}
          height={30}
        />
        <p className={c.right_id}>No. {id}</p>
        <p>{name}</p>
        <Image
          src={pokeball}
          alt="pokeball"
          className={c.right_img}
          width={30}
          height={30}
        />
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
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
};

export default PokeCard;
