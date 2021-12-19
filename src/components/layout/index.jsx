import Sidebar from 'components/sidebar';
import Header from 'components/header';
import './styles.scss';


const Layout = ({children, ...props}) => {
    return (
    <div className="container" {...props}>
        <aside className="container__sidebar">
            <Sidebar></Sidebar>
        </aside>
        <main className="container__main">
            <Header></Header>
            <div className="container__main-content">
                {children}
            </div>
        </main>
    </div>
    )
}

export default Layout;
