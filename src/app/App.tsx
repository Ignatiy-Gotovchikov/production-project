import { Suspense, useState } from "react";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";
import Modal  from "shared/ui/Modal/Modal";
import { AppRouter } from "./providers/routers";

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={()=> setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum fuga mollitia perferendis ab maxime praesentium recusandae quidem aliquam doloribus quam, autem saepe expedita incidunt laudantium eveniet, itaque consequatur. Laborum, distinctio?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
