import PhpIcon from '../assets/icons/php.svg';
import LaravelIcon from '../assets/icons/laravel.svg';
import JsIcon from '../assets/icons/js.svg';
// import DockerIcon from '../assets/icons/docker.svg';
// import NginxIcon from '../assets/icons/nginx.svg';
import PythonIcon from '../assets/icons/python.svg';
import NodeJsIcon from '../assets/icons/nodejs.svg';

const Stack = () => {
    return (
        <div className="stack">
            {/*<div className="stack__title">Основной стек</div>*/}
            <div className="stack__title">Мой стек</div>
            <div className="items">
                <div className="item">
                    <img src={PhpIcon} alt="Php"/>
                    Php
                </div>
                <div className="item">
                    <img src={LaravelIcon} alt="Laravel"/>
                    Laravel
                </div>
                <div className="item">
                    <img src={JsIcon} alt="Javascript"/>
                    Javascript
                </div>
                <div className="item">
                    <img src={PythonIcon} alt="Python"/>
                    Python
                </div>
                <div className="item">
                    <img src={NodeJsIcon} alt="NodeJs"/>
                    NodeJs
                </div>
                {/*<div className="item">*/}
                {/*    <img src={NginxIcon} alt="Nginx"/>*/}
                {/*    Nginx*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*    <img src={DockerIcon} alt="Docker"/>*/}
                {/*    Docker*/}
                {/*</div>*/}
            </div>
            {/*<div className="stack__title">Доп. стек</div>*/}
            {/*<div className="additional-items">*/}
            {/*    <div className="additional-items__item">*/}
            {/*        <img src={PythonIcon} alt="Python"/>*/}
            {/*        Python*/}
            {/*    </div>*/}
            {/*    <div className="additional-items__item">*/}
            {/*        <img src={NodeJsIcon} alt="NodeJs"/>*/}
            {/*        NodeJs*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Stack;