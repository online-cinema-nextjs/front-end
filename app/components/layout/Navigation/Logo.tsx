import Image from 'next/image'
import Link from 'next/link'

import logoImage from '@/assets/images/logo.svg'

const Logo = () => {
	return (
		<Link href='/' className='px-layout mb-10 block'>
			<Image
				src={logoImage}
				alt='Online Cinema'
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
