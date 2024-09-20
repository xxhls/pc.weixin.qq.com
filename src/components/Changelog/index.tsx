import React from "react";
import styles from "./index.module.scss";

const Changelog: React.FC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                {[1].map((item, index) => {
                    return (
                        <>
                            <div className={styles.item}>修复了一些已知问题。</div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default Changelog;
