import React from 'react'
import {
 BrowserRouter,
 Routes,
 Route,
 Navigate,
 Outlet,
} from 'react-router-dom'
import Main from '../pages/main'
import Package1 from '../pages/package/1'
import Package2 from '../pages/package/2'
import Package3 from '../pages/package/3'
import Package4 from '../pages/package/4'
import Package5 from '../pages/package/5'
import Package6 from '../pages/package/6'
import Package7 from '../pages/package/7'
import Package8 from '../pages/package/8'
import Package9 from '../pages/package/9'
import Destination1 from '../pages/destination/1'
import Destination2 from '../pages/destination/2'
import Destination3 from '../pages/destination/3'
import Destination4 from '../pages/destination/4'
import Destination5 from '../pages/destination/5'
import Destination6 from '../pages/destination/6'
import Destination7 from '../pages/destination/7'
import Destination8 from '../pages/destination/8'
import Destination9 from '../pages/destination/9'
import Destination10 from '../pages/destination/10'
import Destination11 from '../pages/destination/11'
import Destination12 from '../pages/destination/12'
import Destination13 from '../pages/destination/13'
import Destination14 from '../pages/destination/14'
import Destination15 from '../pages/destination/15'
import Destination16 from '../pages/destination/16'
import Destination17 from '../pages/destination/17'

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" index element={<Main />} />
    <Route path="/package-1" index element={<Package1 />} />
    <Route path="/package-2" index element={<Package2 />} />
    <Route path="/package-3" index element={<Package3 />} />
    <Route path="/package-4" index element={<Package4 />} />
    <Route path="/package-5" index element={<Package5 />} />
    <Route path="/package-6" index element={<Package6 />} />
    <Route path="/package-7" index element={<Package7 />} />
    <Route path="/package-8" index element={<Package8 />} />
    <Route path="/package-9" index element={<Package9 />} />
    <Route path="/destination-1" index element={<Destination1 />} />
    <Route path="/destination-2" index element={<Destination2 />} />
    <Route path="/destination-3" index element={<Destination3 />} />
    <Route path="/destination-4" index element={<Destination4 />} />
    <Route path="/destination-5" index element={<Destination5 />} />
    <Route path="/destination-6" index element={<Destination6 />} />
    <Route path="/destination-7" index element={<Destination7 />} />
    <Route path="/destination-8" index element={<Destination8 />} />
    <Route path="/destination-9" index element={<Destination9 />} />
    <Route path="/destination-10" index element={<Destination10 />} />
    <Route path="/destination-11" index element={<Destination11 />} />
    <Route path="/destination-12" index element={<Destination12 />} />
    <Route path="/destination-13" index element={<Destination13 />} />
    <Route path="/destination-14" index element={<Destination14 />} />
    <Route path="/destination-15" index element={<Destination15 />} />
    <Route path="/destination-16" index element={<Destination16 />} />
    <Route path="/destination-17" index element={<Destination17 />} />
   </Routes>
  </BrowserRouter>
 )
}

export default Router
