/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId:"hiha7y11", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skghNLnphGqpqQyZRBH4WdZI6s11buGG1oR3q1MuNBkJ9r0wlnzdkoO8qXaWvo3W2QZNgqjAlOthtya1A2BYGnjjotgzjyUlrvcAooa4HOzWvytkqIHMUumczVcs60zXaqwU6eokqqFNHiYezyJlnByv0M2oaInNrYSVCFr7ZUDR5fyjY56v",
});