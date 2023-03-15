import React from 'react'
import { Link, NavLink, Switch, Route,Routes } from "react-router-dom";
import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
        <>
         <div>
            <Link to="/">Index</Link>
            <NavLink to="/bgcolor/:colorname" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}>BackgroundColor Change</NavLink>
            <NavLink to="calculator" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}>Calculator</NavLink>
        </div>
            <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact  path="/bgcolor/:colorname" element={<BackgroundColorChanger/>} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
        </>
    )
}
