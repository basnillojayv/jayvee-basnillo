import { getPayload } from 'payload'
import config from '@payload-config'
const run = async () => {
  const payload = await getPayload({ config })
  await payload.updateGlobal({ slug: 'homepage', data: { heroIntro: 'Designing brands, websites, and digital experiences.' } })
  const hp = await payload.findGlobal({ slug: 'homepage', depth: 0 })
  console.log('RESULT heroIntro=' + hp.heroIntro)
}
await run()
