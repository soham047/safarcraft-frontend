import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/home'
import Layout from './layout'
import CostEstimator from './pages/cost'
import Gallery from './pages/gallery'
import Itinerary from './pages/itinerary'
import SimilarPlaces from './pages/place'
import About from './pages/about'
import PackingList from './pages/pack'
import Preloader from './components/preloader'

function AppWithLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cost" element={<CostEstimator />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/similar" element={<SimilarPlaces />} />
        <Route path="/packing" element={<PackingList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  )

  return loading ? <Preloader /> : <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithLoader />
  </StrictMode>
)
