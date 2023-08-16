function Error() {
    return ( 
        <main>
        
<section className="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">

<div className="absolute top-25 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
<div className="w-full h-[1.24px] footer-bg-gradient"></div>
<div className="w-full h-[2.47px] footer-bg-gradient"></div>
<div className="w-full h-[3.71px] footer-bg-gradient"></div>
<div className="w-full h-[4.99px] footer-bg-gradient"></div>
<div className="w-full h-[6.19px] footer-bg-gradient"></div>
<div className="w-full h-[7.42px] footer-bg-gradient"></div>
<div className="w-full h-[8.66px] footer-bg-gradient"></div>
<div className="w-full h-[9.90px] footer-bg-gradient"></div>
<div className="w-full h-[13px] footer-bg-gradient"></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-dark/0 to-dark -z-1">
</div>
<div className="text-center px-4">
<h1 className="font-extrabold text-heading-2 text-white mb-5.5">
Error Page
</h1>
<ul className="flex items-center justify-center gap-2">
<li className="font-medium"><a href="index.html">Home</a></li>
<li className="font-medium">/ Error Page</li>
</ul>
</div>
</section>


<section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25 xl:pb-30 2xl:pb-[150px]">
<div className="wow fadeInUp mx-auto w-full max-w-[597px] text-center px-4 sm:px-8 lg:px-0" data-wow-delay="0.1s">
<img src="images/404.svg" alt="404" className="mx-auto mb-12.5" />
<h2 className="mb-5.5 text-heading-3 font-bold text-white">
Oops! Page Not Found.
</h2>
<p className="font-medium mb-9">
The page you are looking for is not available or has been moved. Try
a different page or go to homepage with the button below.
</p>
<a href="index.html" className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
Go To Home
</a>
</div>
</section>
        </main>
     );
}

export default Error;