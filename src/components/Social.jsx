import TgIcon from '../assets/icons/tg.svg'
import InstIcon from '../assets/icons/inst.svg'
import GitIcon from '../assets/icons/git.svg'
import MailIcon from '../assets/icons/mail.svg'

const Social = () => {
    return (
        <div className="social">
            <a href='https://no_fuhrer_around.t.me' className="social__item">
                <img src={TgIcon} alt="Telegram"/>
            </a>
            <a href='https://www.instagram.com/ravilto/' className="social__item">
                <img src={InstIcon} alt="Instagram"/>
            </a>
            <a href='https://github.com/monosniper' className="social__item">
                <img src={GitIcon} alt="GitHub"/>
            </a>
            <a href='mailto:ravilto@vk.com' className="social__item">
                <img src={MailIcon} alt="Email"/>
            </a>
        </div>
    );
};

export default Social;