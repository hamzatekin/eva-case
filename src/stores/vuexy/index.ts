import { createStore, createLogger } from 'vuex';
import user from './modules/user-module';
import auth from './modules/auth-module';
import loading from './modules/loading-module';
import localStorage from './modules/local-storage-module';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        user,
        auth,
        loading,
        localStorage,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
