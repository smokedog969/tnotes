import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

/* const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { username, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth */

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let isGat = false
    let isFbo = false
    let isRamp = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        isGat = roles.includes('Gat')
        isFbo = roles.includes('Fbo')
        isRamp = roles.includes('Ramp')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"
        if (isGat) status = "Gat"
        if (isFbo) status = "Fbo"
        if (isRamp) status = "Ramp"

        return { username, roles, status, isManager, isAdmin, isGat, isFbo, isRamp }
    }

    return { username: '', roles: [], isManager, isAdmin, isGat, isFbo, isRamp, status }
}
export default useAuth