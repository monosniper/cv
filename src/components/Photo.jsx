import MeImg from '../assets/img/me.webp';

const Photo = () => {
    return (
        <div className="photo" style={{backgroundImage: `url(${MeImg})`}}></div>
    );
};

export default Photo;