import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'

const Logout = () => {
    const navigate = useNavigate()
    const {setSession} = useUserStore()
    useEffect(() => {
        setSession(data.data)
        navigate('/')
    }, [])
    return <></>
}

export default Logout
