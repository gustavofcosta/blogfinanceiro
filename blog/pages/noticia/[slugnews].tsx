import { sanityClient, urlFor } from "../../sanity"
import Header from "../../components/Header"
import { Noticia, Prices } from '../../typings'
import { GetStaticProps } from "next"
import PortableText from "react-portable-text"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import Footer from "../../components/Footer"
import Price from "../../components/Price"
import Head from "next/head"

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

interface Props {
    noticia: Noticia;
    filteredCoins: [Prices]
}

function Noticia({ noticia, filteredCoins }: Props) {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>()


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(() => {
            console.log(data)
            setSubmitted(true)
        }).catch((err) => {
            console.log(err)
            setSubmitted(false)
        })
    }

    return (
        <main>
            <div>
                <Price filteredCoins={filteredCoins} />

                <Head>
                    <title>{noticia.title}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="description" content={noticia.description} />
                </Head>


                <Header />

                <img className="w-full h-40 object-cover" src={urlFor(noticia.mainImage).url()!} alt="" />

                <article className="max-w-3xl mx-auto p-5">
                    <h1 className="text-3xl mt-10 mb-3">{noticia.title}</h1>
                    <h2 className="text-xl font-light text-gray-500">{noticia.description}</h2>

                    <div className="flex items-center space-x-2">
                        <img className="h-10 w-10 rounded-full" src={urlFor(noticia.author.image).url()!} alt="" />
                        <p className="font-extralight text-sm">Blog post by {" "}<span className="text-red-600 font-semibold">{noticia.author.name}</span> - Published at {new Date(noticia._createdAt).toLocaleString()}</p>
                    </div>

                    <div className="mt-10 ">
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={noticia.body}
                            serializers={
                                {
                                    h1: (props: any) => (
                                        <h1 className="text-2xl font-bold my-5"
                                            {...props} />),
                                    h2: (props: any) => (
                                        <h2 className="text-xl font-bold my-5"
                                            {...props}
                                        />),
                                    h3: (props: any) => (
                                        <h2 className="text-lg font-bold my-5"
                                            {...props}
                                        />),
                                    p: (props: any) => (
                                        <p className="text-base"
                                            {...props}
                                        />),
                                    li: ({ Children }: any) => (
                                        <li className="ml-4 list-disc">{Children}</li>
                                    ),
                                    link: ({ href, Children }: any) => (
                                        <a href={href} className="text-blue-500 hover:underline">{Children}</a>
                                    ),
                                }
                            }
                        />
                    </div>
                </article>

                <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

                {submitted ? (
                    <div className="bg-yellow-500 flex flex-col p-10 my-10 border-yellow-500 text-white max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold">
                            Thank you for submitting your comment!
                        </h3>
                        <p>
                            Once it has been approved, it will appear below!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                        <h3 className="text-sm text-yellow-500">Enjoyed this article</h3>
                        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
                        <hr className="py-3 mt-2" />

                        <input
                            {...register("_id")}
                            type="hidden"
                            name="_id"
                            value={noticia._id}
                        />

                        <label className="block mb-5">
                            <span className="text-gray-700" >Name</span>
                            <input
                                {...register("name", { required: true })}
                                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring" placeholder="Seu Nome" type="text" />
                        </label>
                        <label className="block mb-5">
                            <span className="text-gray-700" >Email</span>
                            <input
                                {...register("email", { required: true })}
                                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring" placeholder="Seu Email" type="email" />
                        </label>
                        <label className="block mb-5">
                            <span className="text-gray-700" >Comment</span>
                            <textarea
                                {...register("comment", { required: true })}
                                className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring" placeholder="Seu comentário" rows={8} />
                        </label>

                        {/* Erro de Validação */}
                        <div className=" flex flex-col p-5">
                            {errors.name && (
                                <span className="text-red-500"> - O campo nome é obrigatório</span>
                            )}
                            {errors.comment && (
                                <span className="text-red-500"> - O campo comentário é obrigatório</span>
                            )}
                            {errors.email && (
                                <span className="text-red-500"> - O campo Email é obrigatório</span>
                            )}
                        </div>

                        <input type="submit" className="shadow bg-yellow-500 hover:bg-yellow-500 focus:shadow-outline text-white font-bold py-2 px-4 rounded cursor-pointer" />
                    </form >

                )}

                {/* Comments */}
                <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
                    <h3 className="text-4xl">Comments</h3>
                    <hr className="pb-2" />

                    {noticia.comments.map((comment) => (
                        <div key={comment._id}>
                            <p>
                                <span className="text-yellow-500 font-bold">{comment.name}: </span> <span>{comment.comment}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main >
    )
}

export default Noticia;

export const getStaticPaths = async () => {
    const query = `*[_type == "noticia"]{
        _id,
        slugnews {
            current
        }
      }`;

    const noticias = await sanityClient.fetch(query);

    const paths = noticias.map((noticia: Noticia) => ({
        params: {
            slugnews: noticia.slugnews.current
        }
    }))

    return {
        paths,
        fallback: 'blocking',
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "noticia" && slugnews.current == $slugnews] [0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        'comments': *[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true],
        description,
        mainImage,
        video,
        slugnews,
        body
    }`

    const noticia = await sanityClient.fetch(query, {
        slugnews: params?.slugnews,
    });

    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=false')

    const filteredCoins = await res.json()



    if (!noticia) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            noticia,
            filteredCoins,
        },
        revalidate: 60,
    }
}
