import { AiFillFacebook, AiFillLinkedin, AiFillGithub  } from "react-icons/ai";
const Footer = () => {
    return (
        <div>
            
            <footer className="footer p-11 bg-base-200 text-base-content">
  <aside>
    <img src="https://i.ibb.co/GVdYgPL/406969428-815832850312796-3587584866340816699-n.png" alt="" />
    <p>The Daily Prothom Alo <br /> is a daily newspaper in Bangladesh, <br /> published from  Dhaka in <br /> the Bengali language. It is the largest circulated newspaper in Bangladesh</p>

    <div className=" flex gap-4 items-center text-5xl" >
         <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <AiFillFacebook></AiFillFacebook></a>
        <a href="https://www.linkedin.com/in/md-jahid-91589a295/"><AiFillLinkedin></AiFillLinkedin></a>
        <a href="https://github.com/jahid45780"><AiFillGithub></AiFillGithub></a>
        
    </div>

  </aside> 
  <nav>
    <header className="footer-title">Photo gallery</header> 
        <div className=" flex gap-1 -ml-7 " >
        <img src="../../../public/Photo gallery/Image.jpg" alt="" />
        <img src="../../../public/Photo gallery/Image (1).jpg" alt="" />
        <img src="../../../public/Photo gallery/Image (2).jpg" alt="" />
        </div>

    <div  className=" flex gap-1 -ml-7 "  >

<img src="../../../public/Photo gallery/Image (3).jpg" alt="" />
<img src="../../../public/Photo gallery/Image (4).jpg" alt="" />
<img src="../../../public/Photo gallery/Image (5).jpg" alt="" />
    </div>

  </nav> 
  <nav>
    <header className="footer-title">Tags</header> 
       
      <div className=" flex gap-1 text-2xl p-1  " >
        <h1 className=" bg-orange-200 rounded-lg p-1 hover:bg-fuchsia-700 " > Football </h1>
        <h1 className=" bg-red-400 rounded-lg p-1 hover:bg-fuchsia-700 " > Cricket </h1>
    
        
      </div>

     <div className="flex gap-1 text-2xl" >
      
        <h1 className=" bg-red-500 rounded-lg p-1 hover:bg-fuchsia-700 " > Technology </h1>
        <h1 className=" bg-green-600 rounded-lg p-1 hover:bg-fuchsia-700 " > Travel </h1>
     </div>

  </nav> 
  <nav>
    <header className="footer-title">Stay In Touch</header> 
      
  <p>To be updated with all the latest news, offers and special annoucements.</p>

  <input className=" p-4 border-2 border-red-300 " type="text" name="" id="" placeholder="Your email address" />
  <button className="btn">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  Subscribe
</button>

  </nav>
</footer>

        </div>
    );
};

export default Footer;