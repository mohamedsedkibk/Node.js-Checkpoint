import React from 'react'
import Image from "next/image";
const about= () => {
  return (
    <div>
      <p className='flex flex-row justify-center'> I am a highly skilled and passionate software developer with extensive experience in designing, developing, and maintaining software applications. Proficient in a wide range of programming languages and technologies, I have a strong background in both front-end and back-end development, ensuring seamless integration and optimal performance of web and mobile applications. With a deep understanding of software development life cycles and agile methodologies, I consistently delivers high-quality solutions that meet client needs and industry standards. A problem-solver at heart, I am  committed to continuous learning and staying up-to-date with the latest industry trends to drive innovation and excellence in every project.</p>
      <div className='flex flex-row justify-center mt-5'>
      <Image  src=" https://th.bing.com/th/id/OIP.vKxjXbKTRR-3wdAWW7aWJAHaKs?w=200&h=290&c=7&r=0&o=5&dpr=1.3&pid=1.7" width={400} height={400}/>
      </div>
     
    </div>
  )
}

export default about