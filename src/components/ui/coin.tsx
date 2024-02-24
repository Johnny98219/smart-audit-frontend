const Coin = (props) => {
    return (
        <div className="py-2 px-6 text-white font-size-14 rounded-full" style={{backgroundColor: "#2c2c2e"}}>
            {props.name}
        </div>
    );
};

export default Coin;