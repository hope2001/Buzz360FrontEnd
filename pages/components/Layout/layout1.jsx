function Layout1({children}) {
    return ( <body x-data="{ page: 'home', 'loaded': true, 'stickyMenu': false, 'navigationOpen': false, 'scrollTop': false }">
         {children} 
         </body> );
}

export default Layout1;