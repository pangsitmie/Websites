import * as api from '../../tools/api';

export const get_gameSubclass = async () => {
    let result;
    try {
        result = await api.api_get_gameSubclass()
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

export const get_gameSubclass_games = async (serviceID) => {
    let result;
    try {
        result = await api.api_get_gameSubclass_games(serviceID)
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

export const add_gameSubclass = async (data) => {
    let result;
    try {
        result = await api.api_add_gameSubclass(data)
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

export const update_gameSubclass = async (id, data) => {
    let result;
    try {
        result = await api.api_update_gameSubclass(id, data)
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

export const delete_gameSubclass = async (id) => {
    let result;
    try {
        result = await api.api_delete_gameSubclass(id)
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

export const add_gameSubclass_games = async (id, data) => {
    let result;
    try {
        result = await api.api_add_gameSubclass_games(id, data)
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

export const delete_gameSubclass_games = async (id, gameID) => {
    let result;
    try {
        result = await api.api_delete_gameSubclass_games(id, gameID)
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