import img1 from "../../assets/images/slider/bike1.png"
import img2 from "../../assets/images/slider/bike2.png"
import img3 from "../../assets/images/slider/bike3.png"
import img4 from "../../assets/images/slider/bike4.png"

const Shop = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 m-10 ">
            <div className="bg-gray-200 p-12 border-2 rounded-md shadow-lg z-10">
                <img src={img1} alt="" />
                <div>
                    <h2 className="text-2xl font-bold">Bike 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta blanditiis excepturi voluptatum delectus repellat, molestias necessitatibus cum nisi porro?</p>
                </div>
            </div>
            <div className="bg-gray-200 p-12 border-2 rounded-md shadow-lg z-10">
                <img src={img2} alt="" />
                <div>
                    <h2 className="text-2xl font-bold">Bike 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta blanditiis excepturi voluptatum delectus repellat, molestias necessitatibus cum nisi porro?</p>
                </div>
            </div>
            <div className="bg-gray-200 p-12 border-2 rounded-md shadow-lg z-10">
                <img src={img3} alt="" />
                <div>
                    <h2 className="text-2xl font-bold">Bike 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta blanditiis excepturi voluptatum delectus repellat, molestias necessitatibus cum nisi porro?</p>
                </div>
            </div>
            <div className="bg-gray-200 p-12 border-2 rounded-md shadow-lg z-10">
                <img src={img4} alt="" />
                <div>
                    <h2 className="text-2xl font-bold">Bike 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dicta blanditiis excepturi voluptatum delectus repellat, molestias necessitatibus cum nisi porro?</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;