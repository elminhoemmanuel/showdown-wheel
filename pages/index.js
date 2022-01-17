import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Wheel from '../components/Wheel';

const PixiApp = dynamic(() => import("../components/PixiApp"), { ssr: false });
const PixiAppMobile = dynamic(() => import("../components/PixiAppMobile"), { ssr: false });


export default function Home() {

    return (
        <>
            {/* Ensure to read instructions to properly run the app in Readme.md  */}
            <div className="container">
                {/* Banner animation built with pixi.js */}
                <div className="large">
                    <PixiApp />
                </div>
                <div className="mobile">
                    <PixiAppMobile />
                </div>

                {/* spin the wheel app */}
                <Wheel />
            </div>
        </>
    )
}
