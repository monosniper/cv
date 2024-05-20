import CheckIcon from "../assets/icons/check.svg";

const Possibilities = () => {
    return (
        <div className="possibilities">
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Сайты под ключ
            </div>
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Настройка серверов
            </div>
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Доработка сайтов
            </div>
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Админки
            </div>
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Телеграм боты для управления / уведомлений
            </div>
            <div className="possibility">
                <img src={CheckIcon} alt="Possibility"/>
                Парсеры для наполнения контентом
            </div>
        </div>
    );
};

export default Possibilities;