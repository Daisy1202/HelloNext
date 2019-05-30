//有状态组件
// import React,{Component} from 'react';

// export default class Index extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello World!!</h1>
//             </div>
//         )
//     }
// }


//无状态组件
// import Head from 'next/head';
import Layout from './components/layout'

export default () => (
    <Layout>
        <div>
            {/* <Head>
            <title>head测试</title>
            <meta charSet='utf-8'/>
        </Head> */}
            <h1>Hello World simple</h1>
        </div>
    </Layout>
)
