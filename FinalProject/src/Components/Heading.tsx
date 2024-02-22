import {ReactElement} from 'react'

type HeadingProps = { title : string }

const Heading = ({ title }: HeadingProps): ReactElement  => {
    return (
      <h1 className='title lg:container lg:mx-auto font-bold  text-3xl dark:text-white mt-10 mb-10 pl-10'>{ title }</h1>
    )
}


export default Heading