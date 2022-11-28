import * as api from '../../tools/api';

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