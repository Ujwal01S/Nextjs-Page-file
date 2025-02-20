export default function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

// when data keeps on changing you use getServerSideProps instead of getStaticProps this function only runs on server not in build process

// in the end this function also pre-renders the page but on the fly on server also regarded as server-side rendering(SSR)
export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
