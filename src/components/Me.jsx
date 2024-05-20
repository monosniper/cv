import Status from "./Status.jsx";
import Photo from "./Photo.jsx";
import Social from "./Social.jsx";
import Tags from "./Tags.jsx";

const Me = () => {
    return (
        <>
            <Status />
            <Photo />
            <div className="name">
                Равиль, 18 лет <span className="time">GMT +5</span>
            </div>
            <Social />
            <Tags />
        </>
    );
};

export default Me;