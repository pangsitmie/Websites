import * as api from '../tools/api';

export const login = async (data) => {
    let result = {}
    try {
        const get = await api.api_login(data)
        result = get.data
    } catch (error) {
        console.log(error)
        return (error)
    } finally {
        return result
    }
}

export const logout = async () => {
    let result = {}
    try {
        const get = await api.api_logout()
        result = get.data
    } catch (error) {
        console.log(error)
        return (error)
    } finally {
        return result
    }
}