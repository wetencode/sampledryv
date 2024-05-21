
import './sidebar.css';
import blockEl from './../assets/bb.png';
import { FiPlus } from "react-icons/fi";
import { TbArrowAutofitLeft } from "react-icons/tb";
import { useState } from 'react';
import { PiFolderLight } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";
import { TbPhotoDown } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiTrashSimpleLight } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";


export const SideBar = ({ showDetails })=>{

    const relofressh = ()=> window.location.reload();

    const [iconNAme, setIconName] = useState(false);
    const showIconName = ()=>{
        setIconName(true);
    }

    const hideIconName = ()=> setIconName(false);

    return(<>
        <aside className="one_nav">

            <div className="abc">
                    <div className='logo_one'>
                        <img alt='one' src={blockEl} className='block__ellisis' />
                        &#160;
                        &#160;
                        &#160;
                        <span className='logo_txt' onClick={showDetails}>OneDrive</span>
                    </div>
                    
                    <div className="add_item_ghjFTYUk">
                        <button className='add_new_btn' onClick={showDetails}>
                            <FiPlus className='plus_icon'/>
                            &#160;&#160;&#160;
                            <span>Add new</span>
                        </button>
                    </div>


                    <div className='hover_icon__' onMouseOver={showIconName} onMouseLeave={hideIconName} onClick={showDetails}>
                        {/* {`test@test.com`} */}
                        Charlie Main

                        { iconNAme ? <TbArrowAutofitLeft style={{
                            fontSize:'15px'
                        }}/> : null }
                    </div>




                    <div className='main_lnks__'>
                            <div className='nav_item' onClick={showDetails} style={{marginTop:'7px', fontSize:'13.3px'}}>
                                <PiFolderLight style={{ fontSize:'20px', color:'blue'}} />  
                                &#160;&#160; 
                                <span>My files</span>
                            </div>




                            <div className='nav_item' onClick={showDetails} style={{fontSize:'13.3px'}}>
                                <RxCountdownTimer style={{ fontSize:'20px',}} />  
                                &#160;&#160; 
                                <span style={{fontWeight:'normal'}}>Recent</span>
                            </div>



                            <div className='nav_item' onClick={showDetails} style={{fontSize:'13.3px'}}>
                                <TbPhotoDown style={{ fontSize:'20px',}} />  
                                &#160;&#160; 
                                <span style={{fontWeight:'normal'}}>Photos</span>
                            </div>




                            <div className='nav_item' onClick={showDetails} style={{fontSize:'13.3px'}}>
                                <HiOutlineUsers style={{ fontSize:'20px',}} />  
                                &#160;&#160; 
                                <span style={{fontWeight:'normal'}}>Shared</span>
                            </div>



                            <div className='nav_item' onClick={showDetails} style={{fontSize:'13.3px'}}>
                                <PiTrashSimpleLight style={{ fontSize:'20px',}} />  
                                &#160;&#160; 
                                <span style={{fontWeight:'normal'}}>Recycle bin</span>
                            </div>
                    </div>




                    <div className='hover_icon__'>
                        {/* {`test@test.com`} */}
                        Browse files by

                        {/* { iconNAme ? <TbArrowAutofitLeft style={{
                            fontSize:'15px'
                        }}/> : null } */}
                    </div>


                    <div className='nav_item' onClick={showDetails} style={{
                        marginTop:'8px'
                    }}>
                                <HiOutlineUser style={{ fontSize:'20px',}} />  
                                &#160;&#160; 
                                <span style={{fontWeight:'normal'}}>People</span>
                    </div>
            </div>













            <div className="xyz">
                    <div className='side_footer'>
                        <div className='getStorage' onClick={showDetails}>
                            Get storage for all your files and photos.
                            <div className="cube">
                                <IoDiamondOutline />
                                &#160;&#160;
                                Buy Storage
                            </div>
                        </div>
                    </div>



                    <div className='hover_icon__' style={{
                            fontSize:'14px'
                        }}>
                        {/* {`test@test.com`} */}
                        Storage
                    </div>




                    <div className='progressss__'>
                        <div className='pin'></div>
                    </div>


                    <div className='used_space___MGTYUJd'>
                        <span className='lsdan' onClick={showDetails}>
                            &lt; 0.4 GB
                        </span>
                        &#160;  
                        used of 5 GB (43%)
                    </div>
            </div>

            







        </aside>
    </>)
};