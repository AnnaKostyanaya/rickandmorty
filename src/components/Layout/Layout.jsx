import { Outlet } from 'react-router-dom';
import { Suspense} from 'react';

const Layout = () => {

return (
<>
    <header>
    </header>
    <main>
        
        <Suspense>
            <Outlet />
        </Suspense>
    </main>
</>
);
};

export default Layout;