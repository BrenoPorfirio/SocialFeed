import styles from './Avatar.module.css';

export function Avatar(props) {
    return (
        <img className={styles.avatar} src={props.src}
        />
    );
}