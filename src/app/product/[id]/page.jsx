
/*
    * Responsible for rendering component
    * Responsible for fetching product data
*/
export default async function Shop({params}) {
    const dummyFetch = await "data from server"

      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p>hello its product with this id: {params.id}</p>
        </main>
      )
    }
    