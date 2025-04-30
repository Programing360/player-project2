import logo from '../../assets/logo-footer.png'
import bgShadow from '../../assets/bg-shadow.png'
const Footer = () => {
    return ( 
        <div className="mt-72 relative">
            <footer className=" footer text-white h-[500px] sm:footer-horizontal bg-black text-base-content p-10">
                <div className='flex justify-center items-center pt-15'>
                    <img src={logo} alt="" />
                </div>
                <div className="flex justify-around pt-20 space-y-4">

                    <div>
                        <h2 className="text-lg font-bold">About Me</h2>
                        <p className="text-[14px] w-52">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <form>

                        <fieldset className="w-80">
                            <div>
                                <h2 className="text-lg font-bold">Subscribe</h2>
                                <p className="text-[14px]">Subscribe to our newsletter for the latest updates.</p>
                            </div>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-fuchsia-300 btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
            <div className='absolute left-[100px] md:left-[50px] -top-56'>
                <div className='relative'>
                    <img className='h-[300px] w-[1000px] md:w-[600px] bg-blue-300 rounded-xl' src={bgShadow} alt="" />
                    <div className='absolute left-1/5 text-center top-2/6 text-white'>
                        <h2 className='text-3xl text-center space-y-20 text-[#131313] font-bold'>Subscribe to our Newsletter</h2>
                        <p className='text-center text-[20px] text-[#131313B3]'>Get the latest updates and news right in your inbox!</p>
                        <div className='mt-4'>
                            <fieldset className="w-80 ">
                                <div className="join gap-4 flex justify-center">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input border-2 solid rounded-lg w-[300px] input-bordered join-item" />
                                    <button className="btn bg-fuchsia-300 btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;