import React, { useEffect,useState } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: "v4B.loader.js",
    dataUrl: "v4B.data",
    frameworkUrl: "v4B.framework.js",
    codeUrl: "v4AB.wasm",
});

const RoomBuilder  = () => {

    useEffect(function () {
        unityContext.on("SendScreenshot", (imgData)=>{
            console.log("Send Screenshot fired: ", imgData);
        });
    }, []);

    useEffect(function () {
        unityContext.on("debug", function (message) {
            console.log(message);
        });
    }, []);



    return (
        <div>
            <p>Room Builder:</p>
            <Unity
                unityContext={unityContext}
                style={{
                    width: 320,
                    height: 480,
                    border: "2px solid black",
                    background: "grey",
                }}
            />
        </div>

    );
};

export default RoomBuilder;
