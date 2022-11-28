import * as api from '../../tools/api';

export const get_ISP = async () => {
    let result;
    try {
        result = await api.api_get_ISP()
        if (result.data.status === '1x010') {
            localStorage.clear()
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    } catch (error) {
        console.log(error)
    } finally {
        return result.data
    }
}

export const get_ISPGame = async (SA) => {
    let result;
    try {
        result = await api.api_get_ISP_games(SA)
        if (result.data.status === '1x010') {
            localStorage.clear()
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    } catch (error) {
        console.log(error)
    } finally {
        return result.data
    }
}


export const add_gatewayGame_ISPGame = async (data) => {
    let result;
    try {
        result = await api.api_add_gatewayGame_ISPGame(data)
        if (result.data.status === '1x010') {
            localStorage.clear()
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    } catch (error) {
        console.log(error)
    } finally {
        return result.data
    }
}

export const update_gatewayGame_ISPGame = async (id, data) => {
    let result;
    try {
        result = await api.api_update_gatewayGame_ISPGame(id, data)
        if (result.data.status === '1x010') {
            localStorage.clear()
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    } catch (error) {
        console.log(error)
    } finally {
        return result.data
    }
}

export const remove_gatewayGame_ISPGame = async (id) => {
    let result;
    try {
        result = await api.api_remove_gatewayGame_ISPGame(id)
        if (result.data.status === '1x010') {
            localStorage.clear()
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    } catch (error) {
        console.log(error)
    } finally {
        return result.data
    }
}