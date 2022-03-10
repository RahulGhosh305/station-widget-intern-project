import React from 'react';
import styles from './StationHeader.module.css';
import backArrow from '../../Assets/back-arrow.png';
import power from '../../Assets/switch.png';
const StationHeader = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={styles.CustomCard}>
                        <div className="col-sm-4">
                            <div className={styles.headerBgColor}>
                                <div className={styles.contentWrapper}>
                                    <button type='button'>
                                        <img className={styles.backArrow} src={backArrow} alt="Back arrow" />
                                    </button>
                                    <h3 className={styles.headerText}>STATIONS</h3>
                                    <button type='type'>
                                        <img className={styles.power} src={power} alt="Power switch" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StationHeader;