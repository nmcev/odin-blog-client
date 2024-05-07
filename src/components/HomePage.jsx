import { Spotlight } from './util/Spotlight'
import { Home } from './Home'
import RecentPosts from './RecentPosts'
export default function HomePage() {
    return (
        <>

            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
            />
            <Home />
            <RecentPosts />
        </>
  )
}
