import type React from "react";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<p>
					<a href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy">
						《微信隐私保护指引》
					</a>
					<a href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=default">
						《腾讯微信软件许可及服务协议》
					</a>
				</p>
				<p>微信 PC 版官方 QQ 群交流：145378303</p>
				<p>Copyright © 1998-2024 Tencent All Rights Reserved</p>
			</div>
		</>
	);
};

export default Footer;
