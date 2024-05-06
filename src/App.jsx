import 'axios'
import Header from './components/Header'
import { SpotlightPreview } from './components/SpotlightPreview'
import { Spotlight } from './components/Spotlight'



function App() {
  return (
    <div className="h-dvh w-full  md:items-center md:justify-center bg-gray-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Header />
      <SpotlightPreview /> 
      

</div>
    
  )
}

export default App
