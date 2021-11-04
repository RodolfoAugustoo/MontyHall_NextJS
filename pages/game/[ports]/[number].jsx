import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Door from "../../../components/door";
import { createDoor, updateDoor } from "../../../functions/door";
import Link from "next/link";
import styles from "../../../styles/game.module.css";

export default function Game() {
  const router = useRouter();
  const [doorList, setDoorList] = useState();

  
  const handleValues = useCallback(() => {
    let doors = parseInt(router.query.ports);
    let prizedDoor = parseInt(router.query.number);
    
    let validPorts = doors > 2 && doors <= 100
    let  validPrize = prizedDoor > 0 && prizedDoor <= doors
    
    if (validPorts && validPrize)
    setDoorList(
      createDoor(parseInt(router.query.ports), parseInt(router.query.number))
      );
    }, [router.query.ports, router.query.number]);
    
    useEffect(() => {
      router.query.ports && handleValues();
    }, [router, handleValues]);
  return (
    <div className={styles.game}>
      {doorList ? (
        <div className={styles.ports}>
          {doorList.map((d, index) => (
            <Door
              key={index}
              value={d}
              onChange={(newDoor) => setDoorList(updateDoor(doorList, newDoor))}
            />
          ))}
        </div>
      ):
      <span>Valores inválidos!</span>
      }
      <div className={styles.buttons}>
        <Link href={"/"}>Reiniciar o jogo</Link>
      </div>
    </div>
  );
}
