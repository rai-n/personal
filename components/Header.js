import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Neer's</span> Portfolio
            </h1>
            <p className={headerStyles.description}>Keep up to date with me and what I am working on</p>
        </div>
    )
}

export default Header