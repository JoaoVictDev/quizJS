import Head from 'next/head'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizContainer from '../src/components/QuizContainer'
import AlternativesForm from '../src/components/AlternativesForm'
import BackLinkArrow from '../src/components/BackLinkArrow'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Link from '../src/components/Link'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

export default function Home() {
  return (
  <>
    <Head>
      <title>Pagina principal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:image" content= {db.bg}></meta>
    </Head>
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>The legend of CSS</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lorem ipsummmm dolor sit amet</p>
          </Widget.Content>
        </Widget>
        
        <Widget>
    
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Lorem ipsummmm dolor sit amet</p>
          </Widget.Content>

        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl= "https://github.com/joaoVictDev"/>
    </QuizBackground>
  </>
  )
}
