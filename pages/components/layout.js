import Head from 'next/head';
import Link from 'next/link';

import Router from 'next/router';

// Router.events.on('routeChangeStart', (url) => {
//     if (url === '/films') {
//         location.href = './nopermission'
//     }
// })

export default ({ children }) => (
    <div>
        <Head>
            <title>共通头部测试</title>
        </Head>
        <div>
            <Link href="/" prefetch>主页</Link>|
            <Link href="/films">电影</Link>
            {/* <Link as='路由遮盖' href="/films">电影</Link> */}
            
        </div>
        {children}
        <footer>工程中心</footer>
    </div>
)