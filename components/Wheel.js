import React, { useState, useEffect } from 'react'

const Wheel = () => {

    const [spinning, setSpinning] = useState(false);
    const [spin, setSpin] = useState(false);
    const [position, setPosition] = useState(1);
    const [error, setError] = useState("");

    const spinWheel = () => {
        setError("")
        setSpinning(true)
        setTimeout(() => {
            fetch(`http://localhost:8080/positions?POSITION=${String((Math.floor(Math.random() * 4) + 1))}`)
                .then(response => response.json())
                .then((data) => {
                    console.log(data[0]);
                    setPosition(data[0].POSITION);
                    console.log(position);
                    setSpinning(false)
                })
                .catch(error => {
                    setError("Something went wrong, try again")
                    console.log(error)
                    setSpinning(false)
                });
        }, 3000);
    }

    useEffect(() => {

        if (spin) {
            spinWheel();
        }
        setSpin(false);

    }, [spin])
    return (
        <div className="wheel-box">
            <h1>Spin The Wheel</h1>
            <div className="wheel">
                <div className="">
                    <img className="wheel-marker" src="/images/marker.png" alt="marker image" />
                </div>
                <div>
                    {
                        spinning ?
                            <img
                                className="wheel-img rotate-center"
                                src="/images/wheel.png"
                                alt="wheel image"
                            /> :
                            <img
                                style={{ transform: `rotate(${position === 1 ? "45" : position === 2 ? "135" : position === 3 ? "225" : "315"}deg)` }}
                                className="wheel-img"
                                src="/images/wheel.png"
                                alt="wheel image"
                            />
                    }
                </div>
                <div>
                    {spinning && <p className="">Loading...</p>}
                    {error && <p className="">{error}</p>}
                    {!spinning && <p className="">Position : {position}</p>}
                </div>
                <div>
                    <button onClick={() => { setSpin(!spin) }} className="wheel-btn">Spin</button>
                </div>
            </div>
        </div>
    )
}

export default Wheel
