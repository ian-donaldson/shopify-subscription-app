import '@babel/polyfill';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import '../public/assets/styles/app.css';
import Link from 'next/link';

interface IProps {
  title?: string;
  children: any;
}

export default ({ title, children }: IProps) => (
  <div style={{background: '#faf6f0', height: '100%', width: '100%'}}>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.min.css'
      />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    <LocaleProvider locale={enUS}>
      <>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <div>{children}</div>
      </>
    </LocaleProvider>
  </div>
);
