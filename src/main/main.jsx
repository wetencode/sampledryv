
import './main.css';
import { VscSearch } from "react-icons/vsc";
import { IoDiamondOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiQuestionMarkThin } from "react-icons/pi";
import { LiaUserCircle } from "react-icons/lia";
import { BsSortDown } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { GiSplitArrows } from "react-icons/gi";
import { Content } from '../content/content';


export const Main = ({ showDetails })=>{
    return(<>
        <main>
            
            <div className="toooppp">

                <div className='top_main'>

                    <div></div>

                    <div className='serch_cont'>
                        <VscSearch  style={{
                            marginLeft:'1em'
                        }}/>
                        <input type='search' placeholder='Search everything' className='serch_input' />
                    </div>


                    <div className='top_icon___s_kjhj'>
                        <span className='icccnav'>
                            <IoDiamondOutline style={{ fontSize:'18px', color:'#424242', cursor:'pointer' }} onClick={showDetails}/>
                        </span>

                        <span className='icccnav'>
                            <IoSettingsOutline style={{ fontSize:'18px', color:'#424242', cursor:'pointer' }} onClick={showDetails}/>
                        </span>

                        <span className='icccnav'>
                            <PiQuestionMarkThin style={{ fontSize:'18px', color:'#424242', cursor:'pointer' }} onClick={showDetails}/>
                        </span>


                        <span className='icccnav'>
                            <LiaUserCircle style={{ fontSize:'22px', color:'#424242', cursor:'pointer' }} onClick={showDetails}/>
                        </span>
                    </div>
                </div>



                <div className='sortt'>
                    <span className='jkpoi' onClick={showDetails}>
                        <BsSortDown />
                        &#160;
                        <span>Sort</span>
                        &#160;
                        <RxCaretDown />
                    </span>



                    <span className='jkpoi' onClick={showDetails}>
                        <HiOutlineBars3CenterLeft />
                        &#160;
                        <RxCaretDown />
                    </span>



                    <span className='jkpoi' onClick={showDetails}>
                        <GiSplitArrows />
                        &#160;
                        <span>Details</span>
                    </span>
                </div>
                

            </div>



            

            <div className='pos_fur_navtop_lkjhkhiloIUYuj'>
            {/* this is the code replacing the fixed position */}
            </div>



            <div style={{
                marginLeft:'2em'
            }}>
                <Content showDetails={showDetails}/>
            </div>

        </main>
    </>)
};