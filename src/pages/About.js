import Page from '../components/Page'
import { H1 } from '../components/Title'

export default function About() {
  return (
    <Page
      title="About"
      meta={[{ name: 'description', content: 'About us page' }]}
    >
      <H1>About.</H1>
    </Page>
  )
}
