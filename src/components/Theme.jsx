import React, { useState } from 'react'

const Theme = () => {

    const [theme, setTheme] = useState("light")

    const switchTheme = () => {
        if(theme === "light") {
            document.documentElement.setAttribute("data-theme", "dark")
            setTheme("dark")
        } else {
            document.documentElement.setAttribute("data-theme", "light")
            setTheme("light")
        }
    }

    return (
        <div className="switch" >
            <input type="checkbox" name="switch" role="switch" onClick={switchTheme} /> Dark Mode
        </div>
    )
}

export default Theme