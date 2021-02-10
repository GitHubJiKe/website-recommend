import React from "react";
import "./App.css";

import json2021 from "./json/2021.json";
import json2020 from "./json/2020.json";
import json2020_2 from "./json/2020-2.json";
import json2019 from "./json/2019.json";
import json2018 from "./json/2018.json";
import json2017 from "./json/2017.json";
import json2016 from "./json/2016.json";

interface ICardProps {
    children: React.ReactNode;
    title: React.ReactNode;
}

function Card({ children, title }: ICardProps) {
    return (
        <section className="card">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

interface ILinkItemProps {
    title: string;
    url?: string;
}

function LinkItem({ title, url = "/" }: ILinkItemProps) {
    return (
        <div className="link-item">
            <a href={url} target="_blank">
                {title}
            </a>
        </div>
    );
}

function App() {
    return (
        <>
            <div className="App">
                <h1>-Lks- 网站推荐集合</h1>
                <a
                    style={{
                        paddingLeft: 10,
                        fontSize: "20px",
                        color: "red",
                    }}
                    target="_blank"
                    href="https://space.bilibili.com/125526?from=search&seid=12262566495539783955"
                >
                    -Lks- B站主页
                </a>
                <a
                    style={{
                        paddingLeft: 10,
                        fontSize: "20px",
                        color: "red",
                    }}
                    target="_blank"
                    href="share.weiyun.com/JKhKDkDb"
                >
                    源文件下载链接
                </a>

                <Card title="2021年 行业报告">
                    {json2021.map((item) => (
                        <LinkItem
                            key={item["http://report.seedsufe.com/#/report"]}
                            title={item.行业报告}
                            url={item["http://report.seedsufe.com/#/report"]}
                        />
                    ))}
                </Card>
                <Card title="2020年 大像素">
                    {json2020.map((item) => (
                        <LinkItem
                            key={item["http://www.bigpixel.cn/index.html"]}
                            title={item.大像素}
                            url={item["http://www.bigpixel.cn/index.html"]}
                        />
                    ))}
                </Card>
                <Card title="2020-2年 AI音乐推荐">
                    {json2020_2.map((item) => (
                        <LinkItem
                            key={item["https://www.gnoosic.com/faves.php"]}
                            title={item.AI音乐推荐}
                            url={item["https://www.gnoosic.com/faves.php"]}
                        />
                    ))}
                </Card>
                <Card title="2019年 全能下视频">
                    {json2019.map((item) => (
                        <LinkItem
                            key={item["https://www.urlgot.com/"]}
                            title={item.全能下视频}
                            url={item["https://www.urlgot.com/"]}
                        />
                    ))}
                </Card>
                <Card title="2018年 重力">
                    {json2018.map((item) => (
                        <LinkItem
                            key={item["https://codepen.io/akm2/full/rHIsa"]}
                            title={
                                item.重力 ||
                                item["https://codepen.io/akm2/full/rHIsa"]
                            }
                            url={item["https://codepen.io/akm2/full/rHIsa"]}
                        />
                    ))}
                </Card>
                <Card title="2017年 翻墙">
                    {json2017.map((item) => (
                        <LinkItem
                            key={item["https://sscat.cn/?referer=%2F"]}
                            title={
                                item.翻墙 ||
                                item["https://sscat.cn/?referer=%2F"]
                            }
                            url={item["https://sscat.cn/?referer=%2F"]}
                        />
                    ))}
                </Card>
                <Card title="2016年 __EMPTY">
                    {json2016.map((item) => (
                        <LinkItem
                            key={item["http://nico-nico-ni.com/"]}
                            title={
                                item.__EMPTY ||
                                item["http://nico-nico-ni.com/"] ||
                                "default title"
                            }
                            url={item["http://nico-nico-ni.com/"]}
                        />
                    ))}
                </Card>
            </div>
            <footer
                style={{
                    textAlign: "center",
                    padding: 10,
                    width: "100%",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "burlywood",
                }}
            >
                power by PeterYuan
                <a
                    style={{ marginLeft: 10 }}
                    href="https://github.com/GitHubJiKe/website-recommend"
                >
                    github
                </a>
            </footer>
        </>
    );
}

export default App;
