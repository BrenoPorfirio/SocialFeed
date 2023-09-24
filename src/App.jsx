import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';
import { Key } from 'phosphor-react';

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/BrenoPorfirio.png',
      name: 'Breno Porfirio',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-09-23 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/igwbriel.png',
      name: 'José Gabriel',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-09-24 17:00:00')
  },
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post =>{
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
