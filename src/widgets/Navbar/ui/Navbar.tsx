import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import Modal  from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return(<div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Главная
            </AppLink>

            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                О сайте
            </AppLink>

            <button onClick={()=> setIsOpen(true)}>Войти</button>
            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fuga mollitia perferendis ab maxime praesentium recusandae quidem aliquam doloribus quam, autem saepe expedita incidunt laudantium eveniet, itaque consequatur. Laborum, distinctio?
            </Modal>
        </div>
    </div>)
}

export default Navbar;
