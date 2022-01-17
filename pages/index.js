import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";

const PixiApp = dynamic(() => import("../components/PixiApp"), { ssr: false });


export default function Home() {


    return (
        <>
            <PixiApp />
        </>
    )
}
