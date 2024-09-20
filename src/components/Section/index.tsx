import React from "react";
import Changelog from "@/components/Changelog";
import styles from "./index.module.scss";

const Section: React.FC = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>微信 Windows 版</h1>
                <Changelog />
                <div className={styles.downloadButton}>
                    <div className={styles.downloadIcon}></div>
                    <div className={styles.downloadText}>
                        <div className={styles.text1}>下载 3.9.12</div>
                        <div className={styles.text2}>适用于 Windows& 及以上版本</div>
                    </div>
                </div>
                <div className={styles.download32}>下载 32 位版本</div>
            </div>
        </>
    );
};

export default Section;
