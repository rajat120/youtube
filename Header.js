import React ,{useState, useEffect} from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
const [result, setresult] = useState('');
const [inputsearch, setinputsearch] = useState('');

const base_url="https://www.googleapis.com/youtube/v3/search";
const API_KEY="AIzaSyBk1l2mjx3SgHz_7l2y-CHFhQ9Gf3eFqIQ";
 
const search_url= `{${base_url}?key=${API_KEY}&part=snippet&maxResults=1&order=date&q=tom}`;
console.log(search_url);
    useEffect(() => {
        const fetchData = async () =>{
            const jsonresult=  await fetch(search_url);
            console.log(jsonresult);
            const jsdata = await jsonresult.json();
            console.log(jsdata);
            
        }
        fetchData();
                

            }, [])
        
   
        
const Changeinputbox =(event) =>{
    const inputsearch= event.target.value;
    console.log(inputsearch);
  
}
  


    return (
        
        <div className="header">
         <MenuIcon /> 
        
         <img  className="header__logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABBEAABAwMABQYJCwMFAAAAAAABAAIDBAURBgcSITETMkFxgZEUIlFSYXKxssE2QnSCg5OhwtHS4TNUohYXI2Jj/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EADMRAQACAQICCAMIAgMAAAAAAAABAgMEERIxBRQhQVFhkbEiceEGExUyNIGh0cHwI0JS/9oADAMBAAIRAxEAPwDuKAgICAgICAgICAgICAgICAgICBlBGQgnKAgZQEBBGQgnKAgICAghxwMoNRu+sG00EjoaZslbI04JiIDAfWPHsyq19VSvZHa7Om6E1GWvFf4Y8+bCTaz5s/8AFamY8rpj+i1TrJ/8r0fZ6vfkn0+rzP1mXI8ygpG+sXH4rHrlvBtj7P4O+8/wtO1k3k82moB9m8/mUdbv4Mo6B0sc5t6x/Sg6xr4fmUQ6oj+5R1rIyjoLSefr9FB1iX3o8E+5P6qOtZE/gej8/X6I/wBw7/51L9z/ACnWsifwPR+fr9EjWJfuk0h+x/lOtZD8D0fn6/RUNYt8HzaM/ZH9VPWsiPwPSefr9FY1kXscYaE9cbv3J1vIxnoHS+NvWP6XG6y7qOfR0R6g8fmU9bv4MZ+z+n7rT/H9LzNZ9WD49rgd1SkfArLrlvBrn7PYu7JPoyFHrOpXvDay3TRg8XRvD8dhws66yP8AtDRk+z94j/jvE/Ps/tudsudJdaYVFBM2WI7iRxB8hHQVapet43rLh59PlwX4MkbS9iyaXP8AWhfZKaGG1Uzy107ducjjscA3t39yp6rJMfDD0HQWjre057xy5fPxcyGAMKi9SZQMoGUDKBlAygZQMoGUDKBlAygzGit7lsd3iqGuPIPIbOzoc3+OK2Ysk47bqeu0ldVhmk8+75/V3FrtpoLTkHeCF1ux4HaXEtOqp1TpXcC52WxvEbR5A0Ae3K5eed8kvddF44po6RHf2+rA5C0ugZCBkIGQgZQMhAyEDIQMhAyEDIQMhAyEDIQdz0PrPCtGLbLK/L+QDXE9Jb4ufwXWw23xxMvBdI4/u9XkrEd/v2uMX6Xlr5cJM52qqT3iuZfttL2ulrw4KR5R7PDlYt5lAygZQQTuQbhWaBV5tlNcLW/wpssLJHwnxXtJGTjoI7irE6a3DxV7XGx9M4oy2x5o4dp59zUpY3wyOjmY6ORhw5jxgjsVeY27JditotHFWd4U5RJlAygZQMoGUDKDpOiF1EGjtJE52C3bH+blcxX2pDzXSOnm2ptMeXtDnVY7brKh3nSuPeSqk83occbViPKFlQzEBAQEH0Fo58n7b9Fj90LrY/yQ8Bq/1F/nPusX3Ry3XtmK2mY54HiyDc5vUUvjrfmnTazNpp3xzt7ejml/0AuFvLn28mri8w4Eg+DuzuVLJprR2x2vSaXprFl+HL8M/wAfRqDgWvcx7S1zThzXDBafIQq7tRMTG8IUAgICAgytDXPhpWRjOBn2lZxO0KuTFxW3YypOKiX1z7VErFeULe0oZG0gbSBtIGUH0Jo58n7b9Fj90Lq4/wAkPAav9Rf5z7sis1dS+Nsjdl4yEGnabUOjzIOUvb42OIxG9pxP9XG8+xaM1ce3xOp0dk1kW20/L+P3chn5ETPFMZDDnxDKAHEenG5c+du57Ck24Y4ufkt7ShmbSBtIGUQ9MP8ATCnZhPNYqsipmB6HuH4p3pp+WFrKMjKBlAygZUD6G0b+T1s+ixe6F1cf5YeB1f6i/wA591d2vNvs9Py9yqWQM6A4+M7qHEqbXrSN5Y4NPlz24cdd3NNIdZdVU7UNji8Fi4cvKA6Q9Q4Dtz2KpfUzP5XotL0HSnxZ53nwjl+7RaieWpnfPUSvlmfvdI92XO6yqszvO8u5SlaV4axtC3lGRlAygZQMoPbTxvdC1wG459qmIarWiJW7uwxXaujPzKmRv+RU2j4pRgtvipPlHs8ixbRAQEBBvNTrGqobTSW+zwiF0MDI31EoBOQ0A7I4dp7lZnUTFYrVxa9DUtltkzTvvMztH+Wl1VVUVs7qismfNM/nPkdklV5mZnd2KUrSvDSNo8FrKhkICAgICAhu3jRi0eGWSnnxzi/8HuHwVjHTesS42s1P3eea/L2a9pjEafSq6xkYxUuPYd49qwyxteV7Q24tLjny+jDrWtCAgICAgICAgICAgIGUHbtAqAf6QtrnDBdGX8PK4n4q/hrPBDx3Seaet32/3saTrbtbqW+RXFjcRVcYDj/6N3fi3HctOprtbd1+hM/HgnFPOvtP1aJtKu7RtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSC/RU01dVw0lM3almeGMHpKRG87ML5K46za3KH0bQUrKGhp6SEYjgibG3d0AYXUiNo2eAy5JyXm8857Vi+2ekvlufQ1zC6NxyCOcxw4OHpUWrFo2lt0+ovp8kZKc3Irzq4vtBKTRRtr4M7nRENfj0tJ9mVTtgvHLteo0/TGnyx8c8M+fL1a9UWK8026e01zD9HcfYFq4LR3LtdVgtyvHrDyPpamPn007D/ANonD4KNpbovWeUx6rTg5vOBHWETvvyU7QHSFCdpNtvnDvRO0+COUZ57e9DaTlG+c3vQ2nwTtt84IbSkHPDeiO1WyKV/Mikd6rCVO0om0R3vQy2XGT+nbq1/q07z8FPDbwa5zYo53j1hkaLQ/SKte1sNpqGg/OlbyYHWSsoxXnlDRk6Q0tI+K8ft2un6D6CxaPvFbXPbPcCMAt5kII37Pp471axYeDtnm870h0pbUx93Tsr7/wC+DdMBb3JSgICCMelBBbnjgpsKTBEeMbD9UKNoTxW8VBpKc8aeI/UCbQnjt4o8Bpf7aH7sJwwn7y/jIKKl/tofuwm0I+8v4yqFLAOEEQ+oE2g47eKsRtHBrR1BNoYzMyqx6VIYQSgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP//Z" alt="youtube logo">
    </img> 
 
    <input value={inputsearch} className="header_inputtext" type="text" placeholder="Search" onChange={Changeinputbox}></input>
    < SearchSharpIcon />
  
    <VideoCallSharpIcon />
    <AppsSharpIcon />
    <NotificationsIcon />
    <AccountCircleIcon />
</div>
       
        
    )
}

export default Header
