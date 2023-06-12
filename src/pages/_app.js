import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/footer.css'
import '@/styles/home.css'
import '@/styles/school.css'
import '@/styles/form.css'
import '@/styles/items.css'
import '@/styles/about.css'
import '@/styles/contact.css'
import '@/styles/other.css'
import { appWithTranslation } from 'next-i18next';
import { i18n } from '../../i18n';

function App({ Component, pageProps }) {

  return <Component {...pageProps} />


}



export default appWithTranslation(App);