

const Contract = () => {
    return (
        <div className="bg-orange-200 p-20">
            <h2 className="text-center text-3xl font-bold p-7 uppercase">Contract <span className="text-red-500">with</span> use</h2>
                <form action="">
                    <p className="text-white text-xl">send a mail</p>
                    <textarea  placeholder="enter your problem" className="border-2 rounded-md p-4 w-2/4 h-32"></textarea>
                    <p className="text-white text-xl">Enter your mail</p>
                    <input type="text" placeholder="enter your mail" className="p-2 rounded-md border w-2/4"/>
                    <br />
                    <button className="text-lg text-white px-6 py-2 rounded-md bg-green-500 mt-4 inline-block" >Submit</button>
                </form>
        </div>
    );
};

export default Contract;