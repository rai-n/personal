import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Profile from '../components/Profile'
import Divider from '@material-ui/core/Divider'
import Header from '../components/Header'
import articleStyles from "../styles/Article.module.css";

export default function Home({ articles, profile }) {
  return (
    <div>
      <Header />
      <Profile profile={profile} />
      <ArticleList articles={articles} className={articleStyles.background} />
   
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  const resP = await fetch(`https://www.codewars.com/api/v1/users/neerio`)
  const profile = await resP.json()

  return {
    props: {
      articles,
      profile,
    },
  }
}
