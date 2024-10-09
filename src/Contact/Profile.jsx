import Address from '../Home/Address';
import GeneralDetails from '../Home/GeneralDetail';
import PersonalDetails from './PersonalDetails';
import './Profile.css';
import React, { useState } from 'react';
import SocialDetails from './SocialDetail';
import Select from './Select'; // Adjust the import based on your Select component's file name

export const Profile = () => {
    const [theme, setTheme] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    

    const languages = [
        { label: 'Hindi', value: 'hindi', img: 'RK.png' },
        { label: 'English', value: 'english', img: 'Upload.png' }
    ];

    const tabs = [
        { name: 'General', component: <GeneralDetails /> },
        { name: 'Personal', component: <PersonalDetails /> },
        { name: 'Address', component: <Address /> },
        { name: 'Social', component: <SocialDetails /> }
    ];

    const Theme = [
        {

        }
    ]

    return (
        <>
            <h1>Hello</h1>
            <div className="row g-0 align-items-center justify-content-center ">
                <div className="col-10 row g-0 border rounded-3">
                    <div className="col-4">
                        <div className="text-center mb-2">
                            <img src="RK.png" alt="Profile for user" className="img-fluid p-2 profile-img" />
                            <h1>CodeDiggy</h1>
                        </div>
                        <div className='row g-0 justify-content-end my-2 px-3'>
                            <input type='file' className='d-none' id='file-input' onChange={(e) => {
                                console.log(e.target.files);
                            }} />
                            <label htmlFor="file-input" className='col-2 text-center profile-img-action-btn p-2'>Change</label>
                            <button className='col-2 offset-1 p-1 profile-img-action-btn'>Delete</button>
                        </div>
                        <div className='border-top p-3'>
                            <h5 className='mb-2'>Account Settings</h5>
                            <div className='mt-3'>
                                <h6>Language</h6>
                                <Select options={languages} onChange={setSelectedLanguage} />
                            </div>
                            <div className='row g-0 mt-4 themes-container'>
                                <h6 className='mb-3'>Themes</h6>
                                <div className='col-2'  onClick={() => setTheme(1)}>
                                    <button className=' container theme-1-box' 
                                    //  onDoubleClick={()=>{
                                    //    const a = 84 
                                    //    const b = 236
                                    //    const c = 70

                                    //    document.body.style.background = "rgb("+a+","+b+","+c+")"

                                    // }}   
                                    onClick={() => setTheme({style : " bac"})}></button>
                                </div>
                                <div className='col-2 offset-1' onClick={() => setTheme(2)}>
                                <button className=' container theme-2-box' 
                                //  onDoubleClick={()=>{
                                //        const a = 255    
                                //        const b = 25
                                //        const c = 51

                                //        document.body.style.background = "rgb("+a+","+b+","+c+")"

                                //     }} 
                                      onClick={() => setTheme({style : " bac"})}></button>
                                </div>
                                <div className='col-2 offset-1' onClick={() => setTheme(3)}>
                                <button className=' container theme-3-box' 
                                //  onDoubleClick={()=>{
                                //        const a = 31 
                                //        const b = 17
                                //        const c = 240

                                //        document.body.style.background = "rgb("+a+","+b+","+c+")"

                                //     }}  
                                     onClick={() => setTheme({style : " bac"})}></button>
                                </div>
                                <div className='col-2 offset-1' onClick={() => setTheme(4)}>
                                <button className=' container theme-4-box'  
                                // onDoubleClick={()=>{
                                //        const a = 226 
                                //        const b = 15
                                //        const c = 198

                                //        document.body.style.background = "rgb("+a+","+b+","+c+")"

                                //     }}  
                                     onClick={() => setTheme({style : " bac"})}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 border-start'>
                        <div className="row g-0 profile-tabs">
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`col-3 py-3 ${activeTab === index ? 'active-tab' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.name}
                                </div>
                            ))}
                        </div>
                        <div className="row g-0 mt-4 p-3 ">
                            {tabs[activeTab].component}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
