import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
           <Carousel>
      <div className="relative">
        <img
            src="https://images.unsplash.com/photo-1648204894242-ca89818edc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
        />
        <div className="absolute -mt-32 lg:-mt-96 px-20 z-10">
                <h2 className="text-white text-2xl lg:text-4xl text-center">Ride-on R15 V4 with Smile</h2>
                <p className="text-white text-sm lg:text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis numquam voluptatum dolorem error officia, aperiam quae iste  soluta maxime suscipit est consequuntur?</p>

            </div>
      </div>
      <div className="relative">
            <img
                src="https://images.unsplash.com/photo-1580451999426-26891208ae4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <div className="absolute -mt-32 lg:-mt-96 px-20 z-10">
                <h2 className="text-white text-2xl lg:text-4xl text-center">Ride-on R15 V4 with Smile</h2>
                <p className="text-white text-sm lg:text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis numquam voluptatum dolorem error officia, aperiam quae iste voluptates  soluta maxime suscipit est consequuntur?</p>

            </div>
      </div>
      <div className="relative">
            <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
            />
            <div className="absolute -mt-32 lg:-mt-96 px-20 z-10">
                <h2 className="text-white text-2xl lg:text-4xl text-center">Ride-on R15 V4 with Smile</h2>
                <p className="text-white text-sm lg:text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis numquam voluptatum dolorem error officia, aperiam quae iste voluptates  maxime suscipit est consequuntur?</p>

            </div>
      </div>
    </Carousel>
        </div>
    );
};

export default Home;