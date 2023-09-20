import React, { useState } from "react";
import { Carta } from "./Carta.jsx";
import "./App.css";

function App() {
    const imagenes = [
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t31.18172-8/10536354_10204118081058105_3985454535058211436_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=5xfbNLJ6WmoAX9olhNf&_nc_oc=AQlkDaQZ3fthn8l68wyGfNaTT2o8KMKlxbZIYnwOIw3Slu8FKbN9novbztZ8isTsZZc&_nc_ht=scontent.fccs3-2.fna&oh=00_AfDhds7WHAPKKhBCc6BdaNoTJG8pbaKQA_PXa4OXpDjqAQ&oe=6531DACC",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/4630_1141578265468_2342741_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=F0KMOMpSQzQAX_5WhsL&_nc_ht=scontent.fccs3-2.fna&oh=00_AfD7KKmlrptEj61xkY0s-5sbK_TKl4_SODt76T0RPALE7w&oe=653205AA"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/26856_1381485302994_636558_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2c4854&_nc_ohc=p2hlKASGOioAX9WGzKN&_nc_ht=scontent.fccs3-2.fna&oh=00_AfA489IcYCPnubZL0iGdGFItoGc_mQq3UFJXvgAb-gLC-Q&oe=6531FC2E",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/249680_2100130628678_6275355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=JgWHIGl0vz4AX_90hVj&_nc_ht=scontent.fccs3-2.fna&oh=00_AfAE2A1-ncF4A6K6tao1STsAQedYbIr6IGN8ivTchaBH4w&oe=6531E694"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/253930_2100133748756_3109348_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=PMIQMWGoQB4AX_yDvUi&_nc_ht=scontent.fccs3-2.fna&oh=00_AfCC5iTFQtgGCpthhVKIUZUtp0PUYvYGX-pJf-aKC451fg&oe=6531F895",
            image2: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.18169-9/301926_2418251661505_2143289568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=PcXWftR9hGQAX_1Lztp&_nc_ht=scontent.fccs3-1.fna&oh=00_AfDLjG-diPoL1H7V65O0DhFXQOSwGF7jjxr9tUNFIplVuA&oe=6531FD7B"
        },
        {
            image1: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.18169-9/4761_1166186560202_1195238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=jvTX0ogR_k0AX_6qmzB&_nc_ht=scontent.fccs3-1.fna&oh=00_AfA0O9oISdxeLS6ghzzzFYddfH2NnCIInGDYUWFowYSv_A&oe=6531F25A",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/945923_10201222382627454_461565322_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=liEIeFF9w0YAX9Jsxl4&_nc_ht=scontent.fccs3-2.fna&oh=00_AfDX80hT6ImoLNjf6qeXPkp0rFo885O1490JmxRLoGFD-w&oe=6531F7D2"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/600380_4105795809054_1043615887_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=0Hg4eO-QK_0AX8d9wRO&_nc_ht=scontent.fccs3-2.fna&oh=00_AfDugj1iQkBK-MpzfCVqzVlOqpKbTPGmQQmNHbXldU2X2A&oe=6531E490",
            image2: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.18169-9/994784_10201225851794181_1275041233_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=JQRmvnXqh-wAX_vYZ5k&_nc_ht=scontent.fccs3-1.fna&oh=00_AfAbQNlRBcmuap2WRwzhzYx-ltGR9ldz_Ken7LfJwWoz8Q&oe=6531E1D6"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.6435-9/169665335_10225499502580280_6735390500803821422_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IwWQ9UAcAI4AX_Vbb03&_nc_ht=scontent.fccs3-2.fna&oh=00_AfCDOsxh9BtcikTUYYo2du6J5rIa2BMKxxmRq3Q1OdFPgw&oe=6531E6FF",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/10391681_1270366245087_4094090_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ilGNGpKqrawAX_4MAqk&_nc_ht=scontent.fccs3-2.fna&oh=00_AfAgje_DvNummgAEkicf5qDlHl5a0-kmbsK9ea5jhVLGJw&oe=65320166"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/4630_1141579745505_1981352_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=oMiEglIL4DQAX9jA165&_nc_ht=scontent.fccs3-2.fna&oh=00_AfA9kFiRZALRxwTmszTsQ1oWgN_T8ggEi_NAwmXbudKmuQ&oe=6531ED97",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/269381_4105744247765_349525665_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=sFqnPwkrY78AX90rTPS&_nc_ht=scontent.fccs3-2.fna&oh=00_AfDd809n8uHE8LjetuJGA15NoL_1DhjoD_qqYBuU28bP1g&oe=65321277"
        },
        {
            image1: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/548842_4715721896825_1211461440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3nNHLHOfHtUAX-6QdQM&_nc_ht=scontent.fccs3-2.fna&oh=00_AfBO5gM8UuNTazJGuV5zPtKqxYWLuVxVtFPcsFXuIGz3jA&oe=6531FD1C",
            image2: "https://scontent.fccs3-2.fna.fbcdn.net/v/t1.18169-9/582774_4520670420202_775447542_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=FaeZ7vmeEeoAX-l24RQ&_nc_ht=scontent.fccs3-2.fna&oh=00_AfDsftmWcUHj5Z5khDUCGYUlHBwI2qFUwW0t6BvPvkQqGg&oe=6531E896"
        },
        {
            image1: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.18169-9/1917483_1272376054873_5306580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=-heVjCJHpaQAX8fOZsq&_nc_ht=scontent.fccs3-1.fna&oh=00_AfB9dtq8-0VZ_szDY6M1FVqv_Tx-j3A7fUqUzX_kWsmceg&oe=6531F386",
            image2: "https://scontent.fccs3-1.fna.fbcdn.net/v/t1.18169-9/1917483_1272391815267_6777381_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=PchGpehOv-QAX-P5sAa&_nc_ht=scontent.fccs3-1.fna&oh=00_AfDCUkM3u5cZfv5FjsC-TJK8Wfd1Avaacnm9sPgPYeOkoQ&oe=6531F836"
        }
    ];
    const [timer, settimer] = useState("mrBolas");
    setTimeout(() => {
        settimer("fotos");
    }, 5000);

    return (
        <>
            <h1 className="h1">Feliz Cumpleaños</h1>
            <h2 className="h2">Gordos Bolas</h2>
            <div
                className="troll"
                style={{
                    display: timer === "mrBolas" ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <img
                    src="https://scontent.fccs3-2.fna.fbcdn.net/v/t31.18172-8/12694815_969393419816639_6541651429352622669_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=jHC1rHxgkBgAX9kLvEB&_nc_ht=scontent.fccs3-2.fna&oh=00_AfAgqFC-4NkeQnV5YmwswqrgNQH3sQDiQhIWY2eB6KHJoA&oe=6532236A"
                    style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        width: "600px"
                    }}
                />
                <h3>Espera ese no...</h3>
            </div>
            <div
                className="container__card"
                style={{ display: timer === "fotos" ? "flex" : "none" }}>
                {imagenes.map((imagen, index) => {
                    return (
                        <Carta
                            image1={imagen.image1}
                            image2={imagen.image2}
                            key={index}
                        />
                    );
                })}
                <h6>mani es gay</h6>
            </div>
        </>
    );
}

export default App;
