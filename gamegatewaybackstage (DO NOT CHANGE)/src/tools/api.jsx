import axios from 'axios';
import ApolloClient from 'apollo-boost';
const select = false;
const server = select ? 'https://gateway.cloudprogrammingonline.com' : 'https://gateway-test.cloudprogrammingonline.com';

// v1 相關的 api
const v1Requset = axios.create({
    baseURL: server + '/backstage/v1/',
    transformRequest: [
        function (data, headers) {
            let token = localStorage.getItem('gameGatewayToken');
            if (token) headers['authorization'] = 'Bearer ' + token
            headers['x-platform'] = 'web-manager-backstage'
            return data;
        },
        ...axios.defaults.transformRequest
    ]
});


// GQL 相關的 api
export const GqlRequest = new ApolloClient({
    uri: server + '/graphql',
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('gameGatewayToken'),
        'x-platform': 'web-manager-backstage'
    },
    onError: ({ networkError, graphQLErrors }) => {
        graphQLErrors && console.log('⚛️ GraphQl Error ⚛️', graphQLErrors)
        networkError && console.log('👮🏻‍♀️ network error', networkError)
        if (graphQLErrors[0].extensions.code === "UNAUTHENTICATED") {
            localStorage.removeItem('gameGatewayToken')
            window.location.href = `${process.env.PUBLIC_URL}/`
        }
    }
});

// 登入登出 相關的 api
export const api_login = (data, config) => v1Requset.post('login', data, config);
export const api_logout = (config) => v1Requset.post('logout', config);

// 遊戲列表 相關的 api
export const api_get_ISP = (config) => v1Requset.get('third-party-isp/', config);
export const api_get_ISP_games = (ISPID, config) => v1Requset.get('third-party-isp/' + ISPID + '/games', config);
export const api_add_gatewayGame_ISPGame = (data, config) => v1Requset.post('gatewayGame', data, config);
export const api_update_gatewayGame_ISPGame = (id, data, config) => v1Requset.patch('gatewayGame/' + id, data, config);
export const api_remove_gatewayGame_ISPGame = (id, config) => v1Requset.delete('gatewayGame/' + id, config);

// 服務 相關的 api
export const api_get_service = (config) => v1Requset.get('service/', config);
export const api_get_service_games = (serviceID, config) => v1Requset.get('service/' + serviceID + '/games', config);
export const api_add_service = (data, config) => v1Requset.post('service/', data, config);
export const api_add_service_games = (serviceID, data, config) => v1Requset.post('service/' + serviceID + '/games', data, config);
export const api_update_service = (serviceID, data, config) => v1Requset.patch('service/' + serviceID, data, config);
export const api_delete_service = (serviceID, config) => v1Requset.delete('service/' + serviceID, config);
export const api_delete_service_games = (serviceID, url, config) => v1Requset.delete('service/' + serviceID + '/games/?' + url, config);

// 遊戲類別 相關的 api
export const api_get_gameSubclass = (config) => v1Requset.get('game-subclass/', config);
export const api_get_gameSubclass_games = (subclassID, config) => v1Requset.get('game-subclass/' + subclassID + '/games', config);
export const api_add_gameSubclass = (data, config) => v1Requset.post('game-subclass/', data, config);
export const api_add_gameSubclass_games = (subclassID, data, config) => v1Requset.post('game-subclass/' + subclassID + '/games', data, config);
export const api_update_gameSubclass = (subclassID, data, config) => v1Requset.patch('game-subclass/' + subclassID, data, config);
export const api_delete_gameSubclass = (subclassID, config) => v1Requset.delete('game-subclass/' + subclassID, config);
export const api_delete_gameSubclass_games = (subclassID, url, config) => v1Requset.delete('game-subclass/' + subclassID + '/games/?' + url, config);