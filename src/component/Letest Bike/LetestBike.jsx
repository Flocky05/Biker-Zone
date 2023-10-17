import img1 from "../../assets/images/others/latest1.png"
import img2 from "../../assets/images/others/latest2.png"
import img3 from "../../assets/images/others/latest3.png"

const LetestBike = () => {
    return (
        <div>
            <h2 className="text-5xl text-center p-14">Latest Bikes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20">
                <div className="bg-orange-100 p-10 rounded-lg">
                    <img src={img1} alt="" />
                    <div className="mt-3">
                        <h2>Ducati XDIAVEL S-73</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum veritatis quam magnam!</p>
                        <button className="bg-orange-900 text-white px-6 py-2 rounded-md">Purchase</button>
                    </div>
                </div>
                <div className="bg-orange-100 p-10  rounded-lg">
                    <img src={img2} alt="" />
                    <div className="mt-3">
                        <h2>Ducati XDIAVEL S-73</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum veritatis quam magnam!</p>
                        <button className="bg-orange-900 text-white px-6 py-2 rounded-md">Purchase</button>
                    </div>
                </div>
                <div className="bg-orange-100 p-10  rounded-lg">
                    <img src={img3} alt="" />
                    <div className="mt-3">
                        <h2>Ducati XDIAVEL S-73</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est illum veritatis quam magnam!</p>
                        <button className="bg-orange-900 text-white px-6 py-2 rounded-md">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetestBike;