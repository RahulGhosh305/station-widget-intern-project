import React, { useContext } from 'react';
import { FMContext } from '../../App';
import styles from './StationFooter.module.css';
const StationFooter = () => {
    const [FMname, setFMname] = useContext(FMContext)
    console.log(setFMname);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={styles.CustomCard}>
                        <div className="col-sm-4">
                            <div className={styles.footerBgColor}>
                                <div className={styles.contentWrapper}>
                                    <p>{FMname && "CURRENTLY PLAYING"}</p>
                                    <h3>{FMname}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StationFooter;