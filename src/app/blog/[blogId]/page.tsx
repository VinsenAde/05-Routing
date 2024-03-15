type Props = {
  params: {
        blogId: string
  }
}

export default function Blogs({ params }: Props) {
  return (
        <h1>Details about product {params.blogId}</h1>
  )
}
