import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getTemas } from '../api/temas';
import { CoursesNavigation } from '../components/CoursesNavigation';
import { LoadingData } from '../components/LoadingData';
import { ThemeHeader } from '../components/ThemeHeader'

export const ThemesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
    //     setTimeout( () => {
    //          getTemas();
    //         setIsLoading(false);
    
    // }, 1000)
    // const apiData = getTemas()
    //     // await getTemas();
    //     setData(apiData)
    //    setIsLoading();

    const fetchSmth = async () => {
        const apiData = await getTemas();
        setData(apiData);
        setIsLoading(false);
    }

    fetchSmth();
    });

  return (
    <div>
        <CoursesNavigation />
        <h1>{isLoading}</h1>
        <div>
            <ThemeHeader />
            {isLoading ? 
            <LoadingData /> :
            <div data-testid={'theme-modules-container'}>Theme modules</div>     
        }
        </div>
    </div>
  )
}



