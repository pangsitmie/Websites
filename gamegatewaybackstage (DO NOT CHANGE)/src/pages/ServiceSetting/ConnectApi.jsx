import * as api from '../../tools/api';

export const get_service = async (id) => {
    let result;
    try {
        result = await api.api_get_service(id)
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

export const add_service = async (data) => {
    let result;
    try {
        result = await api.api_add_service(data)
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

export const update_service = async (SA, data) => {
    let result;
    try {
        result = await api.api_update_service(SA, data)
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

export const delete_service = async (SA) => {
    let result;
    try {
        result = await api.api_delete_service(SA)
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

export const get_service_games = async (id) => {
    let result;
    try {
        result = await api.api_get_service_games(id)
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

export const add_service_games = async (id, data) => {
    let result;
    try {
        result = await api.api_add_service_games(id, data)
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

export const delete_service_games = async (id, url) => {
    let result;
    try {
        result = await api.api_delete_service_games(id, url)
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