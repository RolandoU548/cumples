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
    }, 8000);

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
                    src="data:image/jpeg;base64,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"
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
