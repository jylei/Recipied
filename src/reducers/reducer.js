import { API_BASE_URL, BITLY_URL } from '../config';
import * as actions from '../actions/action';
const initialState = {
    recipeName: '',
    ingredient: '',
    calories: '',
    steps: '',
    recipes: [],
    loadTo: '',
    isLoggedIn: false,
    loginFailed: false,
    signupFailed: false,
    id: '',
    idSet: false,
    renderToPage: false,
    recipeData: '',
    added: false,
    username: '',
    userData: [],
    delRecipe: false,
    clicked: false,
    ingredientsList: [],
    stepsList: [],
    file: '',
    imagePreviewUrl: '',
    uuid: '',
    token: '',
    loading: false,
    link: '',
    linkCreated: false,
    signupPassError: false
}

export const SEND_RECIPE = 'SEND_RECIPE';
export const sendRecipe = (recipeName) => ({
    type: SEND_RECIPE,
    recipeName
})

export const ADD_FINISHED = 'ADD_FINISHED';
export const addFinished = (data) => ({
    type: ADD_FINISHED,
    payload: data
})

export const GET_RECIPE = 'GET_RECIPE';
export const getRecipe = (recipeName) => ({
    type: GET_RECIPE,
    payload: recipeName
});

export const LOAD_TO = 'LOAD_TO';
export const loadTo = (endpoint) => ({
    type: LOAD_TO,
    payload: endpoint,
});

export const LOGIN_FINISHED = 'LOGIN_FINISHED';
export const loginFinished = (cred) => ({
    type: LOGIN_FINISHED,
    payload: cred
})

export const GET_ID = 'GET_ID';
export const getId = (id) => ({
    type: GET_ID,
    payload: id
})

export const RENDER_ID = 'RENDER_ID';
export const renderID = (id) => ({
    type: RENDER_ID,
    payload: id
})

export const RECIPE_DATA = 'RECIPE_DATA';
export const recipeData = (data) => ({
    type: RECIPE_DATA,
    payload: data
})

export const REMOVE_STATE = 'REMOVE_STATE';
export const removeState = () => ({
    type: REMOVE_STATE
})

export const GET_USER = 'GET_USER';
export const getUser = (data) => ({
    type: GET_USER,
    payload: data
})

export const RECIPE_DELETED = 'RECIPE_DELETED';
export const recipeDeleted = () => ({
    type: RECIPE_DELETED
})

export const DB_CLICKED = 'DB_CLICKED';
export const dbClicked = (data) => ({
    type: DB_CLICKED,
    payload: data
})

export const ADD_RLIST = 'ADD_RLIST';
export const addRList = (recipe) => ({
    type: ADD_RLIST,
    payload: recipe
});

export const ADD_STEP_LIST = 'ADD_STEP_LIST';
export const addStepList = (step) => ({
    type: ADD_STEP_LIST,
    payload: step
});

export const ADD_FILE = 'ADD_FILE';
export const addFiles = (files) => ({
    type: ADD_FILE,
    payload: files
})

export const ADD_IMG = 'ADD_IMG';
export const addImg = (img) => ({
    type: ADD_IMG,
    payload: img
})

export const SAVE_ID = 'SAVE_ID';
export const saveId = (id) => ({
    type: SAVE_ID,
    payload: id
})

export const LOADING_BAR = 'LOADING';
export const loadingBar = (data) => ({
    type: LOADING_BAR,
    payload: data
})

export const SAVE_BITLY_LINK = 'SAVE_BITLY_LINK';
export const saveBitlyLink = (data) => ({
    type: SAVE_BITLY_LINK,
    payload: data
})

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = () =>({
    type: LOGIN_FAILED,
    payload: true
})

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = () => ({
    type: SIGNUP_FAILED,
    payload: true
})

export const UNMATCH_PASS = 'UNMATCH_PASS';
export const unmatchPass = () => ({
    type: UNMATCH_PASS,
    payload: true
})

