import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://media.licdn.com/dms/image/C4D03AQE0LX2FPT2RSg/profile-displayphoto-shrink_200_200/0/1642603359775?e=1701302400&v=beta&t=iSm4ukNbTmRP9CsOHc3P3hsYerISsOX2EZHtr87g5HM"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daiane Dias</strong>
                            <time title="23 de setembro às 19:45h" dateTime="2023-23-09 19:45:50">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Breno, parabéns</p>
                </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
    )
}