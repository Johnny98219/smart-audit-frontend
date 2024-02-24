const Contract = (props) => {
    return(
        <div className="block max-h-15 rounded-lg mb-6 p-4 text-white" style={{backgroundColor: "#222226", width: "30vw"}}>
            <div className="flex items-center">
                <img src={props.avatar} className="w-8 h-8 rounded-full mr-2"/>
                <h1 style={{fontSize: "18px"}}><b>{props.title}</b></h1>
            </div>
            <p className="h-10 overflow-y-hidden text-base leading-tight mt-3">
                {props.description}
            </p>
            <div className="mt-3">
                <span className="py-06 px-012 rounded-full bg-white bg-opacity-20">{props.standard}</span>
            </div>
            <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold rounded-full flex justify-center items-center" style={{padding: "2px"}}>
                    <span className="flex w-full text-white rounded-full py-10rem" style={{backgroundColor: "#222327", paddingLeft: "50%"}}>Buy</span>
                </button>
            </div>
        </div>
    );
};

export default Contract;