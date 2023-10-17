
import img from "../../assets/images/slider/bike1.png"
const Bike = () => {
    return (
        <div className="bg-green-700 text-white grid grid-cols-2 items-center p-20 ">
            <div>
                <div className="text-3xl font-bold text-white">
                    <h2>Ride-on R15 V4</h2>
                    <h2>with Smile</h2>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rem saepe inventore, minus sint expedita perferendis ullam fugiat architecto. Minus perspiciatis assumenda officiis consequatur dolorem suscipit ipsum quam nam fugiat.</p>
                <button className="bg-cyan-500 px-6 py-2 rounded-lg mt-3">Learn More</button>
            </div>
            <img className="w-full" src={img} alt="" />
        </div>
    );
};

export default Bike;