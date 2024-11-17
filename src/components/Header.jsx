
import moment from 'moment';
import logoImg from '../assets/logo.png'

const Header = () => {

    return (
        <div className='flex flex-col  items-center'>
           <div>
           <img className='w-[300px] py-3' src={logoImg}/>
           </div>
            <p className='text-sm font-medium text-gray-400'> Journalism Without Fear or Favour</p>
            <p  className='text-sm font-medium pt-1'>{moment().format("ddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;