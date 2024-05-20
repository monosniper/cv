import WorldIcon from "../assets/icons/world.svg";
import FiveIcon from "../assets/icons/five.svg";
import PeopleIcon from "../assets/icons/people.svg";
import FireIcon from "../assets/icons/fire.svg";

const Benefits = () => {
    return (
        <div className="benefits row gap-xs-0">
            <div className="col-12 col-xs-24">
                <div className="benefit">
                    <img src={WorldIcon} alt="Freelance"/>
                    2 года на фрилансе
                </div>
                <div className="benefit">
                    <img src={FiveIcon} alt="Self-study"/>
                    Самоучка
                </div>
            </div>
            <div className="col-12 col-xs-24">
                <div className="benefit">
                    <img src={PeopleIcon} alt="Team"/>
                    6 месяцев в команде
                </div>
                <div className="benefit">
                    <img src={FireIcon} alt="Middle"/>
                    Уровень Middle
                </div>
            </div>
        </div>
    );
};

export default Benefits;