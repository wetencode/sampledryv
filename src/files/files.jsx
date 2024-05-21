
import './files.css';
import { IoIosRadioButtonOff } from "react-icons/io";
import wordImf from './../assets/word.png';
import xlImg from '../assets/xl.jpg';
import playImg from '../assets/play.jpg';
import { PiArrowsInLineVerticalFill } from "react-icons/pi";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { useState } from 'react';



export const Files = ({ showDetails})=>{

    const d = new Date();
    const dateNumber = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();

    const [eyekon, setEykon] = useState(false);
    const showIcon = ()=> setEykon(true);
    const hideIcon = ()=> setEykon(false);


    const [eyekon2, setEykon2] = useState(false);
    const showIcon2 = ()=> setEykon2(true);
    const hideIcon2 = ()=> setEykon2(false);



    const [eyekon3, setEykon3] = useState(false);
    const showIcon3 = ()=> setEykon3(true);
    const hideIcon3 = ()=> setEykon3(false);


    const [eyekon4, setEykon4] = useState(false);
    const showIcon4 = ()=> setEykon4(true);
    const hideIcon4 = ()=> setEykon4(false);

    const [eyekon5, setEykon5] = useState(false);
    const showIcon5 = ()=> setEykon5(true);
    const hideIcon5 = ()=> setEykon5(false);



    return(<>
        
        <div className='file_wrapper__kjhgYUJkfg'>

            
            <div className="eachitem_info" onMouseOver={showIcon} onMouseLeave={hideIcon} onClick={showDetails}>
                <div className="name">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span className='radio_toggle'>
                        {eyekon ? <IoIosRadioButtonOff /> : null }
                    </span>

                    &#160;
                    &#160;


                    <span className="typeoffile">
                        <img 
                            alt='typpe'
                            src='https://res-1.cdn.office.net/files/fabric-cdn-prod_20240312.001/assets/item-types/32/folder.svg'
                            className='teyep'
                        />
                    </span>


                    &#160;&#160;

                    <span className="file_name">Attachments</span>
                </div>


                <div className="modified">

                    {eyekon ? <HiMiniEllipsisHorizontal /> : null }
                    &#160;&#160;
                    { eyekon ? <PiArrowsInLineVerticalFill /> : null}
                    &#160;&#160;

                    <span className='configured_date__'>
                        {`${dateNumber - 1}`}/{`${month + 1}`}/{`${year}`}
                    </span>
                </div>



                <div className="size">
                    <span className='configured_date__'>
                        
                        {/* 1.01 MB */}
                        0.00
                    </span>
                </div>


                <div className="sharing">
                    <span className="file_name" style={{color:'#444'}}>Private</span>
                </div>
            </div>





            


            <div className="eachitem_info" onMouseOver={showIcon2} onMouseLeave={hideIcon2} onClick={showDetails}>
                <div className="name">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span className='radio_toggle'>
                    {eyekon2 ? <IoIosRadioButtonOff /> : null }
                    </span>

                    &#160;
                    &#160;


                    <span className="typeoffile">
                        <img 
                            alt='typpe'
                            className='teyep'
                            src='data:image/png;base64,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'
                        />
                    </span>


                    &#160;&#160;

                    <span className="file_name">Purchase.pdf</span>
                </div>


                <div className="modified">
                {eyekon2 ? <HiMiniEllipsisHorizontal /> : null }
                    &#160;&#160;
                    { eyekon2 ? <PiArrowsInLineVerticalFill /> : null}
                    &#160;&#160;
                    <span className='configured_date__'>
                        {`${dateNumber - 1}`}/{`${month + 1}`}/{`${year}`}
                    </span>
                </div>



                <div className="size">
                    <span className='configured_date__'>
                        1.01 MB
                    </span>
                </div>


                <div className="sharing">
                    <span className="file_name" style={{color:'#444'}}>Private</span>
                </div>
            </div>









            <div className="eachitem_info" onMouseOver={showIcon3} onMouseLeave={hideIcon3} onClick={showDetails}>
                <div className="name">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span className='radio_toggle'>
                        {eyekon3 ? <IoIosRadioButtonOff /> : null }
                    </span>

                    &#160;
                    &#160;


                    <span className="typeoffile">
                        <img 
                            alt='typpe'
                            className='teyep'
                            src={wordImf}
                        />
                    </span>


                    &#160;&#160;

                    <span className="file_name">Document.docx</span>
                </div>


                <div className="modified">
                {eyekon3 ? <HiMiniEllipsisHorizontal /> : null }
                    &#160;&#160;
                    { eyekon3 ? <PiArrowsInLineVerticalFill /> : null}
                    &#160;&#160;
                    <span className='configured_date__'>
                        {`${dateNumber - 1}`}/{`${month + 1}`}/{`${year}`}
                    </span>
                </div>



                <div className="size">
                    <span className='configured_date__'>
                        34.10 KB
                    </span>
                </div>


                <div className="sharing">
                    <span className="file_name" style={{color:'#444'}}>Private</span>
                </div>
            </div>


















            <div className="eachitem_info" onMouseOver={showIcon4} onMouseLeave={hideIcon4} onClick={showDetails}>
                <div className="name">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span className='radio_toggle'>
                    {eyekon4 ? <IoIosRadioButtonOff /> : null }
                    </span>

                    &#160;
                    &#160;


                    <span className="typeoffile">
                        <img 
                            alt='typpe'
                            className='teyep'
                            src={xlImg}
                        />
                    </span>


                    &#160;&#160;

                    <span className="file_name">Specification.xlsx</span>
                </div>


                <div className="modified">
                {eyekon4 ? <HiMiniEllipsisHorizontal /> : null }
                    &#160;&#160;
                    { eyekon4 ? <PiArrowsInLineVerticalFill /> : null}
                    &#160;&#160;
                    <span className='configured_date__'>
                        {`${dateNumber - 1}`}/{`${month + 1}`}/{`${year}`}
                    </span>
                </div>



                <div className="size">
                    <span className='configured_date__'>
                        71.59 KB
                    </span>
                </div>


                <div className="sharing">
                    <span className="file_name" style={{color:'#444'}}>Private</span>
                </div>
            </div>


















            <div className="eachitem_info" onMouseOver={showIcon5} onMouseLeave={hideIcon5} onClick={showDetails}>
                <div className="name">
                    &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span className='radio_toggle'>
                    {eyekon5 ? <IoIosRadioButtonOff /> : null }
                    </span>

                    &#160;
                    &#160;


                    <span className="typeoffile">
                        <img 
                            alt='typpe'
                            className='teyep'
                            src={playImg}
                        />
                    </span>


                    &#160;&#160;

                    <span className="file_name">Presentation.mp4</span>
                </div>


                <div className="modified">
                {eyekon5 ? <HiMiniEllipsisHorizontal /> : null }
                    &#160;&#160;
                    { eyekon5 ? <PiArrowsInLineVerticalFill /> : null}
                    &#160;&#160;
                    <span className='configured_date__'>
                        {`${dateNumber - 1}`}/{`${month + 1}`}/{`${year}`}
                    </span>
                </div>



                <div className="size">
                    <span className='configured_date__'>
                        19.20 MB
                    </span>
                </div>


                <div className="sharing">
                    <span className="file_name" style={{color:'#444'}}>Private</span>
                </div>
            </div>

























        </div>

    </>)
};