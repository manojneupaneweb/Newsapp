import React from 'react'
import logo from "../../public/image/logo JPEG.jpg"

function Home() {
    return (
        <>
            <main>
                <section className=" tag bg-slate-100 py-2">
                    <div className="flex flex-wrap gap-4 px-20">
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            Cricket
                        </p>
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            NPL
                        </p>
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            Science
                        </p>
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            Technology
                        </p>
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            Business
                        </p>
                        <p className="w-fit px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-md hover:bg-blue-200 cursor-pointer">
                            Sports
                        </p>

                    </div>
                </section>
                <div>
                    <div className="bg-state-100 py-2 px-20 overflow-hidden">
                        <marquee
                            direction="left"
                            scrollamount="10"
                            onMouseOver={(e) => e.target.stop()}
                            onMouseOut={(e) => e.target.start()}
                            className="text-blue-700 font-semibold whitespace-nowrap"
                        >
                            विश्व डिजिटल युगतर्फ अघि बढिरहेका बेला नेपालले पनि आफ्नो शिक्षा प्रणालीमा प्रविधि समावेश गर्ने दिशामा महत्त्वपूर्ण कदम चालेको छ। शिक्षा मन्त्रालयले हालै "डिजिटल नेपाल स्कुल कार्यक्रम" सुरु गरेको छ, जसले ग्रामीण र शहरी विद्यार्थीहरूबीचको खाडल कम गर्ने लक्ष्य लिएको छ।
                        </marquee>
                    </div>

                </div>
                <div className='advertisement'>
                    <div className='py-20 flex items-center px-20 bg-slate-200'>
                        <p className='w-full font-bold text-xl text-center' >Advertisement</p>
                    </div>
                </div>
                <div className='py-10 px-20 mt-10  '>
                    <p className='text-center text-6xl text-blue-900 font-bold cursor-pointer hover:text-blue-700'>डोटीको पूवीचौकी–६ मा कांग्रेस विजयी</p>
                    <div className="flex  gap-7 justify-center items-center m-6">
                        <img
                            src={logo}
                            className='h-14 cursor-pointer w-14 rounded-full border-spacing-1 border-solid border-2 border-blue-600'
                            alt="" />
                        <p> <i className='far fa-clock'></i> १९ मिनेट अगाडि</p>
                    </div>
                </div>

                <div className='py-10 flex flex-col items-center px-20'>
                    <p className='text-center text-6xl text-blue-900 font-bold cursor-pointer  hover:text-blue-700'>ब्लाइण्ड क्रिकेट विश्वकपमा नेपाल पहिलोपटक सेमिफाइनलमा</p>
                    <img
                        src="https://www.onlinekhabar.com/wp-content/uploads/2024/11/468793078_985046260286690_8416068294286113387_n-e1732982840685.jpg"
                        alt=""
                        className='h-96 rounded-lg my-5'
                    />
                    <p className='text-xl font-medium text-center'>१५ मंसिर, काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट टी२० विश्वकपको
                        सेमिफाइनलमा प्रवेश गरेको छ । पाकिस्तानमा भइरहेको चौथो संस्करणको ब्लाइण्ड क्रिकेट टी२० विश्वकपको सेमिफाइनलमा पुग्दै इतिहास रचेको हो । यसअघि तीन
                        संस्करणकै ब्लाइण्ड क्रिकेटको टी२० विश्वकप खेलेको नेपाल सेमिफाइनल पुग्न सकेको थिएन । यस पटक...</p>
                    <div className="flex  gap-7 justify-center items-center m-6">
                        <img
                            src={logo}
                            className='h-14 cursor-pointer w-14 rounded-full border-spacing-1 border-solid border-2 border-blue-600'
                            alt="" />
                        <p> <i className='far fa-clock'></i> १९ मिनेट अगाडि</p>
                    </div>
                </div>

                <div className='py-20 flex items-center px-20 bg-slate-200'>
                    <p className='w-full font-bold text-xl text-center' >Advertisement</p>
                </div>

                <div className='flex h-[600px] w-full px-40 py-14 gap-10'>
                    <div className='w-2/3 relative border-spacing-1 border-solid border-2 border-blue-600 cursor-pointer'>
                        <img
                            src="https://www.onlinekhabar.com/wp-content/uploads/2024/11/468793078_985046260286690_8416068294286113387_n-e1732982840685.jpg"
                            alt=""
                            className='w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105'
                        />
                        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end items-start p-10'>
                            <p className='text-white font-bold text-4xl'>
                                क्रिकेट टी२० विश्वकपको सेमिफाइनलमा प्रवेश
                            </p>
                            <div className="flex  gap-7 items-center mt-4  ">
                                <img
                                    src={logo}
                                    className='h-14 cursor-pointer w-14 rounded-full border-spacing-1 border-solid border-2 border-blue-600'
                                    alt="" />
                                <p className='text-white font-bold'> <i className='far fa-clock'></i> १९ मिनेट अगाडि</p>
                            </div>
                        </div>
                    </div>


                    <div className='overflow-y-scroll w-1/3 '>
                        <div className='flex my-5'>
                            <img src=""
                                className='h-36 w-36 bg-slate-500 rounded-lg mr-3' alt="" />
                            <p>काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट टी२० विश्वकपको
                                सेमिफाइनलमा प्रवेश गरेको छ । पाकिस्तानमा भइरहेको चौथो संस्करणको ब्लाइण्ड क्रि</p>

                        </div>
                        <div className='flex my-5'>
                            <img src=""
                                className='h-36 w-36 bg-slate-500 rounded-lg mr-3' alt="" />
                            <p>काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट टी२० विश्वकपको
                                सेमिफाइनलमा प्रवेश गरेको छ । पाकिस्तानमा भइरहेको चौथो संस्करणको ब्लाइण्ड क्रि</p>

                        </div>
                        <div className='flex my-5'>
                            <img src=""
                                className='h-36 w-36 bg-slate-500 rounded-lg mr-3' alt="" />
                            <p>काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट टी२० विश्वकपको
                                सेमिफाइनलमा प्रवेश गरेको छ । पाकिस्तानमा भइरहेको चौथो संस्करणको ब्लाइण्ड क्रि</p>

                        </div>
                        <div className='flex my-5'>
                            <img src=""
                                className='h-36 w-36 bg-slate-500 rounded-lg mr-3' alt="" />
                            <p>काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट टी२० विश्वकपको
                                सेमिफाइनलमा प्रवेश गरेको छ । पाकिस्तानमा भइरहेको चौथो संस्करणको ब्लाइण्ड क्रि</p>

                        </div>
                    </div>

                </div>

                <section className='mainpage-news w-full px-40 py-14 gap-10 '>
                    <h1 className='text-blue-700 font-bold text-4xl'>समाचार </h1>
                    <div className="flex">
                        <div>
                            <div className="flex gap-5 bg-slate-50">
                                <img className='w-1/3 h-96 border border-indigo-600' src="https://www.onlinekhabar.com/wp-content/uploads/2025/01/dryriser-1024x590.jpg" alt="news" />
                                <div className="w-1/3 flex flex-col justify-center">
                                    <h1 className='font-bold text-2xl'>काठमाडौं महानगरमा दमकल जान नसक्ने गल्लीमा ‘ड्राइराइजर’</h1>
                                    <h5 className='mt-10'>१ माघ, काठमाडौं। आगलागी हुँदा दमकल जान नसक्ने साँघुरा सडक तथा गल्लीमा काठमाडौं महानगरपालिकाले ड्राइराइजर जडान गरेको छ । महानगरको विपद व्यवस्थापन विभागले वडासँग मिलेर ड्राइराइजर जडान गरेको हो...</h5>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                    <div className='py-20 flex items-center my-5 px-20  bg-slate-50'>
                        <p className='w-full font-bold text-xl text-center' >Advertisement</p>
                    </div>
                    <div className=" bg-gray-100 rounded-sm" style={{ width: '850px' }}>
                        <div className="flex flex-wrap">
                            {[...Array(8)].map((_, index) => (    
                                <div className="flex  my-5 w-full md:w-1/2" key={index}>
                                    <img
                                        src=""
                                        className="h-24 w-36 bg-slate-500 rounded-lg mr-3"
                                        alt=""
                                    />
                                    <p>
                                        काठमाडौं । नेपाली दृष्टिविहिन क्रिकेट टोली पहिलो पटक ब्लाइण्ड क्रिकेट....
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                </section>


            </main>
        </>
    )
}

export default Home