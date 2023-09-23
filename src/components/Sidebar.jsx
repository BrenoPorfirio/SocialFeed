import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https:github.com/BrenoPorfirio.png"
                />
                <strong>Breno Costa</strong>
                <span>WEB DEVELOPER</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}