import Link from "next/link";
export default function Home() {
    return (
        <div>
          <h1>Welcome to Home</h1>
          <Link href='/profile'>Profile</Link>
          <Link href='/about'>About</Link>
          <Link href='/products'>products</Link>
          <Link href='/products/1'>first product</Link>
          <Link href='/products/1/reviews'>First Product Review</Link>
          <Link href='/about'>About</Link>
        </div>
  )
}