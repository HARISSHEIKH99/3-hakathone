import { createClient } from 'next-sanity'

import { apiVersion } from '../env'

export const client = createClient({
  projectId: "hiha7y11",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skghNLnphGqpqQyZRBH4WdZI6s11buGG1oR3q1MuNBkJ9r0wlnzdkoO8qXaWvo3W2QZNgqjAlOthtya1A2BYGnjjotgzjyUlrvcAooa4HOzWvytkqIHMUumczVcs60zXaqwU6eokqqFNHiYezyJlnByv0M2oaInNrYSVCFr7ZUDR5fyjY56v"
})
