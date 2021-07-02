import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                Blog Adventure
            </h1>
            <p className={headerStyles.description}>What's going on inside of my brain</p>
        </div>
    )
}

export default Header