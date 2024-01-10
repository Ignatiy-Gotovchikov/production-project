import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>
                {t("Язык")}
            </Button>
        </div>
    );
};

export default LangSwitcher;
