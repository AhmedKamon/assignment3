import Header from "../Components/Header"
import Visibility from "../Components/Visibility"
import Local from "../Components/Local"
import Cost from "../Components/Cost"
import Bright from "../Components/Bright"
import Review from "../Components/Review"
import { sanityClient,urlFor } from "../sanity"



export default function Home( {properties}) {
  console.log(properties)
  return (
    <div >
      <Header/>
      <Visibility/>
      <Local/>
      <Cost/>
      <Bright/>
      <Review properties={properties} />
    </div>
  )
}

const query = `*[_type == "property"]{
  title,
  about,
  slug,
  mainImage,
  description
}`;

export const getStaticProps = async () =>{
  const properties = await sanityClient.fetch(query)

  return {
      props: {
          properties
      }
  }
}
