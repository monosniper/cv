import Benefits from "./Benefits.jsx";
import Possibilities from "./Possibilities.jsx";

const Main = () => {
    return (
        <div className="block">
            <div className="title">Backend Developer</div>

            <Benefits/>
            <Possibilities/>

            <div className="subtitle">Обо мне</div>
            <div className="text">
                Начал интересоваться сферой IT в 13 лет. Сразу выбрал для себя web направление . В 2021
                году окончил школу с направлением IT, после в 2023 году окончил колледж информационных
                технологий. На данный момент имею средне-специальное техническое образование.
            </div>

            <div className="subtitle">Софт скиллы</div>
            <div className="text">
                Понимаю, что нужно клиенту. Нахожу оптимальные решения между бизнес-задачами и процессом разработки.
                Пишу чистый, документированный и понятный для разработчика код.
            </div>
        </div>
    );
};

export default Main;