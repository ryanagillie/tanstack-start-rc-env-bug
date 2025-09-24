import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const greeting = createServerFn({ method: 'GET' }).handler(() => {
  console.log('env var:', process.env.GREETING)
  return process.env.GREETING;
})

export const Route = createFileRoute('/')({
  loader: async () => {
    return {
      greeting: await greeting(),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { greeting } = Route.useLoaderData()
  console.log(greeting)

  return <div>Greeting from server function env variable: {greeting}</div>
}
