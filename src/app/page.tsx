'use client'
import useMousePosition from "./utils/useMousePosition";
import {motion} from 'framer-motion'
import {useState} from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  const {x, y} = useMousePosition();
  const size = isHovered ? 400 : 20;

	return (
		<main className='h-screen'>
			<motion.div
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{type: 'tween', ease: 'backOut'}}
				className='absolute w-full h-full flex items-center justify-center text-black text-[64px] font-semibold leading-[66px] bg-[#ec4e39]'
				style={{
					maskImage: `url('/mask.svg')`,
          maskRepeat: `no-repeat`,
          maskSize: `20px`
				}}
			>
				<p onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} className='w-[1000px] p-[40px]'>
					A visual designer - with skills that haven&apos;t been replaced by A.I
					(yet) - making good shit only if the paycheck is equally good.
				</p>
			</motion.div>

			<div className='w-full h-full flex items-center justify-center text-[#afa18f] text-[64px] font-semibold leading-[66px]'>
				<p className='w-[1000px] p-[40px]'>
					I&apos;m a <span className='text-[#ec4e39]'>selectively skilled</span>{' '}
					product designer with strong focus on producing high quality &
					impactful digital experience.
				</p>
			</div>
		</main>
	);
}
