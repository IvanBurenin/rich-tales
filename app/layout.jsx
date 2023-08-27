import { Providers } from './redux/provider';

import Header from './components/Header/Header';

import './normalize.css';
import mainStyles from './main.module.css';

export const metadata = {
    title: 'Rich Tales',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function RootLayout({ children }) {
    return (
      <html className={mainStyles.root}>
        <body className={mainStyles.body}>
          <Providers>
            <div className={mainStyles.wrapper}>
                <Header/>
                <main className={mainStyles.main}>
                  {children}
                </main>
            </div>
          </Providers>
        </body>
      </html>
    )
}