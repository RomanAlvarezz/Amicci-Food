// const NAME = "api.edamam",
//  DOMAIN = `https://${NAME}.com`,
//  SITE = `${DOMAIN}/api`,
//  API_ENAM = `${SITE}/recipes/v2`,
//  API_ID = '9c838449',
//  API_KEY = '1428c2bae400b1284a67b5aaa47286ac',
//  POSTS = `${API_ENAM}/posts?_embed&per_page=${PER_PAGE}`,
//  POST = `${API_WP}/posts`,
//  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

const EDANAM_API = 'https://api.edamam.com/api/recipes/v2',
API_ID = '9c838449',
API_KEY = '1428c2bae400b1284a67b5aaa47286ac',
RECIPES = `${EDANAM_API}?type=public&app_id=${API_ID}&app_key=${API_KEY}&mealType=`,
SEARCHRECIPE = `${EDANAM_API}`,
MEALTYPES = ['breakfast', 'brunch', 'lunch', 'snack', 'dinner', 'teatime'];

let url = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=9c838449&app_key=1428c2bae400b1284a67b5aaa47286ac&mealType=Breakfast';

let urlrecetaespecifica = 'https://api.edamam.com/api/recipes/v2/2e9b699be433fab7da069629e1699455?type=public&app_id=9c838449&app_key=1428c2bae400b1284a67b5aaa47286ac'

export default {
    EDANAM_API,
    SEARCHRECIPE,
    RECIPETYPES: RECIPES,
    MEALTYPES,
    API_ID,
    API_KEY
}