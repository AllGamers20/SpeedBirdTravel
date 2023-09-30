import Image from 'next/image';

function Logo(){
    return <div>
        <Image 
        src={'/img/Logo.png'} 
        alt={'SpeedBird'}
        width={105} 
        height={42}/>
    </div>

}

export default Logo;    