
import { Files } from '../files/files';
import './content.css';

export const Content = ({ showDetails })=>{
    return(<>


        <h3 className='h333'>For you</h3>
        <div className="tileViewport_9ef98d41" onClick={showDetails}>
            <img 
                src='https://res-1.cdn.office.net/files/sp-client/odsp-media-9dae1169/images/staticcards/accessmemoriescard.svg'
                alt='memories'
                className='devices'
            />

            <div className='p1'>Access your memories</div>
            <div className='p2'>On any device, anywhere, anytime</div>
        </div>



        <h3 className='h333' style={{ marginTop:'2em'}}>Files</h3>  

        <Files showDetails={showDetails}/>

        
    </>)
};