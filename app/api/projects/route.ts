import Projects from '@/components/Projects'

export async function GET () {
  return Response.json(Projects)
}
