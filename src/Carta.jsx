import React from "react";

export function Carta({ image1, image2 }) {
    return (
        <div className="container__card">
            <div className="card__father">
                <div className="card">
                    <div
                        className="card__front"
                        style={{
                            backgroundImage: `url(${image1})`
                        }}></div>
                    <div
                        className="card__back"
                        style={{
                            backgroundImage: `url(${image2})`
                        }}></div>
                </div>
            </div>
        </div>
    );
}