export const recipeReducer = (state = initialState, action) => {
    if (action.type === actions.REMOVE_STATE) {
        state = Object.assign({}, state, {
            added: false
        })
        return state;
    }
    if (action.type === actions.ADD_FINISHED) {
        state = Object.assign({}, state, {
            added: action.payload
        })
        return state;
    }
    if (action.type === actions.GET_RECIPE) {
        state = Object.assign({}, state, {
            recipes: action.payload
        });
        return state;
    }
    if (action.type === actions.SEND_RECIPE) {
        state = Object.assign({}, state, {
            recipeName: action.recipeName
        });
        return state;
    }
    if (action.type === actions.LOAD_TO) {
        state = Object.assign({}, state, {
            loadTo: action.payload
        });
        return state;
    }
    if (action.type === actions.LOGIN_FINISHED) {
        state = Object.assign({}, initialState, {
            isLoggedIn: true,
            token: action.payload
        })
        return state;
    }
    if (action.type === actions.LOGIN_FAILED) {
        state = Object.assign({}, initialState, {
            loginFailed: action.payload
        })
    }
    if (action.type === actions.SIGNUP_FAILED) {
        state = Object.assign({}, initialState, {
            signupFailed: action.payload
        })
    }
    if (action.type === actions.GET_ID) {
        state = Object.assign({}, initialState, {
            id: action.payload,
            idSet: true
        })
        return state;
    }
    if (action.type === actions.RENDER_ID) {
        state = Object.assign({}, initialState, {
            id: action.payload,
            renderToPage: true
        })
        return state;
    }
    if (action.type === actions.RECIPE_DATA) {
        state = Object.assign({}, initialState, {
            recipeData: action.payload
        })
        return state;
    }

    if (action.type === actions.GET_USER) {
        state = Object.assign({}, initialState, {
            userData: action.payload
        })
        return state;
    }
    if (action.type === actions.RECIPE_DELETED) {
        state = Object.assign({}, initialState, {
            delRecipe: true
        })
        return state;
    }
    if (action.type === actions.DB_CLICKED) {
        state = Object.assign({}, initialState, {
            clicked: action.payload
        })
        return state;
    }
    if (action.type === actions.ADD_RLIST) {
        state = Object.assign({}, state, {
            ingredientsList: state.ingredientsList.concat(action.payload)
        })
        return state;
    }
    if (action.type === actions.ADD_STEP_LIST) {
        state = Object.assign({}, state, {
            stepsList: state.stepsList.concat(action.payload)
        })
        return state;
    }
    if (action.type === actions.ADD_FILE) {
        state = Object.assign({}, state, {
            file: action.payload
        })
        return state;
    }
    if (action.type === actions.ADD_IMG) {
        state = Object.assign({}, state, {
            imagePreviewUrl: action.payload
        })
        return state;
    }
    if (action.type === actions.SAVE_ID) {
        state = Object.assign({}, state, {
            uuid: action.payload
        })
        return state;
    }
    if (action.type === actions.LOADING_BAR) {
        state = Object.assign({}, state, {
            loading: action.payload
        })
    }
    if(action.type === actions.SAVE_BITLY_LINK) {
        state = Object.assign({}, state, {
            link: action.payload,
            linkCreated: true
        })
        return state;
    }
    if(action.type === actions.UNMATCH_PASS) {
        state = Object.assign({}, state, {
            signupPassError: action.payload
        })
        return state;
    }
    return state;
};
var token;

export const login = (data) => (dispatch) => {
    dispatch(loadingBar(true));
    fetch(`${API_BASE_URL}/users/login`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            res.json().then((data) => {
                token = data.authToken;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('id', data.user);
                if (token) {
                    dispatch(loginFinished(token));
                    dispatch(loadingBar(false));
                }
            })
                .then(res => {
                    if (!token) {
                        dispatch(loginFailed());
                    }
                })
        })
}

export const createUser = (data) => (dispatch) => {
    fetch(`${API_BASE_URL}/users/signup`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                dispatch(signupFailed());
                return Promise.reject(res.statusText);
            }
            dispatch(login(data))
        })
}

export const deleteRecipe = (id) => (dispatch) => {
    var userid = sessionStorage.getItem('id');
    fetch(`${API_BASE_URL}/recipes/${id}`,
        {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(recipeDeleted());
            dispatch(getUserName(userid));
        })
        .catch(err => console.log(`${err}`))
}

export const getUserName = (user_id) => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes/user/${user_id}`,
        {
            method: 'GET',
            header: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => {
            dispatch(getUser(res));
        })
        .catch(err => console.log(`${err}`))
}

export const submitRecipe = (recipeName, ingredient, calories, steps, id, userid) => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dishName: recipeName,
                ingredients: ingredient,
                calories: calories,
                steps: steps,
                image: id,
                userid: userid
            }),
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(() => {
            dispatch(addFinished(true));
        })
        .catch(err => console.log(`${err}`))
}

export const getReciped = (recipeName) => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes/get/${recipeName}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => {
            dispatch(getRecipe(res));
        })
        .catch(err => console.log(`error getting recipes ${err}`))
}

export const getAllRecipes = () => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => {
            dispatch(getRecipe(res));
        })
        .catch(err => console.log(`error getting recipes ${err}`))
}
export const searchRecipe = (id) => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes/id/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(res => {
            dispatch(recipeData(res));
        })
        .catch(err => console.log(`error getting recipes ${err}`))
}

export const updateRecipe = (ingredient, step, calories, dishName, recipeId, uuid) => (dispatch) => {
    fetch(`${API_BASE_URL}/recipes/${recipeId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: recipeId,
                dishName: dishName,
                ingredients: ingredient,
                calories: calories,
                steps: step,
                image: uuid,
            }),
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(() => {
            dispatch(addFinished(true));
        })
        .catch(err => console.log(`${err}`));
}

export const uploadImage = (img) => (dispatch) => {
    dispatch(loadingBar(true));
    let data = new FormData();
    data.append('file', img);
    data.append('name', img.name);
    fetch(`${API_BASE_URL}/upload`,
        {
            method: 'POST',
            body: data
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            dispatch(saveId(data.imageid));
            dispatch(loadingBar(false));
        })
        .catch(err => console.log(`${err}`));
}

export const logOut = () => (dispatch) => {
    fetch(`${API_BASE_URL}/users/logout`,
        {
            method: 'GET',
        })
        .then(res => {
            sessionStorage.clear();
        })
        .catch(err => console.log(`${err}`));
}

export const createBitlyLink = (link) => (dispatch) => {
    fetch(`${BITLY_URL}${link}`,
        { method: 'GET' })
        .then(res => {
            return res.json();
        })
        .then(data => {
            dispatch(saveBitlyLink(data.data.url))
        })
        .catch(err => console.log(`${err}`));
}