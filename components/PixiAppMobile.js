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
                scale={0.3}
            />


        </>
    );
};

export default function PixiAppMobile() {

    const [slots, setSlots] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSlots(true)
        }, 1000);
    }, [])

    return (
        <>
            <Stage width={375} height={500}>
                <Container position={[200, 150]}>
                    <Main />
                    {
                        slots &&

                        <Sprite
                            image="/images/vegas@2x.png"
                            anchor={{x:"0.95", y:"1.3"}}
                            scale={0.3}
                        />
                    }
                    {
                        slots &&

                        <Sprite
                            image="/images/slots@2x.png"
                            anchor={{x:"-0.1", y:"1.3"}}
                            scale={0.3}
                        />
                    }
                </Container>
            </Stage>
        </>
    )
}
