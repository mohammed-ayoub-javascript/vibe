import { caller } from "@/trpc/server";

const Home =  async () => {
  console.log("SERVER COMPONENT");

  const data = await caller.createAI({text : "Hello"})
  
  return (
    <div>
      {data.greeting}
    </div>
  )
}

export default Home
