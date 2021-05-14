import vue from 'Vue';

export default {
    state: {
        token: localStorage.getItem('access_token') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        /**
         * Set token in state
         *
         * @param state
         * @param token
         */
        retrieveToken(state, token) {
            state.token = token
        },
        /**
         * Destroy token in state
         *
         * @param state
         */
        destroyToken(state) {
            state.token = null
        }
    },
    actions: {
        /**
         * function asynchronous to get token from login
         *
         * @param context
         * @param credentials
         * @returns {Promise<void>}
         */
        async retrieveToken(context, credentials) {
            try {
                const response = await axios.post(`/api/login`, {
                    email: credentials.email,
                    password: credentials.password
                });
                const token = response.data.access_token;
                if(localStorage.getItem('access_token')){
                    localStorage.removeItem('access_token');
                }
                localStorage.setItem('access_token', token);
                context.commit('retrieveToken', token);
                return response
            } catch (error) {
                throw error;
            }
        },
        /**
         * Logout and destroy token and clean in localstorage
         *
         * @param context
         */
        async destroyToken(context) {
            if (context.getters.loggedIn) {
                try {
                    const response = await axios.post(`/api/logout`, '', {
                        headers: {Authorization: "Bearer " + context.state.token}
                    });
                    localStorage.removeItem('access_token');
                    context.commit('destroyToken');
                    return response;
                } catch (error) {
                    throw error;
                }
            }
        }
    }
}
