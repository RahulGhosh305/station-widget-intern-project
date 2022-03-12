import React, { useState, useRef, useContext } from "react";
import minus from '../../Assets/minus.png';
import plus from '../../Assets/plus.png';
import radio from '../../Assets/radio.png';
import AppData from '../../AppData.js'
import styles from './StationBody.module.css'
import { FMContext } from "../../App";
const StationBody = () => {
    const [FMname, setFMname] = useContext(FMContext)
    console.log(FMname);
    const [activeIndex, setActiveIndex] = useState("");
    let NewRefs = [];
    const FindRef = (isActive) => {
        const newRef = useRef(isActive);
        NewRefs.push(newRef);
        return newRef
    }
    const setIndexActive = () => {
        setActiveIndex("")
        setFMname("")
    }
    const setIndexInActive = (index, name) => {
        setActiveIndex(index)
        setFMname(name)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={styles.CustomCard}>
                        <div className={`col-sm-4 ${styles.cardInner}`} style={{ backgroundColor: "#2b2b35" }}>
                            {
                                AppData.map((item, index) => {
                                    const isActive = index === activeIndex;
                                    const newRef = FindRef(isActive)
                                    return (
                                        <div className={styles.accordionWrapper}>
                                            <div
                                                style={{ backgroundColor: "#2b2b35" }}
                                                ref={newRef}
                                                className={
                                                    !isActive ? `${styles.displayNone}` : `${styles.displayShow} ${styles.accordionContent}`
                                                }
                                            >

                                                <div className={styles.contentWrapper}>
                                                    <button type='button'>
                                                        <img className={styles.minus} src={minus} alt="Minus" />
                                                    </button>
                                                    <img className={styles.radio} src={radio} alt="pic" />
                                                    <button type='button'>
                                                        <img className={styles.plus} src={plus} alt="Plus" />
                                                    </button>
                                                </div>

                                            </div>

                                            <div
                                                key={index}
                                                className={`${styles.accordion} ${isActive ? "active" : ""}`}
                                                onClick={() =>
                                                    isActive ? setIndexActive() : setIndexInActive(index, item.name)
                                                }
                                            >
                                                <div className={styles.contents}>
                                                    <h4>{item.name}</h4>
                                                    <h4>{item.frequency}</h4>
                                                </div>
                                            </div>
                                            <hr className={styles.horizontal} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StationBody;