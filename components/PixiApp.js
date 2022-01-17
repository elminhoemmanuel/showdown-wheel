import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { Stage, Container, Sprite, useTick } from "@inlet/react-pixi";
import { settings, SCALE_MODES } from "pixi.js";

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const Main = () => {

    return (
        <>
            <Sprite
                image="/images/header.png"
                anchor={0.5}
                scale={2}
            />
            <Sprite
                image="/images/showdown-off.png"
                anchor={0.5}
                scale={1}
            />


        </>
    );
};

export default function PixiApp({ }) {

    const optionsShowDown = [
        {
            name: "s",
            img: "/images/s@2x.png",
            x: "1.9",
            y: "0.4"
        },
        {
            name: "h",
            img: "/images/h@2x.png",
            x: "1.43",
            y: "0.4"
        },
        {
            name: "o1",
            img: "/images/o-1@2x.png",
            x: "2.09",
            y: "0.4"
        },
        {
            name: "w1",
            img: "/images/w-1@2x.png",
            x: "0.75",
            y: "0.44"
        },
        {
            name: "d",
            img: "/images/d@2x.png",
            x: "0.23",
            y: "0.46"
        },
        {
            name: "o2",
            img: "/images/o-2@2x.png",
            x: "-0.15",
            y: "0.45"
        },
        {
            name: "w2",
            img: "/images/w-2@2x.png",
            x: "-0.52",
            y: "0.41"
        },
        {
            name: "n",
            img: "/images/n@2x.png",
            x: "-0.83",
            y: "0.41"
        },

    ]
    const [slots, setSlots] = useState(false);
    const [slotsFirst, setSlotsFirst] = useState(false);
    const [slots2, setSlots2] = useState(false);
    const [slots2First, setSlots2First] = useState(false);
    const [slots2Count, setSlots2Count] = useState(0);
    const [bolt, setBolt] = useState(false);
    const [drop, setDrop] = useState(false);
    const [dropCount, setDropCount] = useState(0);
    const [dropFirst, setDropFirst] = useState(false);
    const [boltFirst, setBoltFirst] = useState(false);
    const [showDown, setShowDown] = useState({
        s: false,
        h: false,
        o1: false,
        w1: false,
        d: false,
        o2: false,
        w2: false,
        n: false,
    });

    const wait = (val, func, delay) => {
        setTimeout(() => {
            func(!val)
        }, delay);
    }
    const waitShowDown = (given, delay) => {
        setTimeout(() => {
            setShowDown(given)
        }, delay);
    }

    useEffect(() => {
        waitShowDown({
            ...showDown, s: true
        }, 2000);
        waitShowDown({
            ...showDown, s: true, h: true
        }, 2200);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true
        }, 2400);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true, w1: true
        }, 2600);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true, w1: true, d: true
        }, 2800);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true, w1: true, d: true, o2: true
        }, 3000);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true, w1: true, d: true, o2: true, w2: true
        }, 3200);
        waitShowDown({
            ...showDown, s: true, h: true, o1: true, w1: true, d: true, o2: true, w2: true, n: true
        }, 3400);
    }, [])

    useEffect(() => {
        if (!boltFirst) {
            wait(bolt, setBolt, 2500);
            setBoltFirst(true)
        } else {
            wait(bolt, setBolt, 100);
        }

    }, [bolt])

    useEffect(() => {
        if (!dropFirst) {
            wait(drop, setDrop, 3500);
            setDropFirst(true)
        } else if (dropCount < 4) {
            wait(drop, setDrop, 100);
            setDropCount(dropCount + 1)
        }

    }, [drop])

    useEffect(() => {
        if (!slotsFirst) {
            wait(slots, setSlots, 1000);
            setSlotsFirst(true)
        } else {
            setTimeout(() => {
                setSlots(false)
            }, 1600);
        }

    }, [slots])
    useEffect(() => {
        if (!slots2First) {
            wait(slots2, setSlots2, 1600);
            setSlots2First(true)
        } else if (slots2Count < 4) {
            wait(slots2, setSlots2, 200);
            setSlots2Count(slots2Count + 1)
        }

    }, [slots2])


    return (
        <>
            <Stage width={1366} height={600}>
                <Container position={[650, 300]}>
                    <Main />
                    {
                        slots &&

                        <Sprite
                            image="/images/vegas@2x.png"
                            anchor={{ x: "0.95", y: "1.3" }}
                            scale={1}
                        />
                    }
                    {
                        slots &&

                        <Sprite
                            image="/images/slots@2x.png"
                            anchor={{ x: "-0.1", y: "1.3" }}
                            scale={1}
                        />
                    }
                    {
                        slots2 &&

                        <Sprite
                            image="/images/vegas@2x.png"
                            anchor={{ x: "0.95", y: "1.3" }}
                            scale={1}
                        />
                    }
                    {
                        slots2 &&

                        <Sprite
                            image="/images/slots@2x.png"
                            anchor={{ x: "-0.1", y: "1.3" }}
                            scale={1}
                        />
                    }

                    {
                        bolt && <Sprite
                            image="/images/bolt@2x.png"
                            anchor={{ x: "0.38", y: "1.13" }}
                            scale={1}
                        />
                    }
                    {
                        drop && <Sprite
                            image="/images/must_drop.png"
                            anchor={{ x: "0.5", y: "-0.35" }}
                            scale={0.65}
                        />
                    }

                    {
                        optionsShowDown.map(item => (
                            showDown[item.name] && <Sprite key={item.name}
                                image={item.img}
                                anchor={{ x: item.x, y: item.y }}
                                scale={1}
                            />
                        ))
                    }


                </Container>
            </Stage>
        </>
    )
}
