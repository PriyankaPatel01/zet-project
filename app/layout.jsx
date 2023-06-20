import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Brands'
import Last from '@components/Last';

 export const metadata =  {
    title: 'Zet',
    description: 'Discover and share'
 }

 
 function RootLayout({children}) {
   return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                    <Last/>
                </main>
            </body>


        </html>
       
   )
 }
 
 export default RootLayout;
 

