const saveToken=(token)=>{
    if (typeof window !== 'undefined') {
    localStorage.setItem('360BzTKn', token);
}
}

const checkToken = ()=>{
    if (typeof window !== 'undefined') 
    {
    return!!localStorage.getItem("360BzTKn");
    }
}

const getToken = ()=>{
    if(checkToken()){
        const token=localStorage.getItem("360BzTKn");
        console.log(`TOKEN: ${token}`);
        return token;
    }
}
const getToken1 = ()=>{
    if (typeof window !== 'undefined') {
    if(checkToken()){
        const token=JSON.parse(atob(localStorage.getItem("360BzTKn")));
        console.log(`TOKEN: ${token}`);
    }}
}



const dropToken = ()=>{
    if (typeof window !== 'undefined') {
    localStorage.removeItem("360BzTKn")}
    
    console.log("token droped");
}

export const Tokenn = {
    saveToken, checkToken, getToken, dropToken
}