import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';

import style from "../Layout/Layout.module.css";

const Layout = () => {

return (
<div className={style.container}>
    <header>
    </header>
    <main>
        
        <Suspense>
            <Outlet />
        </Suspense>
    </main>
</div>
);
};

export default Layout;