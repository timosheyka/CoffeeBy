export default function Home({ data }: { data: { message: string } }) {
  return (
    <>
      <h1>${`I am from next + data - ${data.message}`}</h1>
    </>
  );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:4000`)
    const data = await res.json()
    console.log(data.message);
    
   
    // Pass data to the page via props
    return { props: { data } }
}