import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, ondeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        ondeleteComment(content);
    }
    
    function handleLikecomment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4D03AQE0LX2FPT2RSg/profile-displayphoto-shrink_200_200/0/1642603359775?e=1701302400&v=beta&t=iSm4ukNbTmRP9CsOHc3P3hsYerISsOX2EZHtr87g5HM"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daiane Dias</strong>
                            <time title="23 de setembro às 19:45h" dateTime="2023-23-09 19:45:50">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

            <footer>
                <button onClick={handleLikecomment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
    )
}