type Props = {
  params: {
        reviewId: string
  }
}

export default function ReviewDetails({ params }: Props) {
  return (
        <h1>Review about product {params.reviewId}</h1>
  )
}
