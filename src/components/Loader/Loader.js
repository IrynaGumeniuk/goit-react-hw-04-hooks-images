import React from "react";
import Spinner from "react-loader-spinner";

const Loader = () => {
    return (
        <div
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Spinner
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
};

export default Loader;