import Link from 'next/link'
import Image from 'next/image'
import { Post } from '../typings'
import { urlFor } from "../sanity"

interface Props {
    posts: any[]
}

export default function Posts({ posts }: Props) {
    return (
        <>
            <h1 className='uppercase text-2xl font-bold ml-5 mt-10'></h1>
            <div className='mt-5 flex flex-col justify-center items-center px-10 space-y-5'>

                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 p-4 md:p-6 '>
                    {posts.map((post) => (
                        <Link key={post._id} href={`/post/${post.slug.current}`}>
                            <div className='border rounded-lg group cursor-pointer overflow-hidden shadow-xl'>
                                <Image
                                    className='h-44 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                                    src={urlFor(post.mainImage).url()!}
                                    alt={post.title}
                                    width={580}
                                    height={240}
                                />
                                <div className='flex justify-between p-3 bg-white'>
                                    <div>
                                        <p className='text-xl font-bold'>{post.title}</p>
                                        <p className='text-base'>{post.description}...</p>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
