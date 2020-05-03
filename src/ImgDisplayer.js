import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function ImgDisplayer({ data }) {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <div
                className="main-container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "40px"
                }}
            >
                <div className="photo-container"
                    style={{
                        width: "100%"
                    }}
                >
                    {data.images.map((img, ind) =>
                        counter === ind &&
                        img.img.map(img => <img
                            key={uuidv4()}
                            src={require(`./pictures/${img}.png`)}
                            style={{
                                width: "100%",
                                marginBottom: "2px",
                                marginTop: "7px"
                            }}
                        />)
                    )}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                            margin: "10px"
                        }}
                    >
                        {data.images.map((img, index) =>
                            index !== counter &&
                            img.img.map(img =>
                                <img
                                    key={uuidv4()}
                                    src={require(`./pictures/${img}.png`)}
                                    onClick={() => setCounter(index)}
                                    style={{
                                        height: "50px",
                                        opacity: "0.7",
                                        margin: "0 10px"
                                    }}
                                />
                            )
                        )}
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        marginLeft: "20px"
                    }}>
                    {data.description}
                </div>
            </div>
        </>
    )
}
